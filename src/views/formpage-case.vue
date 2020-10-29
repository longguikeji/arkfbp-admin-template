<template>
  <FormPage :state="state" />
</template>

<script lang="ts">
import Vue from 'vue'
import FormPage from '@/admin/FormPage/index.vue'

export default Vue.extend({
  components: {
    FormPage
  },
  data() {
    return {
      state: {
        title: 'formpage',
        buttons: [
          { label: 'button1' },
          { label: 'button2' }
        ],
        form: {
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
  }
})
</script>
