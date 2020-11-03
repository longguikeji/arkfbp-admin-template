<template>
  <Card :state="state">
    <div>
      <Form :state="getFilterFormState()" />
    </div>
    <Table :state="state.table" />
    <Pagination :state="state.pagination" />
    <!-- <TagComponent :state="state.tag" /> -->
    <Tag :state="state.tag" />
    <Dialog
      v-for="(dialogName, dialogIndex) in state.dialogs"
      :key="dialogIndex"
      :state="state.dialogs[dialogIndex]"
      :content="state.form"
    />
    <Tree :state="state.tree" />
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
import Tag from '@/admin/common/data/Tag/index.vue'
import Dialog from '@/admin/common/Others/Dialog/index.vue'
import Tree from '@/admin/common/data/Tree/index.vue'

@Component({
  name: 'FromPage',
  components: {
    Form,
    Card,
    Button,
    Table,
    Pagination,
    Tag,
    Dialog,
    Tree
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:TablePageState;

  getFilterFormState() {
    if (this.state.filter.form) { this.state.filter.form.inline = true }
    return this.state.filter.form
  }
}
</script>
