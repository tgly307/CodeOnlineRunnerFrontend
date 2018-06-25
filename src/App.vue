<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="12">
        <sidebar></sidebar>
        <router-view style="margin-top: 10px"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    sidebar
  }
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
