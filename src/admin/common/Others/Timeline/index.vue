<template>
  <el-timeline :reverse="state.reverse">
    <el-timeline-item
      v-for="(item, index) in state.data"
      :key="index"
      :icon="item.icon"
      :type="item.type"
      :color="item.color"
      :size="item.size"
      :timestamp="item.timestamp"
      :hide-timestamp="item.hideTimestamp"
      :placement="item.placement"
    >
      {{ item.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TimelineState from './TimelineState'

@Component({
  name: 'Timeline'
})
export default class extends Vue {
  @Prop({ required: true }) state!: TimelineState;
}
</script>
<style lang="scss" scoped></style>
