<template>
  <div>
    <Button
      v-for="button in state"
      :key="state.indexOf(button)"
      :state="button"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ButtonArrayState from './ButtonArrayState'
import Button from '@/admin/common/Button/index.vue'

@Component({
  name: 'ButtonArray',
  components: {
    Button
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!:ButtonArrayState;
}
</script>
