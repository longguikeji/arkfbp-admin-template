export default interface DividerState {
  value: string;
  direction?: string; //设置分割线方向	string	horizontal / vertical	horizontal
  contentPosition: string; //	设置分割线文案的位置	string	left / right / center	center
  width?: number;
}
