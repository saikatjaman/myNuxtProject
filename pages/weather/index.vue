<template>
  <v-container>
    <h1 class="display-1 text-center">My Weather App</h1>
    <v-flex xs12>
      <v-card class="content-stl" dark>
        <v-card-text>
          <v-layout text-center>
            <v-flex xs4>
              <h4>Tempresure</h4>
              <h1 class="display-3">{{ weather.name }}</h1>
              <img :src="icon" alt="wetaher-icon" />
              <P>
                <span display-1>{{ temp() }} &deg;C</span>
                <span class="caption ml-4">{{
                  weather.weather[0].description
                }}</span>
              </P>
            </v-flex>
            <v-flex xs4>
              <h4>Wind & Pressure</h4>
              <h3 class="headline">Wind: {{ weather.wind.speed }} &deg;</h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }} %
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hpa
              </h3>
            </v-flex>
            <v-flex xs4>
              <h4>Other</h4>
              <h3 class="headline">
                Max temperature:
                {{ Math.round(weather.main.temp_max - 273) }} &deg;
              </h3>
              <h3 class="headline mt-4">
                Min temperature:
                {{ Math.round(weather.main.temp_min - 273) }} &deg;
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          label="Enter City Name"
          outlined
          v-model="city"
        ></v-text-field>
      </v-form>
    </v-flex>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  // its a intial value assign in the variable
  // data(){
  //   return {
  //     city: 'London',
  //   }
  // },
  // For any logic that requires more than one expression, you should use a computed property.
  computed: {
    ...mapState('weather', ['weather']),
    city: {
      get() {
        return this.$store.state.weather.city
      },
      set(value) {
        return this.$store.commit('weather/setCity', value)
      }
    },
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  /* The created hook allows you to add code which is run if the Vue instance is created. 
    The steps in a Vue Lifecycle.https://vuejs.org/images/lifecycle.png are: beforeCreate, created, beforeMount, mounted,
    beforeUpdate, updated, beforeDestroy,destroyed.You can hook directly into these steps.
    If you link the created hook, you can directly execute code as soon as the program starts.
    */
  // created() {
  //   this.getWeatherInfo()
  // },
  /*
    A Vue method is a function associated with the Vue instance.
    Methods are defined inside the methods property.Methods are especially useful when you need to 
    perform an action and you attach a (v-on) directive on an element to handle events. 
    Like this one, which calls (getWeatherInfo) when the element is clicked:
    You can access any of the data properties of the Vue component by using this.propertyName (eg.this.weather):
    */

  fetch({ store, $axios }) {
    return store.dispatch('weather/getWeatherInfo')
  },
  methods: {
    getWeatherInfo() {
      this.$store.dispatch('weather/getWeatherInfo')
    },
    temp() {
      return Math.round(this.weather.main.temp - 273)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-stl {
  background-color: #4a5966;
  color: #ffffff;
}
</style>
