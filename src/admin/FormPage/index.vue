<template>
  <div>
    <Card :state="state">
      <Form :state="state.form" />
    </Card>
    <Drawer :state="state.drawer" />
    <ImageBox :state="state.image" />
    <Calendar :state="state.calendar" />
    <Divider :state="state.divider" />
    <Timeline :state="state.timeline" />
    <Collapse :state="state.collapse" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import Drawer from '@/admin/common/Others/Drawer/index.vue'
import ImageBox from '@/admin/common/Others/Image/index.vue'
import Calendar from '@/admin/common/Others/Calendar/index.vue'
import Divider from '@/admin/common/Others/Divider/index.vue'
import Timeline from '@/admin/common/Others/Timeline/index.vue'
import Collapse from '@/admin/common/Others/Collapse/index.vue'
@Component({
  name: 'FromPage',
  components: {
    Form,
    Card,
    Drawer,
    ImageBox,
    Calendar,
    Divider,
    Timeline,
    Collapse
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: FormPageState;
}
</script>
