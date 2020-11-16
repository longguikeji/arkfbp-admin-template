<template>
  <el-button
    :size="state.size || 'small'"
    :type="state.type"
    :plain="state.plain"
    :round="state.round"
    :circle="state.circle"
    :loading="state.loading"
    :disabled="isDisabled"
    :icon="state.icon"
    :autofocus="state.autofocus"
    :native-type="state.nativeType"
    @click="clickHandler"
  >
    {{ state.label }}
  </el-button>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { AdminModule } from '@/store/modules/admin'
import ButtonState from './ButtonState'

@Component({
  name: 'Button',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: ButtonState;
  @Prop({ required: false }) index!: number;
  @Watch('state', { immediate: true, deep: true })
  fresh() {
    this.$forceUpdate()
  }

  get isDisabled() {
    if (this.state.data && this.state.data.button && this.state.data.button[this.index]) {
      return this.state.data.button[this.index].disabled
    } else {
      return this.state.disabled
    }
  }

  private async clickHandler() {
    console.log('action!!!', this.state.action)
    console.log('data ', this.state.data)
    console.log('cloumn ', this.state.cloumn)
    if (this.state.type === 'warning' || this.state.type === 'danger') {
      let headMessage = ''
      let confirmType: any
      switch (this.state.type) {
        case 'danger':
          headMessage = '警告'
          confirmType = 'error'
          break
        case 'warning':
          headMessage = '提示'
          confirmType = 'warning'
          break
      }

      this.$confirm('确定执行 ' + this.state.label + ' 操作吗？', headMessage, {
        confirmButtonText: this.state.label,
        cancelButtonText: '取消',
        type: confirmType
      }).then(async() => {
        await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
      }).catch((err) => { console.log(err) })
    } else {
      await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
    }
  }
}
</script>
