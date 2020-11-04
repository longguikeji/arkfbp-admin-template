<template>
  <el-menu
    :mode="state.mode"
    :collapse="state.collapse"
    :background-color="state.backgroundColor"
    :text-color="state.textColor"
    :active-text-color="state.activeTextColor"
    :default-active="state.defaultActive"
    :default-openeds="state.defaultOpeneds"
    :unique-opened="state.uniqueOpened"
    :menu-trigger="state.menuTrigger"
    :router="state.router"
    :collapse-transition="state.collapseTransition"
  >
    <Submenu
      v-for="item in state.children"
      :key="item.title + state.children.indexOf(item)"
      :state="item"
    />
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Submenu from './Submenu/index.vue'
import NavMenuState from './NavMenuState'

@Component({
  name: 'NavMenu',
  components: {
    Submenu
  }
})
export default class extends Vue {
  @Prop({ required: true }) state!: NavMenuState;
}
</script>

<style lang="scss" scoped>
</style>
