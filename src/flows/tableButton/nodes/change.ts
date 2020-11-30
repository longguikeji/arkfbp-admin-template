import TableState from '@/admin/common/data/Table/TableState'
import { FunctionNode } from 'arkfbp/lib/functionNode'
export class Change extends FunctionNode {
  async run() {
    const table:TableState = this.inputs.params
    const column = table.columns[4]
    const scopeRowState:Array<any> = []

    table.data.forEach((item, index) => {
      scopeRowState[index] = JSON.parse(JSON.stringify(column.scope))
    })
    table.columns[4].scopeRowState = scopeRowState
    return this.inputs
  }
}
