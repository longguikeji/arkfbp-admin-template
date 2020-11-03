import { APITokenNode } from '@/nodes/APITokenNode'

export class Node1 extends APITokenNode {
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
