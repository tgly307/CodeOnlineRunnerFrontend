<template>
  <el-menu :default-active="$route.path" mode="horizontal" router>
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
  name: "sidebar"
};
</script>

<style scoped>
</style>
