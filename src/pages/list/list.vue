<!-- @format -->

<template>
  <div class="whole_container">
    <!--mescroll滚动区域的基本结构-->
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
    </mescroll-vue>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'List',
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 // 每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        toTop: {
          // 回到顶部按钮
          src: '', // 图片路径,默认null,支持网络图
          offset: 1000 // 列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: '', // 父布局的id (1.3.5版本支持传入dom元素)
          icon: '', // 图标,默认null,支持网络图
          tip: '暂无相关数据~' // 提示
        }
      },
      dataList: [] // 列表数据
    }
  },
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  components: {
    MescrollVue
  },
  created () {},
  beforeRouteEnter (to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      // 联网请求
      this.$http
        .get('api/v1/common/city/list', {
          params: {
            num: page.num, // 页码
            size: page.size // 每页长度
          }
        })
        .then(response => {
          console.log(response.body)
          // 请求的列表数据
          let arr = response.data
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = []
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        })
        .catch(e => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.whole_container {
  width: 100%;
  height: 100vh;
}
</style>
