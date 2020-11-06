<template>
  <Card :state="state">
    <Table :state="state.table" />
    <Pagination :state="state.pagination" />
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import FormState, { FormItemStateArray } from '@/admin/common/Form/FormState'
import Table from '@/admin/common/data/Table/index.vue'
import Form from '@/admin/common/Form/index.vue'

@Component({
  name: 'Yixitest',
  components: { Form, Table }
})
export default class extends Vue {
  @Prop({ required: true }) state!: FormState;
}
</script>
<style lang="scss" scoped></style>
