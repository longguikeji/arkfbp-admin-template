<template>
  <Table :state="state" />
</template>

<script lang="ts">
import Vue from 'vue'
import Table from '@/admin/common/data/Table/index.vue'

export default Vue.extend({
  components: {
    Table
  },
  data() {
    return {
      state: {
        columns: [
          { prop: 'id' },
          { prop: 'name' }
        ],
        data: [
          { id: 1, name: 'asdf' },
          { id: 2, name: 'qewr' },
          { id: 3, name: 'zxcv' }
        ]
      }
    }
  }
})
</script>
