import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Node2 extends FunctionNode {
  async run() {
    const state = this.$state.fetch()
    if (state.client_server == null) {
      return this.inputs
    }

    Object.keys(state.client_server).forEach((key) => {
      const ks = key.split('.')
      let tempC = state.client
      for (let i = 0; i < ks.length - 1; i++) {
        tempC = tempC[ks[i]]
      }

      const vs = state.client_server[key].split('.')
      let tempS = this.inputs
      for (let i = 0; i < vs.length - 1; i++) {
        tempS = tempS[vs[i]]
      }
      tempS[ks[ks.length - 1]] = tempS[vs[vs.length - 1]]
    })

    return this.inputs
  }
}
