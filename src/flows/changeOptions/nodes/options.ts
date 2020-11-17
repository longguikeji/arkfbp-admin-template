import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Options extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.forEach((i: any) => {
      
    })
  }
}
