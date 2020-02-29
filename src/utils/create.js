// 创建组件实例挂载到body上
import Vue from 'vue'
export default function create(Component,props) {
    // 先创建Vue实例
    const vm = new Vue({
        render(h) {
            // reander方法提供给我们一个h函数，可以渲染VNode
            return h(Component, {props})
        }
    }).$mount();

    // vm是我们创建的实例
    // 通过$children获取该组件的实例
    // console.log(vm.$root)
    const comp = vm.$children[0]

    // 追加至body
    document.body.appendChild(vm.$el)

    // 清理函数，资源控制
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    // 返回组件实例
    return comp

}