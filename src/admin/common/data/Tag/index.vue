<template>
  <span>
    <span
      v-for="(tag, index) in dynamicTags"
      :key="index"
      class="tag-box"
    >
      <el-tag
        :type="tag.type"
        :closable="tag.closable"
        :disable-transitions="tag.disableTransitions"
        :hit="tag.hit"
        :color="tag.color"
        :size="tag.size"
        :effect="tag.effect"
        class="tag-item"
        @close="handleClose(tag)"
      >
        {{ tag.content }}
      </el-tag>
      <el-input
        v-if="isNewTag[index] === 1 && visibleFlags[index] === true"
        :id="'saveTagInput' + index"
        :ref="'saveTagInput' + index"
        v-model="inputValue"
        :size="dynamicTags[index].size"
        class="new-tag-input"
        @keyup.enter.native="handleInputConfirm(tag, index)"
      />
      <el-button
        v-if="isNewTag[index] === 1 && visibleFlags[index] === false"
        :id="'saveTagButton' + index"
        :ref="'saveTagButton' + index"
        :size="dynamicTags[index].size"
        class="new-tag-button"
        @click="showInput(index)"
      >+ New Tag</el-button>
    </span>
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
  private dynamicTags: Array<TagState> = this.state;
  private visibleFlags: Array<Boolean> = [];

  get isNewTag() {
    const dynamicTagsFlags: Array<Number> = []
    this.visibleFlags = []
    this.dynamicTags.forEach((tagItem) => {
      if (tagItem.newTagType) {
        dynamicTagsFlags.push(1)
      } else {
        dynamicTagsFlags.push(0)
      }
      this.visibleFlags.push(false)
    })
    return dynamicTagsFlags
  }

  get visibleData() {
    return this.visibleFlags
  }

  handleClose(tag: any) {
    const deleteIndex = this.dynamicTags.indexOf(tag)
    if (this.dynamicTags[deleteIndex].newTagType) {
      this.dynamicTags[deleteIndex - 1].newTagType = this.dynamicTags[deleteIndex].newTagType
    }
    this.dynamicTags.splice(deleteIndex, 1)
  }

  showInput(index: number) {
    this.visibleFlags[index] = true
    this.$forceUpdate()
    this.$nextTick((): void => {
      const refItem = 'saveTagInput' + index
      const inputNewTag: any = this.$refs[refItem]
      inputNewTag[0].focus()
    })
  }

  handleInputConfirm(tag: any, inpIndex: number) {
    const refItem = 'saveTagInput' + inpIndex
    const inputElement: any = document.getElementById(refItem)
    const inputContent = inputElement.value
    if (inputContent.trim() !== '') {
      const addIndex = this.dynamicTags.indexOf(tag)
      const dynamicTagItem = JSON.parse(
        JSON.stringify(this.dynamicTags[addIndex])
      )
      dynamicTagItem.content = inputContent
      delete this.dynamicTags[addIndex].newTagType
      this.dynamicTags.splice(addIndex + 1, 0, dynamicTagItem)
    }
    this.visibleFlags[inpIndex] = false
    this.inputValue = ''
  }
}
</script>

<style lang="scss" scoped>
.tag-item {
  margin-left: 5px;
}
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
  padding: 5px;
  vertical-align: bottom;
}
</style>
