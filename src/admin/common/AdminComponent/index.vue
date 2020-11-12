<template>
  <el-badge
    v-if="badge"
    :value="badge.value"
    :max="badge.max"
    :is-dot="badge.idDot"
    :hidden="badge.hidden"
    :type="badge.type"
  >
    <component :is="item" />
  </el-badge>
  <component
    :is="item"
    v-else
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AdminComponentState from './AdminComponentState'
import Button from '@/admin/common/Button/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'
import Link from '@/admin/common/Link/index.vue'
import Input from '@/admin/common/Form/Input/index.vue'
import Cascader from '@/admin/common/Form/Cascader/index.vue'
import Select from '@/admin/common/Form/Select/index.vue'
import Avator from '@/admin/common/data/Avator/index.vue'
import Tree from '@/admin/common/data/Tree/index.vue'
import Alert from '@/admin/common/Notice/Alert/index.vue'
import Breadcrumb from '@/admin/common/Navigation/Breadcrumb/index.vue'
import Dropdown from '@/admin/common/Navigation/Dropdown/index.vue'
import NavMenu from '@/admin/common/Navigation/NavMenu/index.vue'
import PageHeader from '@/admin/common/Navigation/PageHeader/index.vue'
import Steps from '@/admin/common/Navigation/Steps/index.vue'
import Tabs from '@/admin/common/Navigation/Tabs/index.vue'
import RadioGroup from '@/admin/common/Form/Radio/index.vue'
import CheckBoxGroup from '@/admin/common/Form/Check/index.vue'
import InputNumber from '@/admin/common/Form/InputNumber/index.vue'
import SwitchButton from '@/admin/common/Form/Switch/index.vue'
import Slider from '@/admin/common/Form/Slider/index.vue'
import Time from '@/admin/common/Form/TimePicker/index.vue'
import DatePicker from '@/admin/common/Form/DatePicker/index.vue'
import Rate from '@/admin/common/Form/Rate/index.vue'
import ColorPicker from '@/admin/common/Form/ColorPicker/index.vue'
import Transfer from '@/admin/common/Form/Transfer/index.vue'
import Tag from '@/admin/common/data/Tag/index.vue'
import Progress from '@/admin/common/data/Progress/index.vue'
import Upload from '@/admin/common/Form/Upload/index.vue'
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
import Backtop from '@/admin/common/Others/Backtop/index.vue'
@Component({
  name: 'AdminComponent',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: AdminComponentState;
  // @Watch('state', { immediate: true, deep: true })
  // fresh() {
  //   this.item = this.getItem()
  //   this.$forceUpdate()
  // }

  // item?:object

  get badge() {
    if (this.state.state.badge) {
      return this.state.state.badge
    } else {
      return false
    }
  }

  get item(): object {
    const state = this.state
    return {
      components: {
        Button,
        ButtonArray,
        Link,
        Input,
        Cascader,
        Select,
        Tag,
        Progress,
        Avator,
        Tree,
        Alert,
        Breadcrumb,
        Dropdown,
        NavMenu,
        PageHeader,
        Steps,
        Tabs,
        RadioGroup,
        CheckBoxGroup,
        InputNumber,
        SwitchButton,
        Slider,
        Time,
        DatePicker,
        Rate,
        ColorPicker,
        Transfer,
        Upload,
        Drawer,
        ImageBox,
        Calendar,
        Divider,
        Timeline,
        Collapse,
        Carousel,
        Popconfirm,
        Popover,
        Tooltip,
        Backtop
      },
      render: (h: Function) => {
        return h(state.type, {
          props: {
            state: state.state
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-badge__content.is-fixed {
  z-index: 100 !important;
}
</style>
