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
@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableColumnState;

  // private tState: Array<any> = []

  getComponentState(scope: any) {
    let adminState: Object
    if (this.state.scope.state instanceof Array) {
      let cellState: any = {}
      cellState = JSON.parse(JSON.stringify(this.state.scope))
      // this.tState[scope.$index] = JSON.parse(JSON.stringify(this.state.scope));
      // (async () => {
      //   for (let index = 0; index < this.tState[scope.$index].state.length; index++) {
      //     // debugger
      //     const item = this.tState[scope.$index].state[index]
      //     // debugger
      //     item.data = scope.row;
      //     item.cloumn = this.state;
      //     item.value = scope.row[this.state.prop]
      //     if (scope.row.actions && scope.row.actions[index]) {
      //       item.disabled = scope.row.actions[index].disabled;
      //     }
      //   }
      //   // if (this.state.format !== undefined && this.state.format !== "") {
      //   //   // debugger
      //   //   // let res = await runAction({ flow: `flows.${this.state.format}`, inputs: { item: itemState, index: index } })
      //   //   // const res = await runAction({ flow: `flows.${this.state.format}`, inputs: this.tState[scope.$index] })
      //   //   // debugger
      //   // }
      // })()
      // return this.tState[scope.$index];
      for (let index = 0, len = cellState.state.length; index < len; index++) {
        const item = cellState.state[index]
        item.data = scope.row
        item.cloumn = this.state
        item.value = scope.row[this.state.prop]
        if (scope.row.actionsAttributes && scope.row.actionsAttributes[index]) {
          const attrs = scope.row.actionsAttributes[index]
          Object.keys(attrs).forEach((oneAttr) => {
            item[oneAttr] = attrs[oneAttr]
          })
        }
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
    return adminState
  }
}
</script>
