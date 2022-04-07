<template>
  <div class="about">
    <h1 @click="onClick">This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  methods: {
    onClick () {
      this.$router.go(-1)
    }
  }
}
</script>
