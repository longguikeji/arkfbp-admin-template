export default interface OptionState {
  value?: any; // 选项的值
  label?: string; // 选项的标签，若不设置则默认与value相同
  disabled?: boolean; // 是否禁用该选项	
}