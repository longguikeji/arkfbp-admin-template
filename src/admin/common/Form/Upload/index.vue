<template>
  <el-upload />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UploadState from './UploadState'

@Component({
  name: 'Upload',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) state!: UploadState;
}
</script>

<style lang="scss" scoped></style>
