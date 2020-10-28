<template>
  <el-table-column
    :type="state.type"
    :index="state.index"
    :column-key="state.columnKey"
    :label="state.label"
    :prop="state.prop"
  >
    <template slot-scope="scope">
      <AdminComponent :state="getComponentState(scope)" />
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TableColumnState from './TableColumnState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'

@Component({
  name: 'TableColumn',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:TableColumnState;

  getComponentState(scope:any):object {
    if (this.state.scope.state) {
      this.state.scope.state.value = scope.row[this.state.prop]
    }
    return this.state.scope
  }
}
</script>
