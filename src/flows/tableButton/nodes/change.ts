import TableState from '@/admin/common/data/Table/TableState'
import { FunctionNode } from 'arkfbp/lib/functionNode'
export class Change extends FunctionNode {
  async run() {
    // const realState = this.inputs.params.columns[4]

    // const realStateArr = realState.rowRealState
    // debugger
    // console.log('realState', realState)
    // console.log('realStateArr', realStateArr)
    // console.log('realStateArr length', realStateArr.length)
    debugger
    const table:TableState = this.inputs.params
    // const table:TableState = this.inputs.client.table
    const column = table.columns[4]
    const scopeRowState:Array<any> = []

    table.data.forEach((item, index) => {
      scopeRowState[index] = JSON.parse(JSON.stringify(column.scope))
    })
    table.columns[4].scopeRowState = scopeRowState
    return this.inputs
  }
}
