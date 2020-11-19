import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Change extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    const deleteArr = new Array()
    this.inputs.params.values.forEach((i: any) => {
      deleteArr.push(i.id)
    })
    this.inputs.params.needed = deleteArr
  }
}
