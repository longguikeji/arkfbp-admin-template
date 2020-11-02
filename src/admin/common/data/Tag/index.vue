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
        v-show="isNewTag[index] === 1 && visibleFlags[index] === true"
        :ref="'saveTagInput' + index"
        v-model="inputValue[index]"
        :size="dynamicTags[index].size"
        class="new-tag-input"
        @keyup.enter.native="handleInputConfirm(index)"
        @blur="handleInputConfirm(index)"
      />
      <el-button
        v-show="isNewTag[index] === 1 && visibleFlags[index] === false"
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

  private inputValue: Array<string> = [];
  private dynamicTags: Array<TagState> = this.state;
  private visibleFlags: Array<Boolean> = []

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
      this.inputValue.push('')
    })
    return dynamicTagsFlags
  }

  get visibleData() {
    return this.visibleFlags
  }

  handleClose(tag: any) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
  }

  showInput(index: number) {
    this.visibleFlags[index] = true
    this.$nextTick((): void => {
      const refItem = 'saveTagInput' + index
      const inputNewTag: any = this.$refs[refItem]
      inputNewTag[0].focus()
    })
  }

  handleInputConfirm(inpIndex: number) {
    const inputValue = this.inputValue[inpIndex]
    if (inputValue) {
      this.isNewTag.forEach((flagItem, flagIndex) => {
        if (flagItem === 1) {
          const dynamicTagItem = JSON.parse(
            JSON.stringify(this.dynamicTags[flagIndex])
          )
          dynamicTagItem.content = inputValue
          delete this.dynamicTags[flagIndex].newTagType
          this.dynamicTags.splice(flagIndex + 1, 0, dynamicTagItem)
        }
      })
    }
    this.visibleFlags[inpIndex] = false
    this.inputValue[inpIndex] = ''
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
