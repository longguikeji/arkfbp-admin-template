<template>
  <span>
    <el-tag
      v-for="(tag, index) in state"
      :key="index"
      :type="tag.type"
      :closable="tag.closable"
      :disable-transitions="tag.disableTransitions"
      :hit="tag.hit"
      :color="tag.color"
      :size="tag.size"
      :effect="tag.effect"
      @close="handleClose(tag)"
    >
      {{ tag.content }}
    </el-tag>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TagState from './TagState'

@Component({
  name: 'Tag',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: Array<TagState>;

  handleClose(tag: any) {
    this.state.splice(this.state.indexOf(tag), 1)
  }
}
</script>

<style lang="scss" scoped>
</style>
