import { runWorkflowByClass } from 'arkfbp/lib/flow'
import { Loading } from 'element-ui'
import Filter from '@/utils/filter'

const flows = require.context('@/flows', true, /index\.ts$/)
const arkfbpFlows = require.context('@/arkfbp/flows', true, /index\.ts$/)

function getUrl(url: string, data: any, state: any) {
  if (url.indexOf('<') !== -1 && url.indexOf('{') !== -1) {
    const firstUrl = parseUrlAngle(url, data);
    const finalUrl = parseUrlBrace(firstUrl, state)
    return finalUrl
  }
  if (url.indexOf('<') !== -1) {
    return parseUrlAngle(url, data);
  }
  if (url.indexOf('{') !== -1) {
    return parseUrlBrace(url, state)
  }
  return url
}

function parseUrlBrace(url: string, state: any) {
  const bracketSet = url.match(/{/g) || 0
  const bracketPropsSet = url.match(/({)(\S*?)(?=})/g)
  const bracketNumber = !bracketSet ? 0 : bracketSet.length
  const bracketProps = !bracketPropsSet ? null : bracketPropsSet.map(prop => prop.substr(1))
  let bracketPropsValues: Array<any> = []
  if (bracketProps) {
    bracketProps.forEach((p) => {
      let tempState = state
      let tempParams: any
      p.split('.').forEach((v: string) => {
        if (v.includes('items[prop=')) {
          const res = Filter(v, tempState)
          tempState = tempState['items'][res]
        } else if (v.includes('columns[prop=')) {
          const res = Filter(v, tempState)
          tempState = tempState['cloumns'][res]
        } else {
          tempState = tempState[v]
        }
        tempParams = tempState
      })
      bracketPropsValues.push(tempParams)
    })
  }
  for (let i = 0; i < bracketNumber; i++) {
    url = url.slice(0, url.indexOf('{')) + bracketPropsValues[i] + url.slice(url.indexOf('}') + 1)
  }
  return url
}

function parseUrlAngle(url: string, data: any) {
  const angleSet = url.match(/</g) || 0
  const anglePropsSet = url.match(/(<)(\S*?)(?=>)/g)
  const angleNumber = !angleSet ? 0 : angleSet.length
  const angleProps = !anglePropsSet ? null : anglePropsSet.map(prop => prop.substr(1))
  let anglePropsValues: Array<any> = []
  if (angleProps) {
    angleProps.forEach((p) => {
      anglePropsValues.push(data[p])
    })
  }
  for (let i = 0; i < angleNumber; i++) {
    url = url.slice(0, url.indexOf('<')) + anglePropsValues[i] + url.slice(url.indexOf('>') + 1)
  }
  return url
}

export function runFlowByFile(flowPath: string, inputs: any) {
  let flow: any = {}

  if (flowPath.includes('arkfbp')) {
    flow = arkfbpFlows(flowPath.replace('arkfbp/flows', '.') + '/index.ts')
  } else {
    flow = flows(flowPath.replace('flows', '.') + '/index.ts')
  }

  return runWorkflowByClass(flow.Main, inputs)
}

export async function runAction(action: { flow: string, inputs: any }) {
  if (!action.flow) {
    return
  }
  const loading = Loading.service({ fullscreen: true })
  const flow = action.flow.split('.').join('/')
  const outputs = await runFlowByFile(flow, action.inputs)
  loading.close()
  return outputs
}

export async function runFlow(state: any, flow: any, data: any) {
  if (flow.type === 'assign') {
    await runAction({
      flow: flow.name,
      inputs: {
        client: state,
        clientServer: flow.client_config
      }
    })

    return
  }

  if (flow.type === 'api') {
    let params: any = {}
    if (typeof flow.request === 'string') {
      let temp = state
      flow.request.split('.').forEach((v: string) => {
        temp = temp[v]
        params = temp
      })
    }

    if (typeof flow.request === 'object') {
      Object.keys(flow.request).forEach(key => {
        let temp = state
        const vs = flow.request[key].split('.')
        vs.forEach((v: string) => {
          if (v.includes('items[prop=')) {
            const res = Filter(v, temp)
            temp = temp['items'][res]
          } else if (v.includes('columns[prop=')) {
            const res = Filter(v, temp)
            temp = temp['cloumns'][res]
          } else if (v.includes('[')) {
            const res = Filter(v, temp)
            temp = temp[res]
          } else {
            temp = temp[v]
          }
        })
        params[key] = temp
      })
    }

    await runAction({
      flow: flow.name,
      inputs: {
        url: `api/admin/${getUrl(flow.url, data, state)}`,
        method: flow.method,
        params: params,
        client: state,
        clientServer: flow.client_config
      }
    })
    return
  }

  if (flow.type === 'client') {
    let params: any = {}
    if (typeof flow.client_config === 'string') {
      let temp = state
      flow.request.split('.').forEach((v: string) => {
        temp = temp[v]
        params = temp
      })
    }

    if (typeof flow.request === 'object') {
      Object.keys(flow.request).forEach(key => {
        let temp = state
        const vs = flow.request[key].split('.')
        vs.forEach((v: string) => {
          if (v.includes('items[prop=')) {
            const res = Filter(v, temp)
            temp = temp['items'][res]
          } else if (v.includes('columns[prop=')) {
            const res = Filter(v, temp)
            temp = temp['cloumns'][res]
          } else {
            temp = temp[v]
          }
        })
        params[key] = temp
      })
    }

    await runAction({
      flow: flow.name,
      inputs: {
        url: `api/admin/${getUrl(flow.url, data, state)}`,
        method: flow.method,
        params: params,
        data: data,
        client: state,
        clientServer: flow.client_config
      }
    })
    return
  }

  let params = state
  if (flow.request) {
    flow.request.split('.').forEach((v: string) => {
      if (v.includes('items[prop=')) {
        const res = Filter(v, params)
        params = params['items'][res]
      } else if (v.includes('columns[prop=')) {
        const res = Filter(v, params)
        params = params['cloumns'][res]
      } else {
        params = params[v]
      }
    })
  }

  await runAction({
    flow: flow.name,
    inputs: {
      params: params,
      client: data
    }
  })
}
