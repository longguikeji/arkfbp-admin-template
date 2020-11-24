import { FunctionNode } from 'arkfbp/lib/functionNode'
export class Change extends FunctionNode {
  async run() {
    this.inputs.params.forEach(i => {
      if (i.is_remove === 0) {
        i.actionsAttributes = new Array(2)
        i.actionsAttributes[1] = {
          disabled: true
        }
      }
    })
  }
}
