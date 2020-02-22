<template>
  <div class="whole_container">
    <div>this is component two</div>
    <div>{{ sendData }} {{ passAllData }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ComponentTwo",
  computed: {
    ...mapGetters("UserInfo", {
      userInfo: "getMembInfo"
    })
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  inject: ["passAllData"],
  props: {
    sendData: {
      type: String,
      default: ""
    }
  },
  created() {
    this.$parent.$on("myBrotherClick", data => {
      console.log(data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whole_container {
  width: 100%;
}
</style>
