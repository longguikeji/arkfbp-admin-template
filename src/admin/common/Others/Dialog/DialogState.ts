import DialogAttrs from './DialogAttrs'
export default interface DialogState {
  buttons?: Array<any>; // 对话框下放按钮内容
  title?: string; // 对话框的标题
  items?: Array<string>; // 对话框每一项的key
  values?: Object; // 对话框每一项的值
  action?: string | Array<string>; // 底部按钮对应的事件
  visible?: boolean; // 弹出框的显示与隐藏
  attributes?: DialogAttrs; // 对话框整体属性
}