<template>
  <el-checkbox-group v-model="state.value">
    <template v-if="state.checkBox">
      <el-checkbox
        v-for="(item, index) in state.checkBox"
        :key="index"
        :value="item.value"
        :label="item.label"
        :true-label="item.trueLabel"
        :false-label="item.falseLabel"
        :disabled="item.disabled"
        :border="item.border"
        :size="item.size"
        :name="item.name"
        :checked="item.checked"
        :indeterminate="item.indeterminate"
      >
        {{ item.content }}
      </el-checkbox>
    </template>
    <template v-else-if="state.checkButton">
      <el-checkbox-button
        v-for="(item, index) in state.checkButton"
        :key="index"
        :label="item.label"
        :true-label="item.trueLabel"
        :false-label="item.falseLabel"
        :disabled="item.disabled"
        :name="item.name"
        :checked="item.checked"
      >
        {{ item.content }}
      </el-checkbox-button>
    </template>
  </el-checkbox-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CheckBoxGroupState from './CheckBoxGroupState'

@Component({
  name: 'CheckBoxGroup',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CheckBoxGroupState;
}
</script>
