<template>
  <el-checkbox-group v-model="state.value">
    <template v-if="state.checkBox">
      <el-checkbox
        v-for="(item, index) in state.checkBox"
        :key="index"
        :label="item"
      >
        {{ item }}
      </el-checkbox>
    </template>
    <template v-else-if="state.checkButton">
      <el-checkbox-button
        v-for="(item, index) in state.checkButton"
        :key="index"
        :label="item"
      >
        {{ item }}
      </el-checkbox-button>
    </template>
  </el-checkbox-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CheckBoxGroupState from './CheckBoxGroupState'

@Component({
  name: 'CheckBoxGroup',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: CheckBoxGroupState;
}
</script>
