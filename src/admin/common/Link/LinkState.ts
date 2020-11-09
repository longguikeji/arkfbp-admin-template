export default interface LinkState {
  type?: string; // 类型 primary / success / warning / danger / info
  underline?: boolean; // 是否下划线	
  disabled?: boolean; // 是否禁用状态	
  href?: string; // 原生 href 属性	
  icon?: string; // 图标类名	
  value?: string; // 链接名称
}