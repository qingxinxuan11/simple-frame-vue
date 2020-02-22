<template>
  <div class="whole_container">
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" type="password"></k-input>
      </k-form-item>
	  <k-form-item>
		  <button @click="onLogin">login</button>
	  </k-form-item>
    </k-form>
  </div>
</template>

<script>
import kInput from "./kInput.vue";
import kFormItem from "./kformItem.vue";
import kForm from "./kform.vue";
export default {
  name: "FormIndex",
  components: {
    kInput,
    kFormItem,
    kForm
  },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  props: {},
  created() {},
  methods: {
	  onLogin() {
		  this.$refs.loginForm.validate(res => {
			  console.log(res)
		  })
	  }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whole_container {
  width: 100%;
}
</style>
