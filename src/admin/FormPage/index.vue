<template>
  <div>
    <Card
      :state="state"
      style="width:80%;margin: 0 auto; "
    >
      <Form :state="state.form" />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'

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
  name: 'FromPage',
  components: {
    Form,
    Card,
    ButtonArray,
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
  @Prop({ required: false }) state!: FormPageState;
}
</script>
