import { FunctionNode } from 'arkfbp/lib/functionNode'
export class Change extends FunctionNode {
  async run() {
    const realState = this.inputs.params.columns[4]
    
    const realStateArr = realState.rowRealState
    debugger
    console.log('realState', realState)
    console.log('realStateArr', realStateArr)
    console.log('realStateArr length', realStateArr.length)
    // debugger
    // this.inputs.params.data.forEach((item, index) => {
    //   if (item.is_remove === 0) {
    //     // debugger
    //     realState[index].state[1].disabled = true
    //   }
    // })
    
    // return this.inputs
  }
}