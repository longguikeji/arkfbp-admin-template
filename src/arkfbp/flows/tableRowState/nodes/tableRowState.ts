import TableState from '@/admin/common/data/Table/TableState'
import { FunctionNode } from 'arkfbp/lib/functionNode'

export class TableRowState extends FunctionNode {
  async run() {
    const table: TableState = this.inputs.params

    table.columns = table.columns!.map(column => {
      const scopeRowState: Array<any> = []

      if (column.scope) {
        table.data!.forEach((item, index) => {
          scopeRowState[index] = JSON.parse(JSON.stringify({
            state: item[column.prop] ? {
              value: item[column.prop]
            } : column.scope.state,
            type: column.scope.type
          }))
        })

        return {
          ...column, 
          scopeRowState
        }
      }

      return column
    })

    return this.inputs
  }
}
