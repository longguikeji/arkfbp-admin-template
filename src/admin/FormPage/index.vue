<template>
  <div>
    <Card
      :state="state"
      style="width:800px;margin: 0 auto; "
    >
      <Form :state="state.form" />
      <ButtonArray
        class="buttons"
        :state="state.button"
      />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'

@Component({
  name: 'FromPage',
  components: {
    Form,
    Card,
    ButtonArray
  }
})
export default class extends Vue {
  @Prop({ required: false }) state!: FormPageState;
}
</script>
<style lang="scss" scoped>
.buttons {
  float: right;
  position: relative;
  padding: 20px;
}
</style>
