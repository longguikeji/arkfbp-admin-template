export default interface MenuItemState {
  index?: string; // 唯一标识
  route?: Object; // vue-router 路径对象
  disabled?: boolean; // 是否禁用 false
}