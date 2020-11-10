<template>
  <el-pagination
    :small="state.small"
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

  private currentSize = 20
  private currentPage: number = this.state.currentPage

  handleSizeChange(currentSize: number) {
    console.log(currentSize)
    // runaction(name, data)
  }

  actionHandler(currentPage: number) {
    // actionName = this.state.action
    // currentPage = currentPage
    //
    console.log(currentPage)
    // @size-change="actionHandler(state.actionSizeChange)"
    // @current-change="actionHandler(state.actionCurrentChange)"
    // @prev-click="actionHandler(state.actionPrevClick)"
    // @next-click="actionHandler(state.actionNextClick)"
    // runAction(actionName, actionData)
  }
}
</script>
