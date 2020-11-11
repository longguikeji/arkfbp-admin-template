import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Client extends FunctionNode {
  async run() {

    const state = this.$state.fetch()
    
    if (state.clientServer == null) {
      return this.inputs
    }

    Object.keys(state.clientServer).forEach((key) => {
      const ks = key.split('.')
      
      let tempC = state.client
      
      for (let i = 0; i < ks.length - 1; i++) {
        tempC = tempC[ks[i]]
      }
      
      const vs = state.clientServer[key].split('.')
      
      let tempS = this.inputs
      for (let i = 0; i < vs.length - 1; i++) {
        tempS = tempS[vs[i]]
      }
      tempC[ks[ks.length - 1]] = tempS[vs[vs.length - 1]]
    })
    
    return this.inputs
  }
}
