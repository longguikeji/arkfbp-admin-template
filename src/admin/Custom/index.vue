<template>
  <Card
    class="table-card"
    :path="getChildPath('card')"
  >
    <div>
      <Form :path="filterPath" />
    </div>
    <Bulletin />
  </Card>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Card from '../common/Card/index.vue'
import Form from '../common/Form/index.vue'
import CustomState from './CustomState'
import BaseVue from '../base/BaseVue'
import Bulletin from '../../bulletin/index.vue'
@Component({
  name: 'TablePage',
  components: {
    Form,
    Card,
    Bulletin
  }
})
export default class extends Mixins(BaseVue) {
  get state(): CustomState {
    return this.$state as CustomState
  }

  get filterPath(): string {
    if (this.state.filter) {
      this.state.filter.inline = true
    }
    return this.getChildPath('filter')
  }
}
</script>

<style lang="scss" scoped>
.table-card {
  height: 100%;
  .table-pagination {
    margin-top: 20px;
  }
}
.el-card.is-always-shadow {
  overflow: auto;
}
</style>
