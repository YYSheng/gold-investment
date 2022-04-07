<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="div-input">
      <div>输入API：</div>
      <input type="text" class="input" style="width: 100%;" :value="url" />
    </div>
    <p>测试使用输入的API跳转WhatsApp与指定人员通讯功能</p>
    <a :href="url" target="_blank" rel="noopener">点我跳转</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: 'https://api.whatsapp.com/send?phone=+8615003878847&text=Hello'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
