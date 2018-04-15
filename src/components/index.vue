<template>
  <div>
    <slider></slider>
    <nav-hot></nav-hot>
  </div>
</template>

<script>
import navHot from '@/components/navHot'
import slider from '@/components/slider'

export default {
  name: 'products',
  components: {
    'nav-hot': navHot,
    'slider': slider
  },
  methods: {

  }
}
</script>

<style scoped>


</style>
