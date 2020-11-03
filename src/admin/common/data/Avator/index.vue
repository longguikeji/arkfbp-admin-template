<template>
  <el-avatar
    :icon="state.icon"
    :size="state.size"
    :shape="state.shape"
    :src="state.src"
    :src-set="state.srcSet"
    :alt="state.alt"
    :fit="state.fit"
  >
    <span
      v-if="state.content"
      :style="{'font-size': state.fontSize}"
    >{{ state.content }}</span>
  </el-avatar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AvatorState from './AvatorState'

@Component({
  name: 'Avator',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: AvatorState;
}
</script>

<style lang="scss" scoped>
</style>
