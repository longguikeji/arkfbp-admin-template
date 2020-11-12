import BadgeState from '../data/Badge/BadgeState'
export default interface ButtonState {
  label:string
  size:string // 尺寸  string  medium / small / mini —
  type:string // 类型 string primary / success / warning / danger / info / text  —
  plain:boolean // 是否朴素按钮 boolean — false
  round:boolean // 是否圆角按钮 boolean — false
  circle:boolean // 是否圆形按钮 boolean — false
  loading:boolean // 是否加载中状态 boolean — false
  disabled:boolean // 是否禁用状态 boolean — false
  icon:string // 图标类名 string — —
  autofocus:boolean // 是否默认聚焦 boolean — false
  nativeType:string // 原生 type 属性 string button / submit / reset button
  value:any // action时会传的参数
  action:string // flow name
  badge?: BadgeState; // 如果需要badge,添加badge对象即可
  data: any; //
  close?: boolean; // 可选，在弹出框的情形下，用于是否可以点击该按钮后关闭弹出对话框
}
