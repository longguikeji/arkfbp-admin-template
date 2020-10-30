<template>
  <span v-if="state.readonly">{{ state.value }} </span>
  <el-radio
    v-else
    v-model="state.value"
    :disabled="state.disabled"
    :text-color="state.textColor"
    :size="state.size"
    :fill="state.fill"
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
