<template>
  <div id="app">
    <el-button>defautl</el-button>
    <el-button>run</el-button>
    <el-button>input</el-button>
    <el-button>copy code</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
