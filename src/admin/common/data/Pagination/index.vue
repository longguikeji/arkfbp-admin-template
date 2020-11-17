<template>
  <el-pagination
    :small="state.small || false"
    :background="state.background"
    :page-size="state.pageSize"
    :total="state.total"
    :page-count="state.pageCount"
    :current-page="state.currentPage"
    :layout="initLayout"
    :page-sizes="state.pageSizes"
    :popper-class="state.popperClass"
    :prev-text="state.prevText"
    :next-text="state.nextText"
    :disabled="state.disabled"
    @size-change="handleSizeChange"
    @current-change="actionHandler"
    @prev-click="actionHandler"
    @next-click="actionHandler"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PaginationState from './PaginationState'
import { AdminModule } from '@/store/modules/admin'

@Component({
  name: 'Pagination',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!:PaginationState;

  get initLayout() {
    if (this.state.layout) {
      return this.state.layout
    } else {
      return 'sizes, prev, pager, next, jumper, ->, total'
    }
  }

  private async handleSizeChange(currentSize: number) {
    this.state.pageCount = currentSize
    await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
  }

  private async actionHandler(currentPage: number) {
    this.state.currentPage = currentPage
    await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
  }
}
</script>
