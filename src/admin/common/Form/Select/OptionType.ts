export default interface OptionType {
  value?: any; // 选项的值
  label?: string; // 选项的标签，若不设置则默认与value相同
  disabled?: boolean; // 是否禁用该选项
  options?: Array<OptionType>; // 是否有options的分区 以及 连续的多个子分区
}