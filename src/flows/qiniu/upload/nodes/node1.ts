import { APITokenNode } from "@/nodes/APITokenNode";

export class Node1 extends APITokenNode {
  async run() {
    this.url = "api/admin/uptoken/";
    this.method = "GET";
    this.$state=[] as any[];
    this.$state.commit((state:any) => {
      state.complete = this.inputs.complete;
      state.file = this.inputs.file;
      state.path = this.inputs.path;
    });
    return super.run();
  }
}
