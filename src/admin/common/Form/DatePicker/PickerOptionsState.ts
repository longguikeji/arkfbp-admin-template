import ShortcutsState from "./ShortcutsState";
export default interface PickerOptionState {
  shortcuts: ShortcutsState[]; // 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 Object[] — —
  disabledDate: boolean; // 设置禁用状态，参数为当前日期，要求返回 Boolean Function — —
  cellClassName: Function; // 设置日期的 className Function(Date) — —
  firstDayOfWeek: number; // 周起始日 Number 1 到 7 7
  onPick: Function; // 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效 Function({ maxDate, minDate }) — —
}
