<template>
  <el-table
    :data="tableData"
    :height="'70vh'"
    :stripe="state.stripe"
    :border="state.border"
    :size="state.size"
    :fit="state.fit"
    :show-header="state.showHeader"
    :highlight-current-row="state.highlightCurrentRow"
  >
    <TableColumn
      v-for="child in state.columns"
      :key="state.columns.indexOf(child)"
      :state="child"
    />
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
  @Prop({ required: true }) state!:TableState;

  get tableData() {
    // console.log(this.state.data)
    return this.state.data
  }
}
</script>
