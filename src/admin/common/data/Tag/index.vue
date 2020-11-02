<template>
  <span class="tag-box">
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
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      :size="state[0].size"
      class="new-tag-input"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      :size="state[0].size"
      class="new-tag-button"
      @click="showInput"
    >+ New Tag</el-button>
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

  private inputValue = '';
  private inputVisible = false;
  private dynamicTags: Array<TagState> = [];

  handleClose(tag: any) {
    this.state.splice(this.state.indexOf(tag), 1)
  }

  showInput() {
    this.inputVisible = true
    this.$nextTick((): void => {
      const inputNewTag: any = this.$refs.saveTagInput
      inputNewTag.focus()
    })
  }

  handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.dynamicTags.push()
    }
    this.inputVisible = false
    this.inputValue = ''
  }
}
</script>

<style lang="scss" scoped>
.new-tag-input {
  display: inline-block;
  width: 90px;
  margin-left: 5px;
  height: 28px;
  vertical-align: bottom;
  ::v-deep .el-input__inner {
    height: 100% !important;
  }
}
.new-tag-button {
  display: inline-block;
  margin-left: 5px;
  padding: 6px;
  vertical-align: bottom;
}
</style>
