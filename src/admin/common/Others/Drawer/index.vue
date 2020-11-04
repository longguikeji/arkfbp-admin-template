<template>
  <div>
    <el-button
      type="primary"
      @click="drawer = true"
    >
      点我打开
    </el-button>
    <el-drawer
      :title="state.title"
      :visible.sync="drawer"
      :direction="state.direction"
      :before-close="handleClose"
    >
      <Form :state="content" />
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DrawerState from './DrawerState'
import Form from '@/admin/common/Form/index.vue'

@Component({
  name: 'Drawer',
  components: {
    Form
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: DrawerState;
  @Prop({ required: false }) content!: any;

  drawer = false;

  handleClose() {
    console.log('handleClose()')
  }
}
</script>

<style lang="scss" scoped></style>
