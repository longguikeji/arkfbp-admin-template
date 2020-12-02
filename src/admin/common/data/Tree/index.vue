<template>
  <div>
    <el-input
      v-if="state.isFilter"
      id="tree-content-filter-function"
      v-model="filterText"
      placeholder="输入关键字进行过滤"
    />
    <el-tree
      ref="tree"
      :data="state.data"
      :props="state.props"
      node-key="id"
      :render-after-expand="state.renderAfterExpand"
      :highlight-current="state.highlightCurrent"
      :default-expand-all="state.defaultExpandAll"
      :expand-on-click-node="state.expandOnClickNode"
      :check-on-click-node="state.checkOnClickNode"
      :auto-expand-parent="state.autoExpandParent"
      :default-expanded-keys="state.defaultExpandedKeys"
      :show-checkbox="state.showCheckbox"
      :check-strictly="state.checkStrictly"
      :default-checked-keys="state.defaultCheckedKeys"
      :current-node-key="state.currentNodeKey"
      :accordion="state.accordion"
      :indent="state.indent"
      :icon-class="state.iconClass"
      :draggable="state.draggable"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
      :filter-node-method="filterNode"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator'
import TreeState from './TreeState'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'Tree',
  components: {}
})
export default class extends Mixins(BaseVue) {
  get state(): Array<TreeState> {
    return this.$state as Array<TreeState>
  }

  private filterText = '';

  @Watch('filterText')
  private change(val: string) {
    const tree: any = this.$refs.tree
    tree.filter(val)
  }

  filterNode(value: any, data: any) {
    if (!value) return true
    return data.label.indexOf(value) !== -1
  }

  allowDrop(draggingNode: any, dropNode: any, type: any) {
    if (dropNode.data.label === '二级 3-1') {
      return type !== 'inner'
    } else {
      return true
    }
  }

  allowDrag(draggingNode: any) {
    return draggingNode.data.label.indexOf('三级 3-2-2') === -1
  }
}
</script>

<style lang="scss" scoped>
#tree-content-filter-function {
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
