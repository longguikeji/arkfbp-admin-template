import { FunctionNode } from 'arkfbp/lib/functionNode'
import Filter from '@/utils/filter'
export class GetUrlNode extends FunctionNode {

  parseUrlBracket(url: string, state: any) {
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
  
  parseUrlAngle(url: string, data: any) {
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
  
  async run() {
    const url = this.inputs.url
    const data = this.inputs.data
    const state = this.inputs.client

    if (url.indexOf('<') !== -1 && url.indexOf('{') !== -1) {
      const firstUrl = this.parseUrlAngle(url, data);
      const finalUrl = this.parseUrlBracket(firstUrl, state)
      return finalUrl
    }
    if (url.indexOf('<') !== -1) {
      return this.parseUrlAngle(url, data);
    }
    if (url.indexOf('{') !== -1) {
      return this.parseUrlBracket(url, state)
    }
    return url
  }
}
