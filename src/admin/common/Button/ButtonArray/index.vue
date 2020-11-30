<template>
  <div>
    <template v-for="(button, index) in state">
      <SwitchButton
        v-if="button.type === 'switch'"
        :key="'switch' + index"
        :path="getChildPath(index)"
      />
      <Button
        v-else
        :key="index"
        :path="getChildPath(index)"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ButtonArrayState from './ButtonArrayState'
import Button from '@/admin/common/Button/index.vue'
import SwitchButton from '@/admin/common/Button/SwitchButton/index.vue'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'ButtonArray',
  components: {
    Button,
    SwitchButton
  }
})
export default class extends Mixins(BaseVue) {
  get state():ButtonArrayState {
    return super.$state as ButtonArrayState
  }
}
</script>
