<template>
  <el-badge>
    <AdminComponent />
  </el-badge>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AdminComponent from '@/common/AdminComponent/index.vue'
import BadgeState from './BadgeState'

@Component({
  name: 'Badge',
  components: {
    AdminComponent
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: Array<BadgeState>;
}
</script>

<style lang="scss" scoped>
</style>
