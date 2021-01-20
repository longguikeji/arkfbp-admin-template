<template>
  <div
    v-if="state"
    class="main"
  >
    <DashboardPage
      v-if="state.type === 'DashboardPage'"
      :path="'admin.adminState'"
    />
    <FormPage
      v-if="state.type === 'FormPage'"
      :path="'admin.adminState'"
    />
    <TablePage
      v-if="state.type === 'TablePage'"
      :path="'admin.adminState'"
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
import TablePageModule from '@/admin/TablePage/TablePageState'
import { runAction } from '@/arkfbp'

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
    const route = this.$route

    let serveconfig = {}

    if (!route.meta.viewconfig) {
      return
    }

    if (route.meta.serveconfig) {
      serveconfig = route.meta.serveconfig ? require(`@/config/${route.meta.serveconfig.split('.').join('/')}.json`) : '' // eslint-disable-line
    } else {
      serveconfig = await runAction({
        flow: 'arkfbp.flows.serveConfig',
        inputs: {
          url: `/serve/${route.meta.current}/`
        }
      })
    }

    const viewconfig = require(`@/config/${route.meta.viewconfig.split('.').join('/')}.json`) // eslint-disable-line

    const c: any = new Config(route.meta.current, viewconfig, serveconfig)
    await AdminModule.setAdmin(c.config)
  }

  async destroyed() {
    await AdminModule.setAdmin(null)
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
