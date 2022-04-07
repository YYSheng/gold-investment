<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="onClick">
    <HelloWorld msg="Welcome to Your Gold Investment App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    onClick () {
      this.$router.push({ path: '/About' })
    }
  }
}
</script>
