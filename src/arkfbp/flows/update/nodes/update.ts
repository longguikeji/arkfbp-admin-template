import { TokenAPINode } from '@/arkfbp/nodes/tokenAPINode'

export class Update extends TokenAPINode {
  async run() {
    this.url = this.inputs.url
    this.method = this.inputs.method
    this.params = this.inputs.params

    this.$state.commit((state: any) => {
      state.client = this.inputs.client
      state.clientConfig = this.inputs.clientConfig
    })

    const outputs = await super.run()
    return outputs
  }
}
