<template>
  <option-only
    v-if="state.type !== 'group'"
    :state="state"
  />
  <option-group
    v-else
    :state="state"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import OptionOnly from './Option/index.vue'
import OptionGroup from './OptionGroup/index.vue'
import SelectState from './SelectState'

@Component({
  name: 'Select',
  components: {
    OptionOnly,
    OptionGroup
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: SelectState;
}
</script>

<style lang="scss" scoped>
</style>
