<template>
  <el-button
    :size="state.size || 'small'"
    :plain="state.plain"
    :round="state.round"
    :circle="state.circle"
    :loading="state.loading"
    :disabled="state.disabled"
    :icon="state.icon"
    :autofocus="state.autofocus"
    :native-type="state.nativeType"
    @click="switchHandler"
  >
    {{ switchLabel() }}
  </el-button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AdminModule } from '@/store/modules/admin'
import SwitchButtonState from './SwitchButtonState'
import Button from '@/admin/common/Button/index.vue'

@Component({
  name: 'SwitchButton',
  components: {
    Button
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:SwitchButtonState;

  switchLabel() {
    let label = this.state.labels[this.state.data[this.state.prop]]
    if (label == null) {
      label = '默认'
    }
    return label
  }

  async switchHandler() {
    await AdminModule.adminAction({ action: this.state.action, data: this.state.data })
  }
}
</script>
