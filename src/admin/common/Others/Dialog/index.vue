<template>
  <el-dialog
    :title="state.title"
    :visible.sync="state.visible"
    width="800px"
  >
    <Form :state="state" />
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
import { Component, Prop, Vue } from 'vue-property-decorator'
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
}
</script>

<style lang="scss" scoped></style>
