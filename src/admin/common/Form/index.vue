<template>
  <el-form
    :inline="state.inline || false"
    :size="state.size"
    :disabled="state.disabled"
    :label-suffix="state.labelSuffix"
    :label-position="state.labelPosition"
    :label-width="state.labelWidth"
  >
    <template v-if="state.inline">
      <template v-for="item in state.items">
        <template v-if="(item instanceof Array)">
          <template v-for="it in item">
            <form-item
              :key="state.items.indexOf(item) +','+ item.indexOf(it)"
              :state="item"
            />
          </template>
        </template>
        <template v-else>
          <form-item
            :key="state.items.indexOf(item)"
            :state="item"
          />
        </template>
      </template>
    </template>
    <template v-else>
      <div
        v-for="item in state.items"
        :key="state.items.indexOf(item)"
        class="row"
      >
        <template v-if="(item instanceof Array)">
          <div
            v-for="it in item"
            :key="item.indexOf(it)"
            class="col"
          >
            <form-item :state="it" />
          </div>
        </template>
        <template v-else>
          <form-item :state="item" />
        </template>
      </div>
    </template>
  </el-form>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import FormState from './FormState'

import FormItem from './FormItem/index.vue'
import BaseVue from '@/admin/base/BaseVue'

@Component({
  name: 'Form',
  components: {
    FormItem
  }
})
export default class extends Mixins(BaseVue) {
  get state():FormState {
    return super.$state as FormState
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: flex-start;
}
.col {
  margin: 12px;
  flex: auto;
}
</style>
