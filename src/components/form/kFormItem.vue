<template>
    <div class="form_item_container">
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="errMsg">{{ errMsg }}</p>
    </div>
</template>

<script>
import Schema from "async-validator";
export default {
    inheritAttrs: false, // 避免顶层容器继承属性
    name: "KformItem",
    data() {
        return {
            errMsg: ""
        };
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        prop: String
    },
    inject: ["form"],
    mounted() {
        this.$on("validate", res => {
            this.validate();
        });
    },
    methods: {
        // 执行组件校验
        validate() {
            // 获取值
            const value = this.form.model[this.prop];
            // 获取校验规则
            const rules = this.form.rules[this.prop];
            // 执行校验 async-validator
            const desc = {
                [this.prop]: rules
            };
            const schema = new Schema(desc);
            // 返回的是一个promise，bol值
            return schema.validate({ [this.prop]: value }, error => {
                if (error) {
                    this.errMsg = error[0].message;
                } else {
                    // 没错清除错误信息
                    this.errMsg = "";
                }
            });
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
