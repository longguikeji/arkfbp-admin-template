<template>
  <el-link
    :href="state.value"
    :disabled="state.disabled"
    :type="state.type"
    :underline="state.underline"
    :icon="state.icon"
    target="_blank"
  >
    <span v-if="state.displayContent === 'link'">{{ state.value }}</span>
    <i
      v-else
      class="el-icon-document"
    />
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
