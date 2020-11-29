import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { runFlow } from '@/arkfbp'
import { cloneDeep } from 'lodash'
import store from '@/store'

export interface IAdminState {
  adminState: any
}

@Module({ dynamic: true, store, name: 'admin' })
class Admin extends VuexModule implements IAdminState {
  public adminState: any = null

  @Mutation
  public CHANGE_ADMIN(payload: any) {
    this.adminState = payload
  }

  @Action
  public async setAdmin(payload: any) {
    this.CHANGE_ADMIN(payload)
  }

  @Action
  public async adminAction(payload: { action: string, data?: any, router?: any}) {
    const { action, data, router } = payload
    // const adminState = cloneDeep(this.adminState)
    const adminState = this.adminState

    if (!adminState.actions || !adminState.actions[action]) {
      return
    }

    const flows = adminState.actions[action].flows

    for (let i = 0; i < flows.length; i++) {
      await runFlow(adminState, flows[i], data, router)
    }

    // const newAdminState = cloneDeep(this.adminState)
    this.CHANGE_ADMIN(adminState)

    if (adminState.actions[action].next) {
      const next = adminState.actions[action].next
      for (let j = 0; j < next.length; j++) {
        await this.adminAction({
          action: next[j].action,
          data: data
        })
      }
    }
  }
}

export const AdminModule = getModule(Admin)
