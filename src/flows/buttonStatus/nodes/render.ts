import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Render extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.forEach((i: any) => {
      if (i.is_remove === 0) {
        i.button = new Array(2)
        i.button[1] = {
          disabled: true
        }
      } else {
        i.button = new Array(2)
        i.button[1] = {
          disabled: false
        }
      }
    })
  }
}
