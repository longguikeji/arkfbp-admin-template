import { runWorkflowByClass } from 'arkfbp/lib/flow'
import { Loading } from 'element-ui'
import { FlowInput } from './flow'
import Filter from '@/utils/filter'

const flows = require.context("@/flows", true, /\.ts$/);

function getUrl(url: string, data: any, state: any) {
  if (!data && url.indexOf("<") === -1 && url.indexOf("[") === -1) {
    return url;
  }
  if (url.indexOf("<") !== -1) {
    const property = url.slice(url.indexOf("<") + 1, url.lastIndexOf(">"));
    return (
      url.slice(0, url.indexOf("<")) + data[property] + url.slice(url.indexOf(">") + 1)
    );
  }
  if (url.indexOf("[") !== -1) {
    const urlParams = url.slice(url.indexOf("[") + 1, url.lastIndexOf("]"));
    let tempState = state
    let tempParams: any
    urlParams.split(".").forEach((v: string) => {
      tempState = tempState[v];
      tempParams = tempState;
    });
    return (
      url.slice(0, url.indexOf("[")) + tempParams + url.slice(url.indexOf("]") + 1)
    );
  }
}

export function runFlowByFile(filename: string, inputs: FlowInput) {
  filename = filename.replace("@/flows", ".") + "/index.ts";
  const flow = flows(filename);
  return runWorkflowByClass(flow.Main, inputs);
}

export async function runAction(action: { flow: string; inputs: FlowInput }) {
  if (action.flow) {
    const loading = Loading.service({ fullscreen: true })
    const outputs = await runFlowByFile(action.flow, action.inputs)
    loading.close()
    return outputs
  }
}

export async function runFlow(state: any, flow: any, data: any) {
  if (flow.type === "assign") {
    await runAction({
      flow: `@/flows/${flow.name}`,
      inputs: {
        client: state,
        clientServer: flow.client_config
      }
    });

    return;
  }

  if (flow.type === "api") {
    let params: any = {};
    if (typeof flow.request === "string") {
      let temp = state;
      flow.request.split(".").forEach((v: string) => {
        temp = temp[v];
        params = temp;
      });
    }

    if (typeof flow.request === "object") {
      Object.keys(flow.request).forEach(key => {
        let temp = state;
        const vs = flow.request[key].split(".");
        vs.forEach((v: string) => {
          if (v.slice(0, 11) === 'items[prop=') {
            const res = Filter(v, temp)
            temp = temp['items'][res]
          } else if (v.slice(0, 13) === 'columns[prop=') {
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
      flow: `@/flows/${flow.name}`,
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

  let params = state
  if (flow.request) {
    flow.request.split(".").forEach((v: string) => {
      if (v.slice(0, 11) === 'items[prop=') {
        const res = Filter(v, params)
        params = params['items'][res]
      } else if (v.slice(0, 13) === 'columns[prop=') {
        const res = Filter(v, params)
        params = params['cloumns'][res]
      } else {
        params = params[v]
      }
    });
  }
  await runAction({
    flow: `@/flows/${flow.name}`,
    inputs: {
      params: params,
      client: data
    }
  });
}
