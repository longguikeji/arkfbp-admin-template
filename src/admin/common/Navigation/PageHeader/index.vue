<template>
  <el-page-header />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageHeaderState from './PageHeaderState'

@Component({
  name: 'PageHeader',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: PageHeaderState;
}
</script>

<style lang="scss" scoped>
</style>
