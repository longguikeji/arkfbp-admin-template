<template>
  <div>
    <Card :path="getChildPath('')">
      <Form :path="getChildPath('form')" />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'FormPage',
  components: {
    Form,
    Card
  }
})
export default class extends Mixins(BaseVue) {
  get state(): FormPageState {
    return this.$state as FormPageState
  }
}
</script>
<style lang="scss" scoped>
::v-deep .tox .tox-menubar {
  width: 1000px;
}
::v-deep .tui-editor-defaultUI { width: 1000px;}
</style>
