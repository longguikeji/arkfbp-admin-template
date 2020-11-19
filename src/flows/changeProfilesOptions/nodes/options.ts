import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Options extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.params.options.forEach((i: any) => {
      i.value = i.id
      i.label = i.nickname
      delete i.nickname
      delete i.id
    })
    this.inputs.params.value = this.inputs.params.options[0].value
  }
}
