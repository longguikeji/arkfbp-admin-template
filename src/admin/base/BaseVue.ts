import { Component, Prop, Vue } from 'vue-property-decorator'
import getDataByPath from '@/utils/datapath'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { runFlow } from '@/arkfbp'

export interface Hook {
  actions:Array<string>
}

export interface Action {
  flows: Array<any>
}

export interface BaseState {
    created?: Hook
    beforeMount?: Hook
    mounted?: Hook
    beforeUpdate?: Hook
    updated?: Hook
    beforeDestroy?: Hook
    destroyed?: Hook
}

@Module
export class BaseModule extends VuexModule implements BaseState {
  created?: Hook
  beforeMount?: Hook
  mounted?: Hook
  beforeUpdate?: Hook
  updated?: Hook
  beforeDestroy?: Hook
  destroyed?: Hook

  @Mutation
  async runFlow(name: string) {
    await runFlow(this, name, {})
  }

  @Action
  runAction(name: string) {
    this.context.commit('runFlow', this.context.rootState.allActions[name])
  }
}

@Component({
  name: 'BaseVue'
})
export default class extends Vue {
  @Prop({ required: true }) storePath!: string;

  // @Prop({ required: true }) state!: BaseState;

  get state():BaseState {
    return this.$store.state[this.storePath] as BaseState
  }

  get createdHook():Hook {
    return this.state.created as Hook
  }

  getChildStorePath(path:string, module: BaseModule) {
    const sp = this.storePath + path
    this.$store.registerModule(sp, module)
    return sp
  }

  // @Watch('state', { immediate: true, deep: false })
  // fresh() {
  //   this.$forceUpdate()
  // }

  created() {
    this.runHook(this.state.created)
  }

  beforeMount() {
    this.runHook(this.state.beforeMount)
  }

  mounted() {
    this.runHook(this.state.mounted)
  }

  beforeUpdate() {
    this.runHook(this.state.beforeUpdate)
  }

  updated() {
    this.runHook(this.state.updated)
  }

  beforeDestroy() {
    this.runHook(this.state.beforeDestroy)
  }

  destroyed() {
    this.runHook(this.state.destroyed)
  }

  runHook(hook?:Hook) {
    if (hook && hook.actions) {
      hook.actions.forEach((actionName) => {
        this.$store.dispatch(this.storePath + '/runAction', actionName)
      })
    }
  }
}
