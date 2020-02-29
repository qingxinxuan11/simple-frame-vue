<template>
    <div>
        <div>{{title}}</div>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number | String,
            default: 3000
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        open() {
            this.isShow = true
            setTimeout(() => {
                this.close()
            },this.duration)
        },
        close() {
            this.isShow = false
            this.remove()
        }
    },
}
</script>

