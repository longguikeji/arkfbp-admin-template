<template>
  <el-cascader
    v-model="state.value"
    :options="state.options"
    :prop="state.prop"
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

  // "children": [{ "value": "yizhi", "label": "一致" }]
  //  "options": [
  //           {
  //             "lable": "指南",
  //             "value": "zhinan"
  //           }
  //         ]
}
</script>
