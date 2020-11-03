<template>
  <el-steps />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StepsState from './StepsState'

@Component({
  name: 'Steps',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: StepsState;
}
</script>

<style lang="scss" scoped>
</style>
