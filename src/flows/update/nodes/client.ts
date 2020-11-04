import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Client extends FunctionNode {
  async run() {
    const state = this.$state.fetch()
    if (this.inputs.errorCode !== 0) {
      throw new Error(this.inputs.errorMsg)
    }

    Object.keys(state.clientServer).forEach((key) => {
      const ks = key.split('.')
      const vs = state.clientServer[key].split('.')

      let temp = state.client
      for (let i = 0; i < ks.length - 1; i++) {
        temp = temp[ks[i]]
      }

      temp[ks[ks.length - 1]] = temp[vs[vs.length - 1]]
    })

    return this.inputs
  }
}
