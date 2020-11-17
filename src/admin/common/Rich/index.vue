<template>
  <div>
    <tinymce
      v-model="state.value"
      height="500"
    />
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
<style lang="scss">
</style>
