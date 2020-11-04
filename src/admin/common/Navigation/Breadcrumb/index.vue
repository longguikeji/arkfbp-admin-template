<template>
  <el-breadcrumb
    :separator-class="state.separatorClass"
    :separator="state.separator"
  >
    <el-breadcrumb-item
      v-for="(item, index) in state.items"
      :key="index"
      :to="item.to"
      :replace="item.replace"
    >
      {{ item.text }}
    </el-breadcrumb-item>
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
