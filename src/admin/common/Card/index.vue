<template>
  <el-card>
    <div slot="header">
      <span>{{ state.title }}</span>
      <ButtonArray
        class="buttons"
        :state="state.buttons"
      />
    </div>
    <slot />
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import CardState from './CardState'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'

@Component({
  name: 'FromPage',
  components: {
    ButtonArray
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:CardState;
  @Watch('state', { immediate: true, deep: true })
  fresh() {
    this.$forceUpdate()
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  float: right;
  position: relative;
  top: -10px; /*偏移*/
  // transform: translateY(-50%);
}
</style>
