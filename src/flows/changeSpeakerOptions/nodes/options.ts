import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Options extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.forEach((i: any) => {
      i.value = i.id
      i.label = i.name
      delete i.name
      delete i.id
    })
  }
}
