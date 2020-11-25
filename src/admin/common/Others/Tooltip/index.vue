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
    <AdminComponent :state="state" />
  </el-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TooltipState from './TooltipState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
@Component({
  name: 'Tooltip',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TooltipState;
}
</script>
<style lang="scss" scoped></style>
