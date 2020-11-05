<template>
  <div>
    <el-image
      style="width: 100px; height: 100px"
      :src="state.src"
      :fit="state.fit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ImageState from './ImageState'

@Component({
  name: 'ImageBox'
})
export default class extends Vue {
  @Prop({ required: true }) state!: ImageState;
}
</script>
<style lang="scss" scoped></style>
