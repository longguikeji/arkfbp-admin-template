import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Change extends FunctionNode {
  async run() {
    this.inputs.state.forEach((s, i) => {
      if (i === 1) {
        if (s.data.is_remove === 0) {
          s.disabled = true
        } else {
          s.disabled = false
        }
      } else {
        s.disabled = false
      }
    })
    return this.inputs
  }
}
