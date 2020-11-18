import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Reliant extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    Object.keys(this.inputs.params).forEach((paramsKey: any) => {
      this.inputs.params[paramsKey] = this.inputs.client[paramsKey]
    })
  }
}
