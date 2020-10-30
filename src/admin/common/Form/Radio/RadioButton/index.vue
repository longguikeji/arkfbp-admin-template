<template>
  <span v-if="state.readonly">{{ state.label }} </span>
  <el-radio-button
    v-else
    :label="state.label"
    :disabled="state.disabled"
    :name="state.name"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RadioButtonState from './RadioButtonState'

@Component({
  name: 'RadioButton',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: RadioButtonState;
}
</script>
