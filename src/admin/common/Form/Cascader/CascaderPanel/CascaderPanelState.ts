export default interface CascaderPanelState {
  value: string; // v-model  绑定值  string / number  —  —
  options: Array<any>; //可选项数据源，键名可通过 Props 属性配置
  props: object; //配置选项
}
