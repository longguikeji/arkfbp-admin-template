import AdminComponentState from '@/admin/common/AdminComponent/AdminComponentState'

export default interface FormItemState extends AdminComponentState {
    label?:string
    labelWidth?: string
    size?: string
    prop?: any
  
}
