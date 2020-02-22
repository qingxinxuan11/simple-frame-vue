<template>
  <div class="whole_container">
    <div @click="$parent.$emit('myBrotherClick','oneClick')">this is component one</div>
    <div>{{sendData}} {{passAllData}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ComponentOne',
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  inject: ['passAllData'],
  props: {
    sendData: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whole_container {
  width: 100%;
}
</style>
