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
        :path="getChildPath('children[' + index + ']')"
      />
    </template>
    <template slot-scope="scope">
      <template v-if="isScope">
        <template v-if="isOption">
          <span>{{ getOption(scope) }}</span>
        </template>
        <AdminComponent
          v-else
          :path="getScopePath(scope)"
        />
      </template>
      <template v-else>
        <span>{{ scope.row[state.prop] }}</span>
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import TableColumnState from './TableColumnState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
import BaseVue from '@/admin/base/BaseVue'
@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Mixins(BaseVue) {
  get state(): TableColumnState {
    return this.$state as TableColumnState
  }

  get isScope() {
    return Boolean(this.state.scope)
  }

  get isOption() {
    return Boolean(this.state.scope.type === 'Option')
  }

  getOption(scope) {
    const options = this.state.scope.state.options
    const key = scope.row[this.state.prop]

    let value = ''

    if (options instanceof Array) {
      if (key instanceof Array) {
        options.forEach(o => {
          key.forEach(v => {
            if (o.key === v) {
              value = value + '' + o.label
            }
          })
        })
      } else {
        options.forEach(o => {
          if (o.value === key) {
            value = o.label
          }
        })
      }
    }

    return value
  }

  getScopePath(scope: any) {
    if (this.state.scopeRowState && this.state.scopeRowState.length > 0) {
      return this.getChildPath('scopeRowState[' + scope.$index + ']')
    } else {
      return this.getChildPath('scope')
    }
  }
}
</script>
