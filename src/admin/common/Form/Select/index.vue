<template>
  <el-select
    v-model="state.value"
    :placeholder="state.placeholder"
    :multiple="state.multiple"
    :clearable="state.clearable"
    :disabled="state.disabled"
    :size="state.size"
  >
    <template v-if="state.type === 'group'">
      <el-option-group
        v-for="(group, groupIndex) in state.options"
        :key="groupIndex"
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
    </template>
    <template v-else>
      <el-option
        v-for="(item, index) in state.options"
        :key="index"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </template>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SelectState from './SelectState'

@Component({
  name: 'OptionModule',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: SelectState;
}
</script>

<style lang="scss" scoped>
</style>
