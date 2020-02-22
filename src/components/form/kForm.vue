<template>
    <div class="form_container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inheritAttrs: false, // 避免顶层容器继承属性
    name: "Kform",
    provide() {
        return {
            form: this //传form实例给后代
        };
    },
    data() {
        return {
            errMsg: ""
        };
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate(cb) {
            // map的结果是若干个promise数组
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate());
            Promise.all(tasks)
                .then(res => cb(true))
                .catch(() => cb(false));
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
