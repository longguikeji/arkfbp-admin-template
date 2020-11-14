<template>
  <div>
    Hello
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dashboard',
  components: {
  }
})
export default class extends Vue {
  private currentRole = 'admin-dashboard'

  // get roles() {
  //   return UserModule.roles
  // }

  // created() {
  //   if (!this.roles.includes('admin')) {
  //     this.currentRole = 'editor-dashboard'
  //   }
  // }
}
</script>
