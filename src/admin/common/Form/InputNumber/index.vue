<template>
  <span v-if="state.readonly">{{ state.value }} </span>
  <el-input-number
    v-else
    v-model="state.value"
    :min="state.min"
    :max="state.max"
    :step="state.step"
    :step-strictly="state.stepStrictly"
    :precision="state.precision"
    :size="state.size"
    :controls="state.controls"
    :controls-position="state.controlsPosition"
    :name="state.name"
    :label="state.label"
    :disabled="state.disabled"
    :placeholder="state.placeholder"
    @change="actionHandler(state.value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import InputNumberState from './InputNumberState'

@Component({
  name: 'InputNumber',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: InputNumberState;
  actionHandler(actionName: string) {
    // console.log(actionName);
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.col {
  margin: 12px;
  flex: auto;
}
</style>
