<template>
  <el-progress
    :percentage="state.value"
    :type="state.type"
    :stroke-width="state.strokeWidth"
    :text-inside="state.textInside"
    :status="state.status"
    :width="state.width"
    :show-text="state.showText"
    :stroke-linecap="state.strokeLinecap"
    :color="state.color"
    :format="state.format"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProgressState from './ProgressState'

@Component({
  name: 'Progress',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: ProgressState
}
</script>

<style lang="scss" scoped>
</style>
