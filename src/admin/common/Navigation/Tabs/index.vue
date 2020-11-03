<template>
  <el-tabs />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TabsState from './TabsState'

@Component({
  name: 'Tabs',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: TabsState;
}
</script>

<style lang="scss" scoped>
</style>
