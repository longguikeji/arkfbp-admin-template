<template>
  <div>
    <el-image
      style="width: 50px; height: 50px"
      :src="state.value"
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
