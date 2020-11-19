import { FunctionNode } from 'arkfbp/lib/functionNode'
import moment from 'moment'
export class Format extends FunctionNode {
  async run() {
    if (this.inputs.params.value === "" || this.inputs.params.value === null) {
      return this.inputs.params.value
    }
    
    const fmt = this.inputs.params.format.replace(/dd/, "DD")
    const date = new Date(this.inputs.params.value)
    this.inputs.params.value = moment(date).format(fmt)
  }
}
