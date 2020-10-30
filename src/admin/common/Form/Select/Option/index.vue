<template>
  <el-select
    v-model="state.value"
    :placeholder="state.placeholder"
    :multiple="state.multiple"
    :clearable="state.clearable"
    :disabled="state.disabled"
    :size="state.size"
  >
    <el-option
      v-for="(item, index) in state.options"
      :key="index"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import OptionState from './OptionState'

@Component({
  name: 'OptionOnly',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: OptionState;
}
</script>

<style lang="scss" scoped>
</style>
