<template>
  <el-select
    v-model="state.value"
    :placeholder="state.placeholder"
  >
    <el-option
      v-for="(item, index) in state.options"
      :key="index"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SelectState from './SelectState'

@Component({
  name: 'Select',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: SelectState;
}
</script>

<style lang="scss" scoped>
</style>
