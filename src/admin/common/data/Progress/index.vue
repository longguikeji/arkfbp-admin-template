<template>
  <el-progress
    :percentage="state.percentage"
    :format="state.format"
    :text-inside="state.textInside"
    :stroke-width="state.strokeWidth"
    :status="state.status"
    :color="state.color"
    :type="state.type"
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
  @Prop({ required: true }) state!: Array<ProgressState>;
}
</script>

<style lang="scss" scoped>
</style>
