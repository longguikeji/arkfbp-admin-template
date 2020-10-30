<template>
  <el-cascader
    v-model="state.value"
    :options="state.options"
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
  //   options: Array<string | null>;
  //   props: object; //配置选项
  //   filterable: boolean; //  是否可搜索选项  boolean  —  -
  //   filterMethod: Function;
  //   beforeFilter: Function;

  actionHandler(actionName: string) {
    console.log(actionName)
    // runAction(actionName)
  }
}
</script>
