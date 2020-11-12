<template>
  <el-backtop
    :target="state.target"
    :visibility-height="state.visibilityHeight"
    :right="state.right"
    :bottom="state.bottom !== null || 100"
  >
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BacktopState from './BacktopState'

@Component({
  name: 'Backtop'
})
export default class extends Vue {
  @Prop({ required: true }) state!: BacktopState;
}
</script>
<style lang="scss" scoped></style>
