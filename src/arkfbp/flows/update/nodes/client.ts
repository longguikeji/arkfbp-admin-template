import { FunctionNode } from 'arkfbp/lib/functionNode'
import Filter from '@/utils/filter'
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
        if (ks[i].slice(0, 11) === 'items[prop=') {
          const res = Filter(ks[i], temp)
          temp = temp['items'][res]
        } else {
          temp = temp[ks[i]]
        }
      }

      temp[ks[ks.length - 1]] = temp[vs[vs.length - 1]]
    })

    return this.inputs
  }
}
