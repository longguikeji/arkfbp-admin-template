<template>
  <el-divider
    :direction="state.direction"
    :content-position="state.contentPosition"
  >
    {{ state.value }}
  </el-divider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DividerState from './DividerState'

@Component({
  name: 'Divider'
})
export default class extends Vue {
  @Prop({ required: true }) state!: DividerState;
}
</script>
<style lang="scss" scoped></style>
