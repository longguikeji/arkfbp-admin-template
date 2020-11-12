<template>
  <div>
    <Card :state="state">
      <Form :state="state.form" />
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormPageState from './FormPageState'
import Card from '@/admin/common/Card/index.vue'
import Form from '@/admin/common/Form/index.vue'
import ButtonArray from '@/admin/common/Button/ButtonArray/index.vue'

@Component({
  name: 'FromPage',
  components: {
    Form,
    Card,
    ButtonArray
  }
})
export default class extends Vue {
  @Prop({ required: false }) state!: FormPageState;

//   audio: "https://cdn.yixi.tv/1587469725946.mp3"
// id: 538
// recommended: 0
// release_time: "2020年04月21日 14:40"
// speaker_name: "测试讲者"
// speechcategory: [23, 29]
// speechcity: "北京"
// speechdate: "2020年04月12"
// status: 0
// title: "他就像一个邻居，只不过没有房子"
// total_play_count: 33
// video: "https://cdn.yixi.tv/1587462944094.mp4"
// video_cover: "https://cdn.yixi.tv/almond/16018099926817.jpg"
}
</script>
<style lang="scss" scoped></style>
