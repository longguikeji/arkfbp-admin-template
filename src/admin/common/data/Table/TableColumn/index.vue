<template>
  <el-table-column
    v-if="state.type === 'selection'"
    type="selection"
    width="50"
  />
  <el-table-column
    v-else-if="state.type === 'index'"
    type="index"
    width="30"
    label="#"
  />
  <el-table-column
    v-else-if="state.type === 'action'"
    label="操作"
  >
    <ButtonArray :state="state.actions" />
  </el-table-column>
  <el-table-column
    v-else
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
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
import { type } from 'os'

@Component({
  name: 'TableColumn',
  components: {
    AdminComponent,
    ButtonArray
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableColumnState;

  getComponentState(scope: any): object {
    if (!this.state.scope.state) {
      this.state.scope.state.value = {}
    }
    const adminState = {
      state: {
        ...this.state.scope.state,
        value: scope.row[this.state.prop]
      },
      type: this.state.scope.type
    }
    return adminState
  }
}
</script>
