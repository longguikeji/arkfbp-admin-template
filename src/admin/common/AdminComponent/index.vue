<template>
  <component :is="item" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AdminComponentState from './AdminComponentState'
import Button from '@/admin/common/Button/index.vue'
import Input from '@/admin/common/Form/Input/index.vue'
import Cascader from '@/admin/common/Form/Cascader/index.vue'
import CascaderPanel from '@/admin/common/Form/Cascader/CascaderPanel/index.vue'
import Select from '@/admin/common/Form/Select/index.vue'
import Tag from '@/admin/common/data/Tag/index.vue'
import Progress from '@/admin/common/data/Progress/index.vue'

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

  get item(): object {
    const state = this.state
    return {
      components: {
        Button,
        Input,
        Cascader,
        Select,
        Tag,
        Progress,
        CascaderPanel,
        RadioGroup,
        CheckBoxGroup,
        InputNumber,
        SwitchButton,
        Slider,
        Time,
        DatePicker,
        Rate,
        ColorPicker,
        Transfer
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
