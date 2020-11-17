import ButtonState from '../ButtonState'
import SwitchButton from '../SwitchButton/SwitchButtonState'

export default interface ButtonArrayState {
  [index:number]:[ButtonState|SwitchButton]
}
