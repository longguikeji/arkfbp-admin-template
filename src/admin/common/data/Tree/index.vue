<template>
  <el-tree />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TagState from './TreeState'

@Component({
  name: 'Tree',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: Array<TagState>;
}
</script>

<style lang="scss" scoped>

</style>
