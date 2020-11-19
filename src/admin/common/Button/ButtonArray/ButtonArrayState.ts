import ButtonState from '../ButtonState'
import SwitchButtonState from '../SwitchButton/SwitchButtonState'

export default interface ButtonArrayState {
  [index:number]:[ButtonState|SwitchButtonState]
}
