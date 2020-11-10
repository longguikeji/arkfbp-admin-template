import { FunctionNode } from "arkfbp/lib/functionNode";
import * as qiniu from "qiniu-js";

export class Node2 extends FunctionNode {
  async run() {
    const uphost = "https://cdn.yixi.tv/";

    const state = this.$state.fetch();

    const uptoken = this.inputs.data.uptoken;
    // const options = {
    //   quality: 0.92,
    // maxWidth: 800,
    // maxHeight: 800,
    // }
    // const data = await qiniu.compressImage(state.file,options);

    const key =
      state.path + new Date().getTime() + "." + state.file.name.split(".")[1];
    const observable = qiniu.upload(
      // data.dist,
      state.file,
      key,
      uptoken,
      {
        fname: key
      },
      {
        useCdnDomain: true,
        uphost: uphost
      }
    );

    const subscription = observable.subscribe({
      complete(res) {
        state.complete(uphost + key);
      }
    });
  }
}
