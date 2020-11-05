import BreadcrumbItemState from './BreadcrumbItemState'
export default interface BreadcrumbState {
  separator?: string; // 分隔符	 默认值 斜杠'/'
  separatorClass?: string; // 图标分隔符 class	默认值 -
  items?: Array<BreadcrumbItemState>;
}