<template>
  <span v-if="state.readonly">{{ state.value }} </span>
  <el-input
    v-else
    v-model="state.value"
    :type="state.type"
    :maxlength="state.maxlength"
    :minlength="state.minlength"
    :show-word-limit="state.showWordLimit"
    :placeholder="state.placeholder"
    :clearable="state.clearable || true"
    :show-password="state.showPassword"
    :disabled="state.disabled"
    :size="state.size"
    :rows="state.rows"
    :autosize="state.autosize"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import InputState from './InputState'

@Component({
  name: 'Input',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: InputState;
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.col {
  margin: 12px;
  flex: auto;
}
</style>
