<template>
  <div class="editor-container">
    <markdown-editor
      ref="markdownEditor"
      v-model="state.value"
      height="300px"
      :language="state.language"
      :options="state.options"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'
import MarkdownState from './MarkdownState'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'Markdown',
  components: { MarkdownEditor }
})
export default class extends Mixins(BaseVue) {
  get state(): MarkdownState {
    return this.$state as MarkdownState
  }

  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
::v-deep .te-preview {
  padding: 0 200px;
}
</style>
