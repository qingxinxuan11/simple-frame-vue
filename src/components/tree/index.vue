<template>
    <ul>
        <item class="item" :model="treeData"></item>
    </ul>
</template>
<script>
import Item from "./item";
export default {
    components: {
        Item
    },
    data() {
        return {
            treeData: {
                name: "学科",
                id: 1,
                children: [
                    {
                        id: 11,
                        name: "数学",
                        children: [
                            {
                                id: 111,
                                name: "积分"
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: "语文",
                        children: [
                            {
                                id: 121,
                                name: "诗词"
                            }
                        ]
                    }
                ]
            }
        };
    }
};
</script>
<style lang="sass" scoped></style>
