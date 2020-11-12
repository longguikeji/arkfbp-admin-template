<template>
  <div>
    <Card :state="state">
      <Form :state="state.form" />
    </Card>
    <Rich :state="state.rich" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
import Rich from '@/admin/common/Others/Rich/index.vue'
@Component({
  name: 'FromPage',
  components: {
    Form,
    Card,
    ButtonArray,
    Rich
  }
})
export default class extends Vue {
  @Prop({ required: false }) state!: FormPageState;
}
</script>
<style lang="scss" scoped></style>
