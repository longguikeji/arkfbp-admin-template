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
    @change="changeSelectValue"
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
import { AdminModule } from '@/store/modules/admin'
@Component({
  name: 'Select',
  components: {
    Tag
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: SelectState;

  get tagData() {
    const tagValues: Array<any> = []
    if (this.state.options instanceof Array) {
      if (this.state.value instanceof Array) {
        this.state.options.forEach(o => {
          this.state.value.forEach(v => {
            if (o.value === v) {
              tagValues.push({
                value: o.label,
                type: this.state.type || 'info'
              })
            }
          })
        })
      } else {
        this.state.options.forEach(o => {
          if (o.value === this.state.value) {
            tagValues.push({
              value: o.label,
              type: this.state.type || 'info'
            })
          }
        })
      }
    }
    return tagValues
  }

  async changeSelectValue(val) {
    if (this.state.action) {
      await AdminModule.adminAction({ action: this.state.action, data: val })
    }
  }
}
</script>

<style lang="scss" scoped></style>
