import SelectState from '../SelectState'
import OptionType from './OptionType'
export default interface OptionState extends SelectState {
  options: Array<OptionType>
}