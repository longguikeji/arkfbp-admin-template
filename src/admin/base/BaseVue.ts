import { Component, Prop, Vue } from 'vue-property-decorator'
import getDataByPath from '@/utils/datapath'
import { AdminModule } from '@/store/modules/admin'

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

@Component({
  name: 'BaseVue'
})
export default class extends Vue {
  @Prop({ required: true }) path!: string;

  get state():BaseState {
    return this.$state
  }

  get $state():BaseState {
    const s = getDataByPath(this.$store.state, this.path)
    console.log(this.$store.state, this.path, s)
    return s
  }

  getChildPath(path:String | Number) {
    let sp = this.path
    if (typeof path === 'number') {
      // debugger
      sp += '[' + path + ']'
    } else if (path[0] === '[') {
      sp += path
    } else if (path !== '') {
      sp += '.' + path
    }
    return sp
  }

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
        AdminModule.adminAction({ action: actionName, data: this.path })
        // this.$store.dispatch(this.path + '/runAction', actionName)
      })
    }
  }
}
