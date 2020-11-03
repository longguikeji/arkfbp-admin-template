<template>
  <el-menu />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NavMenuState from './NavMenuState'

@Component({
  name: 'NavMenu',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: NavMenuState;
}
</script>

<style lang="scss" scoped>
</style>
