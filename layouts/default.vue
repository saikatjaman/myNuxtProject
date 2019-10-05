<template>
  <v-app>
    <v-content>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>
          <n-link to="/">
            Nuxt-SJ
          </n-link>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn text>
            <n-link to="weather">Weather App</n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <nuxt />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
</style>
