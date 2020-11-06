<template>
  <el-table
    :data="tableData"
    :height="'70vh'"
    :stripe="state.stripe || true"
    :border="state.border"
    :size="state.size"
    :fit="state.fit"
    :show-header="state.showHeader"
    :highlight-current-row="state.highlightCurrentRow"
    @selection-change="handleSelectionChange"
  >
    <template v-for="child in state.columns">
      <el-table-column
        v-if="state.type === 'selection'"
        :key="state.columns.indexOf(child)"
        type="selection"
        width="30"
      />
      <el-table-column
        v-else-if="child.type === 'index'"
        :key="state.columns.indexOf(child)"
        type="index"
        width="30"
        label="#"
      />
      <TableColumn
        v-else
        :key="state.columns.indexOf(child)"
        :state="child"
      />
    </template>
  </el-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TableState from './TableState'
import TableColumn from './TableColumn/index.vue'

@Component({
  name: 'Table',
  components: {
    TableColumn
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TableState;

  get tableData() {
    return this.state.data
  }

  handleSelectionChange(val: Array<any>) {
    // console.log(val)
  }
}
</script>
