// state just like a data
export const state = () => ({
  course: 'NuxtJs for everyone'
})

// mutation just like a data change
export const mutations = {
  setCourse(state, payload) {
    state.course = payload
  }
}
// getter just like computed property to get data and return
export const getters = {
  upperCaseCourse(state, getter) {
    return state.course.toUpperCase()
  }
}
