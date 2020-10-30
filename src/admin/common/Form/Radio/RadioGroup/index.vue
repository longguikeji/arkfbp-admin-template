<template>
  <span v-if="state.readonly">{{ state.value }} </span>
  <el-radio
    v-else
    v-model="state.value"
    :label="state.label"
    :disabled="state.disabled"
    :border="state.border"
    :size="state.size"
    :name="state.name"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RadioGroupState from './RadioGroupState'

@Component({
  name: 'RadioGroup',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: RadioGroupState;

//    value: string | number | boolean;
//   size: string;
//   disabled: boolean;
//   textColor: string;
//   fill: string;
}
</script>
