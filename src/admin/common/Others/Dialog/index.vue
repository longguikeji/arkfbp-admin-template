<template>
  <el-dialog
    v-if="state.type === 'table'"
    :title="state.title"
    :visible.sync="state.visible"
    width="97%"
  >
    <TablePage :state="state" />
  </el-dialog>
  <el-dialog
    v-else
    :title="state.title"
    :visible.sync="state.visible"
    width="30%"
  >
    <Form :state="state" />
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        class="dialog__cancel__button"
        :size="state.actions[0].size || 'small'"
        @click="state.visible = false"
      >取 消</el-button>
      <ButtonArray
        class="dialog__actions__button"
        :state="state.actions"
      />
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DialogState from './DialogState'
import Form from '@/admin/common/Form/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
@Component({
  name: 'Dialog',
  components: {
    Form,
    ButtonArray
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: DialogState;
}
</script>

<style lang="scss" scoped>
.dialog__cancel__button {
  margin-right: 10px;
}
.dialog__actions__button {
  display: inline-block !important;
}
</style>
