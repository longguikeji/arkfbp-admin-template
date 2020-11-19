import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Change extends FunctionNode {
  async run() {
    
    if (this.inputs.index === 1 && this.inputs.item.data.is_remove === 0) {
      this.inputs.item.disabled = true
    }
    
  }
}
