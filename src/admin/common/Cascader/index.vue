<template>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{expandTrigger: 'hover'}"
    @change="handleChange"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CascaderState from './CascaderState'

@Component({
  name: 'Cascader',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CascaderState;

  actionHandler(actionName: string) {
    console.log(actionName)
    // runAction(actionName)
  }
}
</script>
