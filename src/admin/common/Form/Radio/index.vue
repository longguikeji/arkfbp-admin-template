<template>
  <el-radio-group v-model="state.value">
    <template v-if="state.radio">
      <el-radio
        v-for="(item, index) in state.radio"
        :key="index"
        :label="item"
      >
        {{ item }}
      </el-radio>
    </template>
    <template v-else-if="state.radioButton">
      <el-radio-button
        v-for="(item, index) in state.radioButton"
        :key="index"
        :label="item"
      >
        {{ item }}
      </el-radio-button>
    </template>
  </el-radio-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RadioGroupState from './RadioGroupState'
@Component({
  name: 'RadioGroup',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: RadioGroupState;
}
</script>
