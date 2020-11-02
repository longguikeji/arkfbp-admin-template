<template>
  <component :is="item" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AdminComponentState from './AdminComponentState'
import Button from '@/admin/common/Button/index.vue'
import Input from '@/admin/common/Form/Input/index.vue'
import Cascader from '@/admin/common/Form/Cascader/index.vue'
import Select from '@/admin/common/Form/Select/index.vue'
import Tag from '@/admin/common/data/Tag/index.vue'

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
        Tag
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
