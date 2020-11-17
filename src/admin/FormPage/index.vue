<template>
  <div>
    <Card :state="state">
      <Form :state="state.form" />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
@Component({
  name: 'FormPage',
  components: {
    Form,
    Card
  }
})
export default class extends Vue {
  @Prop({ required: false }) state!: FormPageState;
}
</script>
<style lang="scss" scoped></style>
