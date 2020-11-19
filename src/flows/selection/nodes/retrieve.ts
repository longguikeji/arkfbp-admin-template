import { APITokenNode } from '@/nodes/APITokenNode'

export class Retrieve extends APITokenNode {
  async run() {
    this.url = this.inputs.url
    this.method = this.inputs.method
    this.inputs.params.ids = this.inputs.params.ids.map((item: any) => item.id)
    this.params = this.inputs.params
    this.$state.commit((state: any) => {
      state.client = this.inputs.client
      state.clientServer = this.inputs.clientServer
    })
    const outputs = await super.run()
    return outputs
  }
}
