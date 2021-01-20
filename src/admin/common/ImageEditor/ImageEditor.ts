import { BaseState } from '@/admin/base/BaseVue'

export default interface ImageEditor extends BaseState {
  value: string; // 图片地址
  isShow: boolean;
}
