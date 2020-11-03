<template>
  <el-dialog
    :title="state.title"
    :visible.sync="state.visible"
    width="30%"
  >
    <Form :state="content" />
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="state.visible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="state.visible = false"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import DialogState from './DialogState'
import Form from '@/admin/common/Form/index.vue'

@Component({
  name: 'Dialog',
  components: {
    Form
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: DialogState;
  @Prop({ required: false }) content!: any;

  @Watch('this.state.visible', { immediate: true })
  private getVisible(oldValue: any, newValue: any) {
    console.log(newValue)
    this.state.visible = newValue
  }
}
</script>

<style lang="scss" scoped>
</style>
