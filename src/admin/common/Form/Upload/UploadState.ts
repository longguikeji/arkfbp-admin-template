import VueCopperState from "./VueCopperState";
export default interface UploadState {
  action?: string; //必选参数，上传的地址
  headers: object; //	设置上传的请求头部
  multiple: boolean; //	是否支持多选文件
  data: object; //	上传时附带的额外参数
  name: string; //	上传的文件字段名	string
  withCredentials: boolean; //	支持发送 cookie 凭证信息	boolean	—	false
  showFileList: boolean; //是否显示已上传文件列表	true
  drag: boolean; //	是否启用拖拽上传	boolean	—	false
  accept: string; //	接受上传的文件类型（thumbnail-mode 模式下此参数无效）	string	—	—
  onPreview: Function; //点击文件列表中已上传的文件时的钩子
  onRemove: Function; //文件列表移除文件时的钩子	function(file, fileList)	—	—
  onSuccess: Function; //	文件上传成功时的钩子	function(response, file, fileList)	—	—
  onError: Function; //	文件上传失败时的钩子	function(err, file, fileList)	—	—
  onProgress: Function; //	文件上传时的钩子	function(event, file, fileList)	—	—
  onChange: Function; //	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用	function(file, fileList)	—	—
  beforeUpload: Function; //	上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。	function(file)	—	—
  beforeRemove: Function; //	删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。	function(file, fileList)	—	—
  listType: string; //	文件列表的类型	string	text/picture/picture-card	text
  autoUpload: boolean; //	是否在选取文件后立即进行上传	boolean	—	true
  fileList: Array<any>; //	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array	—	[]
  httpRequest: Function; //	覆盖默认的上传行为，可以自定义上传的实现	function	—	—
  disabled: boolean; //	是否禁用	boolean	—	false
  limit: number; //	最大允许上传个数	number	—	—
  onExceed: Function; //	文件超出个数限制时的钩子	function(files, fileList)	—

  value: string;
  type: string; //区分uploadFile  uploadImage  uploadXslFile
  title: string; //Dialog 的标题
  crops: Array<any>; //图片参数
  keyName: string;
  upload: object;
}
