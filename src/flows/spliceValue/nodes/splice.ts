import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Splice extends FunctionNode {
  async run() {
    this.inputs.params.forEach((i) => {
      i.speechChangci = i.speechdate + " " + i.speechcity
    })
  }
}
