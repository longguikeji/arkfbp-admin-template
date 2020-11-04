<template>
  <el-breadcrumb>
    <el-breadcrumb-item />
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BreadcrumbState from './BreadcrumbState'

@Component({
  name: 'Breadcrumb',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: BreadcrumbState;
}
</script>

<style lang="scss" scoped>
</style>
