<template>
  <div class="input_container">
    <!-- $attrs传的是value之外的属性 -->
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 避免顶层容器继承属性
  name: "Kinput",
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      // 通知父组件返回值
      this.$emit("input", e.target.value);

      // 通知父组件及时校验
      this.$parent.$emit("validate");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whole_container {
  width: 100%;
}
</style>
