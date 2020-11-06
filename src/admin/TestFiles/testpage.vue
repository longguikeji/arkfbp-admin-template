<template>
  <Card :state="state">
    <div>
      <Form :state="getFilterFormState()" />
    </div>
    <Table :state="state.table" />
    <Pagination
      :state="state.pagination"
      class="table-page-pager"
    />
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TablePageState from './testState'
import Card from '@/admin/common/Card/index.vue'
import Table from '@/admin/common/data/Table/index.vue'
import Button from '@/admin/common/Button/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Pagination from '@/admin/common/data/Pagination/index.vue'

@Component({
  name: 'TestPage',
  components: {
    Form,
    Card,
    Button,
    Table,
    Pagination
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TablePageState;

  getFilterFormState() {
    if (this.state.filter.form) {
      this.state.filter.form.inline = true
    }
    return this.state.filter.form
  }
}
</script>

<style lang="scss" scoped>
.table-page-pager {
  margin-top: 20px !important;
}
</style>
