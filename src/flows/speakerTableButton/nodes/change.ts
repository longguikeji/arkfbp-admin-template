import TableState from '@/admin/common/data/Table/TableState'
import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Change extends FunctionNode {
  async run() {
    const table: TableState = this.inputs.params
    const column = table.columns![9]
    table.data!.forEach((item, index) => {
      column.scopeRowState[index].state[2] = {
        label: column.scopeRowState[index].state[2].option[item.is_valid],
        ...column.scopeRowState[index].state[2]
      }
    })

    return this.inputs
  }
}
