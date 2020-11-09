<template>
  <el-steps
    :active="state.active"
    :direction="state.direction"
    :simple="state.simple"
    :align-center="state.alignCenter"
    :finish-status="state.finishStatus"
    :process-status="state.processStatus"
    :space="state.space"
  >
    <el-step
      v-for="(stepItem, stepIndex) in state.step"
      :key="stepIndex"
      :title="stepItem.title"
      :description="stepItem.description"
      :status="stepItem.status"
      :icon="stepItem.icon"
    />
  </el-steps>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StepsState from './StepsState'

@Component({
  name: 'Steps',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: StepsState;
}
</script>

<style lang="scss" scoped>
</style>
