import { BaseState } from '@/admin/base/BaseVue'
import FormItemState from './FormItem/FormItemState'

export default interface FormState extends BaseState {
  items?: [FormItemState|Array<FormItemState>]

  inline?: boolean
  size?: string
  disabled?: boolean
  labelPosition?: string
  labelWidth?: string
  labelSuffix?: string
}
