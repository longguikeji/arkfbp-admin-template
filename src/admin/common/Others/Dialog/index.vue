<template>
  <el-dialog
    :title="state.title"
    :visible.sync="state.visible"
    :width="state.width || '800px'"
    :fullscreen="state.fullscreen"
    :top="state.top"
    :modal="state.modal"
    :modal-append-to-body="state.modalAppendToBody"
    :append-to-body="state.appendToBody"
    :lock-scroll="state.lockScroll"
    :custom-class="state.customClass"
    :close-on-click-modal="state.closeOnClickModal || false"
    :close-on-press-escape="state.closeOnPressEscape"
    :show-close="state.showClose"
    :center="state.center"
    :destory-on-close="state.destoryOnClose"
  >
    <TablePage
      v-if="state.type === 'TablePage'"
      :path="getChildPath('content')"
    />
    <Form
      v-else
      :path="getChildPath('')"
    />
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        class="dialog__cancel__button"
        :size="cancelButtonSize"
        @click="state.visible = false"
      >取 消</el-button>
      <ButtonArray
        v-if="state.actions && state.actions.length > 0"
        class="dialog__actions__button"
        :path="getActionPath()"
      />
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import DialogState from './DialogState'
import Form from '@/admin/common/Form/index.vue'
import FormItem from '@/admin/common/Form/FormItem/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
import BaseVue from '@/admin/base/BaseVue'
@Component({
  name: 'Dialog',
  components: {
    Form,
    FormItem,
    ButtonArray
  }
})
export default class extends Mixins(BaseVue) {
  get state(): DialogState {
    return this.$state as DialogState
  }

  get cancelButtonSize() {
    if (this.state.actions && this.state.actions.length > 0) {
      return this.state.actions[0].size
    } else {
      return 'small'
    }
  }

  getActionPath() {
    const data = this.state.data as any

    if (this.state.actions) {
      this.state.actions.forEach((e: any) => {
        e.data = data
      })
    }

    return this.getChildPath('actions')
  }
}
</script>

<style lang="scss" scoped>
.dialog__cancel__button {
  margin-right: 10px;
}
.dialog__actions__button {
  display: inline-block !important;
}
::v-deep .el-form-item__label {
  width: 100px;
}

</style>
