<template>
  <el-color-picker
    v-model="state.value"
    :disabled="state.disabled"
    :size="state.size"
    :show-alpha="state.showAlpha"
    :color-format="state.colorFormat"
    :popper-class="state.popperClass"
    :predefine="state.predefine"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ColorPickerState from './ColorPickerState'

@Component({
  name: 'ColorPicker',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: ColorPickerState;
}
</script>

<style lang="scss" scoped></style>
