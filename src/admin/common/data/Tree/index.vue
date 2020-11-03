<template>
  <el-tree
    :data="state.data"
    :props="state.props"
    :show-checkbox="state.showCheckbox"
    :load="loadNode"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TreeState from './TreeState'

@Component({
  name: 'Tree',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: Array<TreeState>;

  loadNode() {
    console.log('loadNode')
  }
}
</script>

<style lang="scss" scoped>
</style>
