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
      <template v-if="state.scope">
        <AdminComponent :state="getComponentState(scope)" />
      </template>
      <template v-else>
        <span>{{ scope.row[state.prop] }}</span>
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import TableColumnState from './TableColumnState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
import { runAction } from '@/arkfbp/index'
import { AdminModule } from '@/store/modules/admin'
@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableColumnState;

  getComponentState(scope: any) {
    debugger
    if (!this.state.rowRealState) {
      this.state.rowRealState = []
    }
    if (this.state.rowRealState[scope.$index]) {
      return this.state.rowRealState[scope.$index]
    }
    let adminState: Object
    if (this.state.scope.state instanceof Array) {
      let cellState: any = {}
      cellState = JSON.parse(JSON.stringify(this.state.scope))
      for (let index = 0, len = cellState.state.length; index < len; index++) {
        const item = cellState.state[index]
        item.data = scope.row
        item.cloumn = this.state
        item.value = scope.row[this.state.prop]
      }
      adminState = cellState
    } else {
      adminState = {
        state: {
          ...this.state.scope.state,
          value: scope.row[this.state.prop]
        },
        type: this.state.scope.type
      }
    }
    this.state.rowRealState[scope.$index] = adminState
    return adminState
  }
}
</script>
