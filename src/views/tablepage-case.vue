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
        title: '测试FormPage',
        buttons: [
          { label: '按钮1' },
          { label: '按钮2' }
        ],
        form: {
          items: [
            [
              { type: 'Input', label: '输入框A', state: { value: '', placeholder: 'asdf' } },
              { type: 'Input', label: '输入框B', state: { value: '' } },
              { type: 'Input', label: '输入框C', state: { value: '' } },
              { type: 'Input', label: '输入框D', state: { value: '' } }
            ],
            [
              { type: 'Button', state: { value: '', label: '按钮' } },
              { type: 'Button', state: { value: '', label: '按钮' } },
              { type: 'Button', state: { value: '', label: '按钮' } },
              { type: 'Button', state: { value: '', label: '按钮' } }
            ]
          ]
        }
      }
    }
  }
})
</script>
