<template lang="pug">
div.p-index
  Nav
  Demo(title="hello Index")
</template>
<style lang="scss">
@charset 'utf-8';
.p-index {
  height: 100%;
  background: #fff;
}
</style>

<script>
import Demo from '~@/widget/demo/demo.vue'
import Nav from '~@/widget/nav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  methods: {
    ...mapActions(['addDemoLog'])
  },
  components: {
    Demo,
    Nav
  },
  mounted() {
    const vm = this
    vm.addDemoLog('page index is ready')
    vm.addDemoLog(`now in ${process.env.NODE_ENV}`)
  }
}
</script>
