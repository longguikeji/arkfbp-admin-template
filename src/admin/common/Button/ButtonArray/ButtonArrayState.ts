import { BaseState } from '@/admin/base/BaseVue'
import ButtonState from '../ButtonState'
import SwitchButtonState from '../SwitchButton/SwitchButtonState'

export default interface ButtonArrayState extends BaseState {
  [index:number]:[ButtonState|SwitchButtonState]
}
