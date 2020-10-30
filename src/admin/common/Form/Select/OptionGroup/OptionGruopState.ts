import OptionType from '../Option/OptionType'
import SelectState from '../SelectState'
interface GroupState {
  label: string; // 分组的名称
  disabled: boolean; // 是否可以使用
  options: Array<OptionType>;
}
export default interface OptionGroupState extends SelectState {
  options: Array<GroupState>;
}
