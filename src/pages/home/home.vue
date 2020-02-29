<template>
  <div class="whole_container">
    <span @click="showNotice">lalalalala</span>
    <span>{{time | filterExample}}</span>
    <span>{{time | moment('dddd, MMMM Do YYYY')}}</span>
    <span>{{time | moment('YYYY')}}</span>
    <component-one :value.sync="say"></component-one>
    <component-two :sendData="sendData"></component-two>
    <component-slot>
      匿名传的
    <template v-slot:haha>
      <div>
        this is haha slot
      </div>
    </template>
    <!-- <template v-slot:scop="slotData">
      <div>
        {{slotData.num}}
      </div>
    </template> -->
    <!-- 直接对象解构 -->
    <template v-slot:scop="{num,word}">
      <div>
        {{num}}:{{word}}
      </div>
    </template>
    </component-slot>
    <form-test></form-test>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ComponentOne from '../../components/componentOne'
import ComponentTwo from '../../components/componentTwo'
import ComponentSlot from '../../components/componentSlot'
import FormTest from '../../components/form/index'
import Notice from '../../components/notice/index'
import create from '@/utils/create'
export default {
  name: 'Home',
  data () {
    return {
      time: '2019-11-14 09:56:45',
      sendData: 'This is father',
      say: '123'
    }
  },
  provide: {
    passAllData: 'toChildren'
  },
  computed: {
    ...mapGetters('UserInfo', {
      userInfo: 'getMembInfo'
    })
  },
  components: {
    ComponentOne,
    ComponentTwo,
    ComponentSlot,
    FormTest
  },
  created () {
    console.log(this.userInfo)
    this.$http.get('api/v1/common/city/list').then(res => {
      console.log(res)
    })

    // let tempUrl = window.location.href
    // if (tempUrl.indexOf('&') !== -1) {
    //   tempUrl = tempUrl.replace(/&/g, '$')
    // }

    // this.$http.jsonp(`http://wapzx.51hejia.com/Apim/api?url=${tempUrl}`).then(res => {
    //   console.log(res)
    // })
  }, 
  watch: {
    say: (newVal,oldVal) => {
      console.log(`parent:${newVal}:${oldVal}`)
    }
  },
  methods: {
    showNotice() {
      let notice = create(Notice,{
        title: 'haha',
        message: 'liuliu',
        duration: 10000
      })
      notice.open()
    }
  },
}
</script>

<style lang="scss" scoped>
.whole_container {
  width: 10rem;
  height: 100%;
  span {
      display: inline-block;
      width: 6.666667rem;
  }
}
</style>
