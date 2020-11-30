<template>
  <div v-if="state">
    <DashboardPage
      v-if="state.type === 'DashboardPage'"
      :state="state"
    />
    <FormPage
      v-if="state.type === 'FormPage'"
      :state="state"
    />
    <TablePage
      v-if="state.type === 'TablePage'"
      :state="state"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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

  async mounted() {
    const route = this.$route
    const requireModule = require.context('@/config/view', true, /\.json$/)
    const files = requireModule.keys().map(e => e.slice(2))
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const page = file.split('.')[0]
      if (window.location.href.includes(page)) {
        const viewconfig: any = require(`@/config/view/${page}.json`) // eslint-disable-line
        const serveconfig: any = require(`@/config/serve/${page}.json`) // eslint-disable-line

        const c: any = new Config(viewconfig, serveconfig, page.split('/').pop())
        await AdminModule.setAdmin(c.config)
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
