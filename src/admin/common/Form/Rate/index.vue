<template>
  <el-rate
    v-model="state.value"
    :max="state.max"
    :disabled="state.disabled"
    :allow-half="state.allowHalf"
    :low-threshold="state.lowThreshold"
    :high-threshold="state.highThreshold"
    :colors="state.colors"
    :void-color="state.voidColor"
    :disabled-void-color="state.disabledVoidColor"
    :icon-classes="state.iconClasses"
    :void-icon-class="state.voidIconClass"
    :disabled-void-icon-class="state.disabledVoidIconClass"
    :show-text="state.showText"
    :show-score="state.showScore"
    :text-color="state.textColor"
    :texts="state.texts"
    :score-template="state.scoreTemplate"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RateState from './RateState'

@Component({
  name: 'Rate',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: RateState;
}
</script>

<style lang="scss" scoped></style>
