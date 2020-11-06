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
      v-for="dialogName in Object.keys(state.dialogs)"
      :key="dialogName"
      :state="state.dialogs[dialogName]"
    />
    <NavMenu :state="state.navs" />
    <Alert :state="state.alert" />
    <Tree :state="state.tree" />
    <Steps :state="state.steps" />
    <Dropdown :state="state.dropdown" />
    <Tabs :state="state.tabs" />
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
import Alert from '@/admin/common/Notice/Alert/index.vue'
import Steps from '@/admin/common/Navigation/Steps/index.vue'
import Dropdown from '@/admin/common/Navigation/Dropdown/index.vue'
import Tabs from '@/admin/common/Navigation/Tabs/index.vue'
import NavMenu from '@/admin/common/Navigation/NavMenu/index.vue'
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
    Tree,
    Alert,
    Steps,
    Dropdown,
    Tabs,
    NavMenu
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
