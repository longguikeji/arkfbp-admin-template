export default interface VueCopperState {
  img: any; //裁剪图片的地址	空	url 地址 || base64 || blob
  outputSize: number; //	裁剪生成图片的质量	1	0.1 - 1
  outputType: string; //	裁剪生成图片的格式	jpg (jpg 需要传入jpeg)	jpeg || png || webp
  info: boolean; //	裁剪框的大小信息	true	true || false
  canScale: boolean; //	图片是否允许滚轮缩放	true	true || false
  autoCrop: boolean; //是否默认生成截图框	false	true || false
  fixed: boolean; //是否开启截图框宽高固定比例	true	true | false
  fixedNumber: string; //	截图框的宽高比例	[1, 1]	[宽度, 高度]
  full: boolean; //	是否输出原图比例的截图	false	true | false
  fixedBox: boolean; //	固定截图框大小 不允许改变	false	true | false
  canMove: boolean; //	上传图片是否可以移动	true	true | false
  canMoveBox: boolean; //	截图框能否拖动	true	true | false
  original: boolean; //	上传图片按照原始比例渲染	false	true | false
  centerBox: boolean; //截图框是否被限制在图片里面	false	true | false
  high: boolean; //	是否按照设备的dpr 输出等比例图片	true	true | false
  infoTrue: boolean; //	true 为展示真实输出图片宽高 false 展示看到的截图框宽高	false	true | false
  maxImgSize: number; //	限制图片最大宽度和高度	2000	0-max
  enlarge: number; //	图片根据截图框输出比例倍数	1	0-max(建议不要太大不然会卡死的呢)
  mode: string; //	图片默认渲染方式	contain	contain , cover, 100px, 100% auto
}
