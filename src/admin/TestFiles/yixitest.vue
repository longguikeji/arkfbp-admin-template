<template>
  <Form :state="state.form" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Form from '@/admin/common/Form/index.vue'
@Component({
  name: 'Yixitest',
  components: { Form }
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>

</style>
