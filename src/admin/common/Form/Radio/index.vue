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
import RadioState from './RadioState'

@Component({
  name: 'Radio',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: RadioState;
}
</script>
