<template>
  <div v-if="state">
    <DashboardPage
      v-if="state.type === 'dashboard'"
      :state="state"
    />
    <FormPage
      v-if="state.type === 'form'"
      :state="state"
    />
    <TablePage
      v-if="state.type === 'table'"
      :state="state"
    />
    <FormPage
      v-if="state.type === 'exampleone'"
      :state="state"
    />

    <TablePage
      v-if="state.type === 'testpage'"
      :state="state"
    />

    <TablePage
      v-if="state.type === 'secondpage'"
      :state="state"
    />

    <TablePage
      v-if="state.type === 'zhiya'"
      :state="state"
    />

    <TablePage
      v-if="state.type === 'fourthpage'"
      :state="state"
    />
    <TablePage
      v-if="state.type === 'fifthpage'"
      :state="state"
    />
    <TablePage
      v-if="state.type === 'sixthpage'"
      :state="state"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Config } from '@/config'
import { AdminModule } from '@/store/modules/admin'
import DashboardPage from '@/admin/DashboardPage/index.vue'
import FormPage from '@/admin/FormPage/index.vue'
import TablePage from '@/admin/TablePage/index.vue'

@Component({
  name: 'Admin',
  components: {
    DashboardPage,
    FormPage,
    TablePage
  }
})
export default class extends Vue {
  private get state() {
    return AdminModule.adminState
  }

  async created() {
    const requireModule = require.context('@/config/json', false, /\.json$/)
    const files = requireModule.keys().map(e => e.slice(2))

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const page = file.split('.')[0]
      if (window.location.href.includes(page)) {
        const viewconfig: any = require(`@/config/json/${file}`); // eslint-disable-line
        const serveconfig: any = require("@/config/temp/user.json"); // eslint-disable-line
        const c: any = new Config(viewconfig, serveconfig, page)
        await AdminModule.setAdmin(c.config)
        await AdminModule.adminAction({ action: 'meta' })
      }
    }

    if (AdminModule.adminState.created) {
      const actions = AdminModule.adminState.created.actions || []
      for (let i = 0; i < actions.length; i++) {
        await AdminModule.adminAction({ action: actions[i] })
      }
    }
  }
}
</script>
