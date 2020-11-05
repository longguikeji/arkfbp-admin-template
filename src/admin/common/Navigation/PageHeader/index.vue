<template>
  <el-page-header
    :title="state.title"
    :content="state.content"
    @back="goBack"
  />
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

  goBack() {
    console.log('go back')
  }
}
</script>

<style lang="scss" scoped>
</style>
