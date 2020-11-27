<template>
  <el-table-column
    :index="state.index"
    :column-key="state.columnKey"
    :label="state.label"
    :prop="state.prop"
  >
    <template v-if="state.children">
      <TableColumn
        v-for="child in state.children"
        :key="state.children.indexOf(child)"
        :state="child"
      />
    </template>
    <template slot-scope="scope">
      <template v-if="isScope">
        <AdminComponent :state="getComponentState(scope)" />
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
  @Prop({ required: true }) state!: TableColumnState;

  // @Watch('state', { deep: true, immediate: true })
  // fresh() {
  //   this.$forceUpdate()
  // }

  get isScope() {
    // debugger
    return Boolean(this.state.scopeRowState)
  }

  getComponentState(scope: any) {
    // debugger
    if (this.isScope && this.state.scopeRowState[scope.$index]) {
      const state = this.state.scopeRowState[scope.$index]
      console.log(state)
      return state
    }
  }

  // @Watch('state.data')
  // freshScopeState() {
  //   // debugger
  //   if (!this.state.scope) { return }

  //   if (!this.state.scopeRowState) {
  //     this.state.scopeRowState = []
  //   }
  //   this.state.data.forEach((row, index) => {
  //     const cellState = JSON.parse(JSON.stringify(this.state.scope))
  //     this.state.scopeRowState[index] = cellState
  //   })

  // if (this.state.rowRealState[scope.$index]) {
  //   return this.state.rowRealState[scope.$index]
  // }
  // let adminState: Object
  // if (this.state.scope.state instanceof Array) {
  //   let cellState: any = {}
  //   cellState = JSON.parse(JSON.stringify(this.state.scope))
  //   for (let index = 0, len = cellState.state.length; index < len; index++) {
  //     const item = cellState.state[index]
  //     item.data = scope.row
  //     item.cloumn = this.state
  //     item.value = scope.row[this.state.prop]
  //   }
  //   adminState = cellState
  // } else {
  //   adminState = {
  //     state: {
  //       ...this.state.scope.state,
  //       value: scope.row[this.state.prop]
  //     },
  //     type: this.state.scope.type
  //   }
  // }
  // this.state.rowRealState[scope.$index] = adminState
  // return adminState
  // }
}
</script>
