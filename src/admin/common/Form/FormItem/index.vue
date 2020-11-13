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
    <AdminComponent :state="state" />
  </el-form-item>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import FormItemState from './FormItemState'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'

@Component({
  name: 'FormItem',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: FormItemState;
  @Watch('state', { deep: true })
  private valueChange(value: FormItemState) {
    console.log('state', this.state.state.value)
  }

  // get value() {
  //   this.state.state[this.state.prop].value
  //   return this.state;
  // }
  // set value(newValue: any) {
  //   this.state.state[this.state.prop] = newValue;
  // }
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
