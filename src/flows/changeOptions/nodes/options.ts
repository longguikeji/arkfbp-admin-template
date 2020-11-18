import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Options extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.params.forEach((i: any) => {
      i.value = i.id
      i.label = i.title
      delete i.title
      delete i.id
    })
  }
}
