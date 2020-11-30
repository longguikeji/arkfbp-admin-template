<template>
  <el-card>
    <div slot="header">
      <span>{{ state.title }}</span>
      <ButtonArray
        class="buttons"
        :path="getChildPath('buttons')"
      />
    </div>
    <slot />
  </el-card>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
import BaseVue from '@/admin/base/BaseVue'
import CardState from './CardState'

@Component({
  name: 'Card',
  components: {
    ButtonArray
  }
})
export default class extends Mixins(BaseVue) {
  get state(): CardState {
    return super.$state as CardState
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
