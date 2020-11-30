<template>
  <el-form-item
    class="form-item"
    :label-width="state.labelWidth"
    :size="state.size || 'small'"
  >
    <span
      v-if="state.label"
      slot="label"
    >{{ state.label }}</span>
    <AdminComponent :path="getChildPath('')" />
  </el-form-item>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import FormItemState from './FormItemState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'FormItem',
  components: {
    AdminComponent
  }
})
export default class extends Mixins(BaseVue) {
  get state(): FormItemState {
    return this.$state as FormItemState
  }
}
</script>
<style lang="scss" scoped>
.form-item {
  text-align: center;
}
::v-deep .el-form-item__content {
  display: inline-block !important;

}

</style>
