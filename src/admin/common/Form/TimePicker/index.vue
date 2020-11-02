<template>
  <el-time-select
    v-model="state.value"
    :readonly="state.readonly"
    :disabled="state.disabled"
    :editable="state.editable"
    :clearable="state.clearable"
    :size="state.size"
    :placeholder="state.placeholder"
    :start-placeholder="state.startPlaceholder"
    :end-placeholder="state.endPlaceholder"
    :is-range="state.isRange"
    :arrow-control="state.arrowControl"
    :align="state.align"
    :popper-class="state.popperClass"
    :picker-options="state.pickerOptions"
    :range-separator="state.rangeSeparator"
    :value-format="state.valueFormat"
    :default-value="state.defaultValue"
    :name="state.name"
    :prefix-icon="state.prefixIcon"
    :clear-icon="state.clearIcon"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TimeSelectState from './TimeSelectState'

@Component({
  name: 'Time',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: TimeSelectState;
}
</script>

<style lang="scss" scoped></style>
