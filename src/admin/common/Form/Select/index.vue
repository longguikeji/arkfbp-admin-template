<template>
  <Tag
    v-if="state.readonly"
    :state="tagData"
  />
  <el-select
    v-else
    v-model="state.value"
    :placeholder="state.placeholder"
    :multiple="state.multiple"
    :clearable="state.clearable || true"
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
import Tag from '@/admin/common/data/Tag/index.vue'
import SelectState from './SelectState'

@Component({
  name: 'OptionModule',
  components: {
    Tag
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: SelectState;

  get tagData() {
    return [
      {
        value: this.state.value,
        type: this.state.type || 'info'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>
