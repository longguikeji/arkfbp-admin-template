<template>
  <div>
    <template v-for="(button, index) in state">
      <SwitchButton
        v-if="button.type === 'switch'"
        :key="'switch' + index"
        :state="button"
      />
      <Button
        v-else
        :key="index"
        :state="button"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ButtonArrayState from './ButtonArrayState'
import Button from '@/admin/common/Button/index.vue'
import SwitchButton from '@/admin/common/Button/SwitchButton/index.vue'

@Component({
  name: 'ButtonArray',
  components: {
    Button,
    SwitchButton
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:ButtonArrayState;
}
</script>
