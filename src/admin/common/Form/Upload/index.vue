<template>
  <el-upload
    :action="state.action"
    :headers="state.headers"
    :multiple="state.multiple"
    :data="state.data"
    :name="state.name"
    :with-credentials="state.withCredentials"
    :show-file-list="state.showFileList"
    :drag="state.drag"
    :accept="state.accept"
    :list-type="state.listType"
    :auto-upload="state.autoUpload"
    :file-list="state.fileList"
    :disabled="state.disabled"
    :limit="state.limit"
  >
    <el-button
      size="small"
      type="primary"
    >
      点击上传
    </el-button>
    <div
      slot="tip"
      class="el-upload__tip"
    >
      只能上传jpg/png文件，且不超过500kb
    </div>
  </el-upload>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UploadState from './UploadState'

@Component({
  name: 'Upload',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: UploadState;
}
</script>

<style lang="scss" scoped></style>
