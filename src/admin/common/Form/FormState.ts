import { BaseState } from '@/admin/base/BaseVue'
import FormItemState from './FormItem/FormItemState'

export interface FormItemStateArray {
  [index: number]: FormItemState
}

export default interface FormState extends BaseState {
  items?: [FormItemState | FormItemStateArray]

  inline?: boolean
  size?: string
  disabled?: boolean
  labelPosition?: string
  labelWidth?: string
  labelSuffix?: string
}
