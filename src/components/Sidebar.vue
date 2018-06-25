<template>
  <el-menu :default-active="activeIndex" mode="horizontal" router>
    <el-menu-item index="/">
      Home
    </el-menu-item>
    <el-menu-item index="/node">
      Nodejs
    </el-menu-item>
    <el-menu-item index="/python">
      Python
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      activeIndex: this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
