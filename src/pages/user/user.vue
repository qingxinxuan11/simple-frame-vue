<template>
  <div class="whole_container">
    <span>this is user page</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  created () {
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
