<template>
  <div v-show="state.isShow">
    <!-- <ImgCutter
      label="选择一张图片"
      ref="imgCutterModal"
      :crossOrigin="true"
      crossOriginHeader="*"
      rate=""
      toolBgc="none"
      :isModal="false"
      :showChooseBtn="true"
      :lockScroll="true"
      :boxWidth="776"
      :boxHeight="458"
      :cutWidth="250"
      :cutHeight="250"
      :sizeChange="true"
      :moveAble="true"
      :originalGraph="false"
      :smallToUpload="true"
      :saveCutPosition="true"
      :scaleAble="true"
      @cutDown="cutDown"
    /> -->
    <el-upload
      class="upload-demo"
      drag
      :headers="headers"
      action="api/v1/admin/upload"
      :on-success="onUploadSuccess"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ImgCutter from 'vue-img-cutter'
import ImageEditor from './ImageEditor'
import BaseVue from '@/admin/base/BaseVue'
import { getToken } from '@/utils/auth'
import { runAction } from '@/arkfbp'

@Component({
  name: 'ImageEditor',
  components: {
    ImgCutter
  }
})
export default class extends Mixins(BaseVue) {
  get state(): ImageEditor {
    return this.$state as ImageEditor
  }

  get headers() {
    return {
      Authorization: 'Token ' + getToken()
    }
  }

  onUploadSuccess(file: any) {
    this.state.value = file.key
  }

  async cutDown(res: any) {
    const file: any = res.file
    if (res && res.file) {
      await runAction({
        flow: 'flows.upload',
        inputs: {
          method: 'POST',
          url: 'api/v1/admin/upload',
          params: {
            file: file,
            is_rename: 0
          }
        }
      }).then((data: any) => {
        console.log(data)
      })
    }
  }
}
</script>
<style lang="scss">
</style>
