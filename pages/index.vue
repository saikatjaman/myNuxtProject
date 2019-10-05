<template>
  <v-container>
    <h1 class="display-1">{{ course }}</h1>
  </v-container>
</template>
<script>
export default {
  // to get the state data
  computed: {
    course: {
      get() {
        return this.$store.getters.upperCaseCourse
      },
      set(value) {
        this.$store.commit('setCourse', value)
      }
    }
  }
}
</script>
