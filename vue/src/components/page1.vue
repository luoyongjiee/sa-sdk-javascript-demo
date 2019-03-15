<template>
  <div class="hello">
    <h1>这是一个demo</h1>
    <h1>Page1</h1>
    <router-link to="/page2">to Page2</router-link>
  </div>
</template>

<script>
  import sensors from 'sa-sdk-javascript'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        sensors.track('foo',{
          title:'page1'
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
