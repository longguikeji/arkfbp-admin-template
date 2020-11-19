<template>
  <el-switch
    v-model="state.value"
    style="display: block"
    :disabled="state.disabled"
    :width="state.width"
    :active-icon-class="state.activeIconClass"
    :inactive-icon-class="state.inactiveIconClass"
    :active-text="state.activeText"
    :inactive-text="state.inactiveText"
    :active-value="state.activeValue"
    :inactive-value="state.inactiveValue"
    :active-color="state.activeColor"
    :inactive-color="state.inactiveColor"
    :name="state.name"
    :validate-event="state.validateEvent"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SwitchState from './SwitchState'

@Component({
  name: 'SwitchForm',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: SwitchState;
}
</script>

<style lang="scss" scoped></style>
