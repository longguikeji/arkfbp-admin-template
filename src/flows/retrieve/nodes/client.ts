import { FunctionNode } from 'arkfbp/lib/functionNode'
import Filter from '@/utils/filter'
import ChangeOptions from '@/utils/options'
export class Client extends FunctionNode {
  async run() {
    const state = this.$state.fetch()
    if (state.clientServer == null) {
      return this.inputs
    }
    const _this = this
    Object.keys(state.clientServer).forEach((key) => {
      const ks = key.split('.')
      let tempC = state.client
      for (let i = 0; i < ks.length - 1; i++) {
        if (ks[i].includes('items[prop=')) {
          const res = Filter(ks[i], tempC)
          tempC = tempC['items'][res]
        } else if (ks[i].slice(0, 13) === 'columns[prop=') {
          const col = Filter(ks[i], tempC)
          tempC = tempC['columns'][col]
        } else {
          tempC = tempC[ks[i]]
        }
        if (tempC.type && tempC.type === 'Select') {
          ChangeOptions(_this.inputs.data.items)
        }
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
