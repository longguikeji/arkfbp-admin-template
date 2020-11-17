<template>
  <div class="components-container">
    <div>
      <tinymce
        v-model="state.value"
        height="500"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Tinymce from '@/components/Tinymce/index.vue'
import RichState from './RichState'

@Component({
  name: 'Rich',
  components: {
    Tinymce
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: RichState;
}
</script>
<style lang="scss" scoped>
.editor-content {
  margin:0 20px;
}
</style>
