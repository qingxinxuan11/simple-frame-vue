<template>
    <li>
        <div @click="toggle">
            {{model.name}}
            <span v-if="isFolder">{{open?'-':'+'}}</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item" :model="model" v-for="model in model.children" :key="model.id"></item>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'Item',
    props: {
        model: Object
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            console.log(this)
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle() {
            if(this.isFolder) {
                this.open = !this.open
            }
        }
    },
}
</script>

