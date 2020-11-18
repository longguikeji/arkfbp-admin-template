import { FunctionNode } from 'arkfbp/lib/functionNode'
import moment from 'moment'
export class Format extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    const fmt = this.inputs.params.format.replace(/dd/, "DD")
    const date = new Date(this.inputs.params.value)
    this.inputs.params.value = moment(date).format(fmt)
  }
}
