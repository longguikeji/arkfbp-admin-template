<template>
  <el-cascader-panel
    v-model="state.value"
    :options="state.options"
    :prop="state.prop"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CascaderPanelState from './CascaderPanelState'

@Component({
  name: 'CascaderPanel',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CascaderPanelState;
}
</script>
