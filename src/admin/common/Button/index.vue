<template>
  <el-button
    :size="state.size || 'small'"
    :type="state.type"
    :plain="state.plain"
    :round="state.round"
    :circle="state.circle"
    :loading="state.loading"
    :disabled="state.disabled"
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

  @Watch('state', { immediate: true, deep: true })
  fresh() {
    this.$forceUpdate()
  }

  private async clickHandler() {
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
      }).catch((err) => {
        this.$message({
          message: err,
          type: 'error',
          showClose: true
        })
      })
    } else {
      await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
    }
  }
}
</script>
