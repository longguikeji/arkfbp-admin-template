<template>
  <el-switch
    v-model="state.value"
    :disabled="state.disabled"
    :width="state.width"
    :active-icon-class="state.activeIconClass"
    :in-active-icon-class="state.inActiveIconClass"
    :active-text="state.activeText"
    :in-active-text="state.inActiveText"
    :active-value="state.activeValue"
    :in-active-value="state.inActiveValue"
    :active-color="state.activeColor"
    :in-active-color="state.inActiveColor"
    :name="state.name"
    :validate-event="state.validateEvent"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SwitchState from './SwitchState'

@Component({
  name: 'SwitchButton',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: SwitchState;
}
</script>

<style lang="scss" scoped></style>
