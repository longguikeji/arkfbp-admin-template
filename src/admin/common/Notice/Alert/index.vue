<template>
  <el-alert
    :title="state.title"
    :type="state.type"
    :closable="state.closable"
    :center="state.center"
    :description="state.description"
    :close-text="state.closeText"
    :show-icon="state.showIcon"
    :effect="state.effect"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AlertState from './AlertState'

@Component({
  name: 'Alert',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: AlertState;
}
</script>

<style lang="scss" scoped>
</style>
