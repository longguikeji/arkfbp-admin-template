<template>
  <el-transfer
    :data="state.data"
    :filterable="state.filterable"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TransferState from './TransferState'

@Component({
  name: 'Transfer',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: TransferState;
}
</script>

<style lang="scss" scoped></style>
