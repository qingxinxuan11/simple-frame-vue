import Vue from 'vue'

Vue.filter('filterExample', (value, arg) => {
  if (value !== '') {
    return 'filterExample'
  }
})
