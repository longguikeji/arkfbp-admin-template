export default interface DropdownItemState {
  command?: any; // 指令 string/number/object	
  disabled?: boolean; // 禁用  boolean  —  false
  divided?: boolean; // 显示分割线	false
  icon?: string; // 图标类名
  value?: any; // 下拉框每一项的内容
}