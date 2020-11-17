import DialogAttrs from './DialogAttrs'
import FormState from '@/admin/common/Form/FormState'
import TablePageState from '@/admin/TablePage/TablePageState'
export default interface DialogState extends FormState, TablePageState {
  values?: Object; // 对话框每一项的值
  actions?: string | Array<any>; // 底部按钮对应的事件
  visible?: boolean; // 弹出框的显示与隐藏
  attributes?: DialogAttrs; // 对话框整体属性
  type?: string; // 判断Dialog的类型 是 TablePage 还是 FormPage
}