<template>
  <Form :state="state" />
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '@/admin/common/Form/index.vue'

export default Vue.extend({
  components: {
    Form
  },
  data() {
    return {
      state: {
        items: [
          { type: 'Input', label: 'title1', state: { value: '' } },
          [
            { type: 'Input', label: 'title2', state: { value: '' } },
            { type: 'Input', label: 'title3', state: { value: '' } }
          ],
          { type: 'Button', state: { label: 'button1' } },
          [
            { type: 'Button', state: { label: 'button2' } },
            { type: 'Button', state: { label: 'button2' } }
          ]
        ]
      }
    }
  }
})
</script>
