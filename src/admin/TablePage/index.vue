<template>
  <Card :state="state">
    <div>
      <Form :state="getFilterFormState()" />
    </div>
    <Table :state="state.table" />
    <Pagination :state="state.pagination" />
    <template v-if="state.dialogs">
      <Dialog
        v-for="dialogName in Object.keys(state.dialogs)"
        :key="dialogName"
        :state="state.dialogs[dialogName]"
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TablePageState from './TablePageState'
import Card from '@/admin/common/Card/index.vue'
import Table from '@/admin/common/data/Table/index.vue'
import Button from '@/admin/common/Button/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Pagination from '@/admin/common/data/Pagination/index.vue'
import Dialog from '@/admin/common/Others/Dialog/index.vue'
@Component({
  name: 'TablePage',
  components: {
    Form,
    Card,
    Button,
    Table,
    Pagination,
    Dialog
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: TablePageState;

  getFilterFormState() {
    if (this.state.filter) {
      this.state.filter.inline = true
    }
    return this.state.filter
  }
}
</script>
