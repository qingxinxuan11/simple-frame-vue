<template>
  <div class="whole_container">
    <span>lalalalala</span>
    <span>{{time | filterExample}}</span>
    <span>{{time | moment('dddd, MMMM Do YYYY')}}</span>
    <span>{{time | moment('YYYY')}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      time: '2019-11-14 09:56:45'
    }
  },
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  created () {
    console.log(this.userInfo)
    this.$http.get('api/v1/common/city/list').then(res => {
      console.log(res)
    })

    // let tempUrl = window.location.href
    // if (tempUrl.indexOf('&') !== -1) {
    //   tempUrl = tempUrl.replace(/&/g, '$')
    // }

    // this.$http.jsonp(`http://wapzx.51hejia.com/Apim/api?url=${tempUrl}`).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss" scoped>
.whole_container {
  width: 10rem;
  height: 100%;
  span {
      display: inline-block;
      width: 6.666667rem;
  }
}
</style>
