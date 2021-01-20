<template>
  <quill-editor
    ref="myQuillEditor"
    v-model="state.value"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import QuillEditor from './QuillEditor'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'QuillEditor',
  components: {
    quillEditor
  }
})
export default class extends Mixins(BaseVue) {
  get state(): QuillEditor {
    return this.$state as QuillEditor
  }
}
</script>
<style lang="scss">
</style>
