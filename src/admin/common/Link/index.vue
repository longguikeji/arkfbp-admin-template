<template>
  <el-link
    :href="state.href"
    :disabled="state.disabled"
    :type="state.type"
    :underline="state.underline"
    :icon="state.icon"
    target="_blank"
  >
    {{ state.value }}
  </el-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LinkState from './LinkState'

@Component({
  name: 'TableColumn',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: LinkState;
}
</script>
