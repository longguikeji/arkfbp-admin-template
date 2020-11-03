import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { runFlow } from '@/arkfbp'
import { cloneDeep } from 'lodash'
import store from '@/store'

export interface IAdminState {
  adminState: any
}

@Module({ dynamic: true, store, name: 'admin' })
class Admin extends VuexModule implements IAdminState {
  public adminState: any = {}

  @Mutation
  public CHANGE_ADMIN(payload: any) {
    this.adminState = payload
  }

  @Action
  public async setAdmin(payload: any) {
    this.CHANGE_ADMIN(payload)
  }

  @Action
  public async adminAction(payload: { action: string, data?: any}) {
    const { action, data } = payload
    const adminState = cloneDeep(this.adminState)

    if (!adminState.flows || !adminState.flows[action]) {
      return
    }

    const flow = adminState.flows[action]
    await runFlow(adminState, flow, data)

    if (adminState.flows[action].next) {
      const next = adminState.flows[action].next

      for (let i = 0; i < next.length; i++) {
        await this.adminAction({
          action: next[i].action
        })
      }
    }

    this.CHANGE_ADMIN(adminState)
  }
}

export const AdminModule = getModule(Admin)
