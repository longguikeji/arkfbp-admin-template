<template>
  <el-table-column
    :index="state.index"
    :column-key="state.columnKey"
    :label="state.label"
    :prop="state.prop"
  >
    <template v-if="state.children">
      <TableColumn
        v-for="(child, index) in state.children"
        :key="index"
        :path="getChildPath('children['+index+']')"
      />
    </template>
    <template slot-scope="scope">
      <template v-if="isScope">
        <AdminComponent :path="getChildPath('scopeRowState['+scope.$index+']')" />
      </template>
      <template v-else>
        <span>{{ scope.row[state.prop] }}</span>
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator'
import TableColumnState from './TableColumnState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
import BaseVue from '@/admin/base/BaseVue'
@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends BaseVue {
  get state(): TableColumnState {
    return this.$state as TableColumnState
  }

  get isScope() {
    return Boolean(this.state.scopeRowState)
  }
}
</script>
