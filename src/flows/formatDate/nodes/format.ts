import { FunctionNode } from 'arkfbp/lib/functionNode'
import moment from 'moment'
export class Format extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
   
    const date = new Date(this.inputs.value)
    this.inputs.value = moment(date).format("yyyy-MM-DD HH:mm")
  }
}
