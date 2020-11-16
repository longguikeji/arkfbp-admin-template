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
    <Carousel :state="state.carousel" />
    <Popconfirm :state="state.popconfirm" />
    <Popover :state="state.popover" />
    <Tooltip :state="state.tooltip" />
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
import Carousel from '@/admin/common/Others/Carousel/index.vue'
import Popconfirm from '@/admin/common/Others/Popconfirm/index.vue'
import Popover from '@/admin/common/Others/Popover/index.vue'
import Tooltip from '@/admin/common/Others/Tooltip/index.vue'
@Component({
  name: 'FormPage',
  components: {
    Form,
    Card,
    Drawer,
    ImageBox,
    Calendar,
    Divider,
    Timeline,
    Collapse,
    Carousel,
    Popconfirm,
    Popover,
    Tooltip
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: FormPageState;
}
</script>
