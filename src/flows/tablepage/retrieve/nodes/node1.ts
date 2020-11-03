import { APITokenNode } from '@/nodes/APITokenNode'

export class Node1 extends APITokenNode {
  async run() {
    this.url = this.inputs.url
    this.method = this.inputs.method
    this.params = this.inputs.params

    const outputs = await super.run()

    if (this.inputs.client_server == null) {
      return this.inputs
    }

    Object.keys(this.inputs.client_server).forEach((key) => {
      const ks = key.split('.')
      let tempC = this.inputs.client
      for (let i = 0; i < ks.length - 1; i++) {
        tempC = tempC[ks[i]]
      }

      const vs = this.inputs.client_server[key].split('.')
      let temps = this.outputs
      for (let i = 0; i < vs.length - 1; i++) {
        temps = temps[vs[i]]
      }
      tempC[ks[ks.length - 1]] = temps[vs[vs.length - 1]]
    })

    return outputs
  }
}
