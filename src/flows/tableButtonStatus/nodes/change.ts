import { FunctionNode } from 'arkfbp/lib/functionNode'
export class Change extends FunctionNode {
  async run() {
    // if (this.inputs.index === 1 && this.inputs.item.data.is_remove === 0) {
    //   console.log('已经改变了disabled值')
    //   this.inputs.item.disabled = true;
    // }
    // return this.inputs;
  
    // debugger
    // if (this.inputs.state[1].data.is_remove === 0) {
    //   this.inputs.state[1].disabled = true;
    // }
    // debugger
    // return this.inputs

    if (this.inputs.row.is_remove === 0) {
      this.inputs.row.actions = new Array(2)
      this.inputs.row.actions[1] = {
        disabled: true
      }
    }
  }
}
