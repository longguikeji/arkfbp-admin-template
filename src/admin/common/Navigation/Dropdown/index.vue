<template>
  <el-dropdown />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DropdownState from './DropdownState'

@Component({
  name: 'Dropdown',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: DropdownState;
}
</script>

<style lang="scss" scoped>
</style>
