<template>
  <div class="whole_container">
    <!-- 匿名 -->
    <slot></slot>
    <!-- 具名 -->
    <slot name="haha"></slot>

    <!-- 作用域 -->
    <slot name="scop" num="12" word="ha"></slot>
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
