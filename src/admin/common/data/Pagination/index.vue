<template>
  <el-pagination
    :small="state.small"
    :background="state.background"
    :page-size="state.pageSize"
    :total="state.total"
    :page-count="state.pageCount"
    :current-page="state.currentPage"
    :layout="state.layout"
    :page-sizes="state.pageSizes"
    :popper-class="state.popperClass"
    :prev-text="state.prevText"
    :next-text="state.nextText"
    :disabled="state.disabled"
    @size-change="actionHandler(state.actionSizeChange)"
    @current-change="actionHandler(state.actionCurrentChange)"
    @prev-click="actionHandler(state.actionPrevClick)"
    @next-click="actionHandler(state.actionNextClick)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PaginationState from './PaginationState'

@Component({
  name: 'Pagination',
  components: {
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:PaginationState;

  actionHandler(actionName:string) {
    console.log(actionName)
    // runAction(actionName)
  }
}
</script>
