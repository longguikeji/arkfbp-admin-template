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
import { type } from 'os'
import admin from '@/router/modules/admin'

@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableColumnState;

  getComponentState(scope: any): object {
    let adminState: Object
    if (this.state.scope instanceof Array) {
      adminState = {
        type: 'ButtonArray',
        state: this.state.scope
      }
    } else {
      adminState = {
        state: {
          ...this.state.scope.state,
          value: scope.row[this.state.prop]
        },
        type: this.state.scope.type
      }
    }
    return adminState
  }

  // getButtonArrayState(btnArrState: Array<any>, cloumnData: any) {
  //   let btnState: Array<any> = []
  //   const rowData = JSON.parse(JSON.stringify(cloumnData))
  //   console.log('rowData', rowData)
  //   btnArrState.forEach((itemState: any) => {
  //     if (itemState.data) {
  //       Object.keys(itemState.data).forEach((item: any) => {
  //         itemState.data[item] = rowData[item]
  //         console.log(itemState)
  //       })
  //     } else {
  //       btnState.push(itemState)
  //     }
  //   })
  //   return btnState
  // }
}
</script>
