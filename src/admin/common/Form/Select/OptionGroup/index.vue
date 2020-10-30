<template>
  <el-select
    v-model="state.value"
    :placeholder="state.placeholder"
    :multiple="state.multiple"
    :clearable="state.clearable"
    :disabled="state.disabled"
    :size="state.size"
  >
    <el-option-group
      v-for="(group, groupItem) in state.options"
      :key="groupItem"
      :label="group.label"
      :disabled="state.disabled"
    >
      <el-option
        v-for="(item, index) in group.options"
        :key="index"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </el-option-group>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import OptionGruopState from './OptionGruopState'

@Component({
  name: 'SelectGroup',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: OptionGruopState;
}
</script>

<style lang="scss" scoped>
</style>
