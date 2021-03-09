<template lang="pug">
div.p-sub
  Nav
  Demo
</template>
<style lang="scss">
@charset 'utf-8';
.p-sub {
  background: #ddd;
  height: 100%;
}
</style>
<script>
import Demo from '~@/widget/demo/demo.vue'
import Nav from '~@/widget/nav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'PageSub',
  methods: {
    ...mapActions(['addDemoLog'])
  },
  components: {
    Demo,
    Nav
  },
  mounted() {
    const vm = this
    vm.addDemoLog('page sub is ready')
    vm.addDemoLog(`now in ${process.env.NODE_ENV}`)
  }
}
</script>
