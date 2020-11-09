<template>
  <el-transfer
    v-model="state.value"
    style="text-align: left; display: inline-block"
    :data="state.data"
    :filterable="state.filterable"
    :filter-placeholder="state.filterPlaceholder"
    :target-order="state.targetOrder"
    :titles="state.titles"
    :button-texts="state.buttonTexts"
    :format="state.format"
    :props="state.props"
    :left-default-checked="state.leftDefaultChecked"
    :right-default-checked="state.rightDefaultChecked"
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
