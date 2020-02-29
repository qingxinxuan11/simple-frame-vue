<template>
  <div class="whole_container">
    <input type="text" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'ComponentOne',
  data () {
    return {
    }
  },
  props: ['value'],
  methods: {
    onInput(e) {
      this.$emit('update:value',e.target.value)
    }
  },
  watch: {
    value: (newVal,oldVal) => {
      console.log(`son:${newVal}:${oldVal}`)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whole_container {
  width: 100%;
}
</style>
