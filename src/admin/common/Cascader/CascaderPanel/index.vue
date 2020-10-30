<template>
  <el-cascader-panel :options="options" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CascaderPanelState from './CascaderPanelState'

@Component({
  name: 'Cascader',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CascaderPanelState;

  actionHandler(actionName: string) {
    console.log(actionName)
    // runAction(actionName)
  }
}
</script>
