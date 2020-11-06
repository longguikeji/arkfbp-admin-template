<template>
  <el-form-item
    class="form-item"
    :label-width="state.labelWidth"
    :size="state.size"
  >
    <span
      v-if="state.label"
      slot="label"
    >{{ state.label }}</span>
    <AdminComponent :state="state" />
  </el-form-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
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
}
</script>
<style lang="scss" scoped>
.form-item{
  text-align: center;
}
</style>
