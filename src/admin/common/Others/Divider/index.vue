<template>
  <el-divider
    :direction="state.direction"
    :content-position="state.contentPosition"
    :style="{width: width + 'px'}"
  >
    {{ state.value }}
  </el-divider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DividerState from './DividerState'

@Component({
  name: 'Divider'
})
export default class extends Vue {
  @Prop({ required: true }) state!: DividerState;

  get width() {
    return this.state.width
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-divider__text {
  position: relative;
}
</style>
