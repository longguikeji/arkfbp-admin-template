export default interface AvatorState {
  icon?: string; // 设置头像的图标类型，参考 Icon 组件	
  size?: string | number; // 设置头像的大小	number / large / medium / small	
  shape?: string; // 设置头像的形状	circle / square	
  src?: string; // 图片头像的资源地址	
  srcSet?: string; // 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像	
  alt?: string; // 描述图像的替换文本	
  fit?: string; // 当展示类型为图片的时候，设置图片如何适应容器框	fill / contain / cover / none / scale-down	
}