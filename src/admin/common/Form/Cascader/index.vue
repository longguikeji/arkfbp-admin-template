<template>
  <div>
    <el-cascader-panel
      v-if="state.type === 'panel'"
      v-model="state.value"
      :options="state.options"
      :props="state.props"
    />
    <el-cascader
      v-else
      v-model="state.value"
      :options="state.options"
      :props="state.props"
      :size="state.size"
      :placeholder="state.placeholder"
      :disabled="state.disabled"
      :clearable="state.clearable"
      :show-all-levels="state.showAllLevels"
      :collapse-tags="state.collapseTags"
      :separator="state.separator"
      :filterable="state.filterable"
      :debounce="state.debounce"
      :popper-class="state.popperClass"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CascaderState from './CascaderState'

@Component({
  name: 'Cascader',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CascaderState;
}
</script>
