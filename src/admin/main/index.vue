<template>
  <div v-if="state">
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

  async beforeCreate() {
    const route = this.$route

    const viewconfig = require(`@/config/${route.meta.viewconfig.split('.').join('/')}.json`) // eslint-disable-line
    const serveconfig = require(`@/config/${route.meta.serveconfig.split('.').join('/')}.json`) // eslint-disable-line

    const c: any = new Config(viewconfig, serveconfig, route.meta.current)
    await AdminModule.setAdmin(c.config)
  }
}
</script>
