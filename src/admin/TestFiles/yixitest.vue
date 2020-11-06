<template>
  <Card :state="state">
    <div>
      <Form :state="getFilterFormState()" />
    </div>
    <Table :state="state.table" />
    <Pagination :state="state.pagination" />
    <!-- <TagComponent :state="state.tag" /> -->
    <Dialog
      v-for="(dialogName, dialogIndex) in state.dialogs"
      :key="dialogIndex"
      :state="state.dialogs[dialogIndex]"
      :content="state.form"
    />
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import YixiState from './YixiState'
import Card from '@/admin/common/Card/index.vue'
import Table from '@/admin/common/data/Table/index.vue'
import Button from '@/admin/common/Button/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Pagination from '@/admin/common/data/Pagination/index.vue'
import Dialog from '@/admin/common/Others/Dialog/index.vue'

@Component({
  name: 'Yixitest',
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
  @Prop({ required: true }) state!: YixiState;

  getFilterFormState() {
    if (this.state.filter.form) {
      this.state.filter.form.inline = true
    }
    return this.state.filter.form
  }
}
</script>
