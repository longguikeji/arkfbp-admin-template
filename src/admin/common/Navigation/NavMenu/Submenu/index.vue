<template>
  <el-submenu
    v-if="childrenType"
    :index="state.title + 1"
  >
    <template slot="title">
      <i
        v-if="state.icon"
        :class="state.icon"
      />{{ state.title }}
    </template>
    <Submenu
      v-for="item in state.children"
      :key="item.title + state.children.indexOf(item)"
      :state="item"
    />
  </el-submenu>
  <el-menu-item
    v-else
    :index="state.title + 0"
  >
    <i
      v-if="state.icon"
      :class="state.icon"
    />{{ state.title }}
  </el-menu-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SubmenuState from './SubmenuState'
import MenuItemState from './MenuItemState'

@Component({
  name: 'Submenu',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: SubmenuState | MenuItemState;

  get childrenType() {
    const submenuType = Object.prototype.hasOwnProperty.call(this.state, 'children')
    return submenuType
  }
}
</script>

<style lang="scss" scoped>
</style>
