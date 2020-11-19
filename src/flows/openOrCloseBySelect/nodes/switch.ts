import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Switch extends FunctionNode {
  async run() {
    if (this.inputs.client === 0 || this.inputs.params[0].state.value === 0) {
      this.inputs.params[1].state.disabled = true
    } else {
      this.inputs.params[1].state.disabled = false
    }
  }
}
