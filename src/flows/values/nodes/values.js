import { FunctionNode } from 'arkfbp/lib/functionNode'

export class Values extends FunctionNode {
  async run() {
    if (this.inputs === null) {
      return this.inputs
    }
    this.inputs.avatar_url.replace('https://cdn.yixi.tv/almond/', '')

    return this.inputs
  }
}
