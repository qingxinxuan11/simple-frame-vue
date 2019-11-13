<template>
  <div class="whole_container">
    <span>lalalalala</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  created () {
    console.log(this.userInfo)
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
