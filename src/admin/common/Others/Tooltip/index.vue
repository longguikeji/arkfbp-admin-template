<template>
  <el-tooltip
    :effect="state.effect"
    :content="state.content"
    :placement="state.placement"
    :value="state.value"
    :disabled="state.disabled"
    :offset="state.offset"
    :transition="state.transition"
    :visible-arrow="state.visibleArrow"
    :popper-options="state.popperOptions"
    :open-delay="state.openDelay"
    :manual="state.manual"
    :popper-class="state.popperClass"
    :enterable="state.enterable"
    :hide-after="state.hideAfter"
    :tabindex="state.tabindex"
  >
    <el-button>{{ state.btn }}</el-button>
  </el-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TooltipState from './TooltipState'

@Component({
  name: 'Tooltip'
})
export default class extends Vue {
  @Prop({ required: true }) state!: TooltipState;
}
</script>
<style lang="scss" scoped></style>
