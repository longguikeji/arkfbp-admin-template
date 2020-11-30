<template>
  <Card :path="getChildPath('')">
    <div>
      <Form :path="filterPath" />
    </div>
    <Table :path="getChildPath('table')" />
    <Pagination
      :path="getChildPath('pagination')"
    />
    <template v-if="state.dialogs">
      <Dialog
        v-for="dialogName in Object.keys(state.dialogs)"
        :key="dialogName"
        :path="getChildPath('dialogs.' + dialogName)"
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator'
import Card from '@/admin/common/Card/index.vue'
import Table from '@/admin/common/data/Table/index.vue'
import Button from '@/admin/common/Button/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Pagination from '@/admin/common/data/Pagination/index.vue'
import Dialog from '@/admin/common/Others/Dialog/index.vue'
import BaseVue from '../base/BaseVue'
import TablePageState from './TablePageState'

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
export default class extends Mixins(BaseVue) {
  get state():TablePageState {
    return this.$state as TablePageState
  }

  get filterPath():string {
    if (this.state.filter) {
      this.state.filter.inline = true
    }
    return this.getChildPath('filter')
  }
}
</script>

<style lang="scss" scoped>
.__tablepage__pagination__ {
  margin-top: 20px;
}
</style>
