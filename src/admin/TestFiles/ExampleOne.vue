<template>
  <div>
    <Card :state="state">
      <Form :state="state.form" />
      <Timeline :state="state.timeline" />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ExampleOneState from './ExampleOneState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Timeline from '@/admin/common/Others/Timeline/index.vue'
import AdminComponent from '@/admin/common/AdminComponent/index.vue'
@Component({
  name: 'ExampleOne',
  components: {
    Form,
    Card,
    Timeline
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: ExampleOneState;
}
</script>
