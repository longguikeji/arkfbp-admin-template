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
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'
import MarkdownState from './MarkdownState'

@Component({
  name: 'Markdown',
  components: { MarkdownEditor }
})
export default class extends Vue {
  @Prop({ required: true }) state!: MarkdownState;
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
