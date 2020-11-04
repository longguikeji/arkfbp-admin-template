<template>
  <el-calendar
    v-model="state.value"
    :range="state.range"
    :first-day-of-week="state.firstDayOfWeek"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CalendarState from './CalendarState'

@Component({
  name: 'Calendar'
})
export default class extends Vue {
  @Prop({ required: true }) state!: CalendarState;
}
</script>
<style lang="scss" scoped></style>
