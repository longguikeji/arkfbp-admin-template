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
import { Component, Prop, Vue } from 'vue-property-decorator'
import TableColumnState from './TableColumnState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
import { runAction } from '@/arkfbp/index'
import tableButtonStatus from '@/utils/tableButtonStatus'
@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableColumnState;

  getComponentState(scope: any) {
    let adminState: Object
    if (this.state.scope.state instanceof Array) {
      let sstate: any = {}
      sstate = JSON.parse(JSON.stringify(this.state.scope))
      sstate.state.forEach((item: any, index: number) => {
        item.data = scope.row
        item.cloumn = this.state
        item.value = scope.row[this.state.prop]
        // if (this.state.format) {
        //   const formatData: any = {}
        //   formatData.item = item
        //   formatData.index = index
        //   await runAction({ flow: `@/flows/${this.state.format}`, inputs: formatData })
        // }
      })
      adminState = sstate
    } else {
      adminState = {
        state: {
          ...this.state.scope.state,
          value: scope.row[this.state.prop]
        },
        type: this.state.scope.type
      }
    }
    // if (this.state.format) {
    //   runAction({ flow: `flows.${this.state.format}`, inputs: adminState })
    // }
    tableButtonStatus(adminState)
    return adminState
    // return this.adminComponentState
  }
}
</script>
