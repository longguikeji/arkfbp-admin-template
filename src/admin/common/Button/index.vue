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
    console.log('action!!!')
    await AdminModule.adminAction({ action: this.state.action })
  }
}
</script>
