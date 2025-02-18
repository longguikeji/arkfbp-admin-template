import { TokenAPINode } from "@/arkfbp/nodes/tokenAPINode";

export class Node1 extends TokenAPINode {
  async run() {
    this.url = "admin/api/admin/uptoken/";
    this.method = "GET";

    this.$state.commit((state: any) => {
      state.complete = this.inputs.complete;
      state.file = this.inputs.file;
      state.path = this.inputs.path;
    });
    const outputs = await super.run();
    return outputs;
  }
}
