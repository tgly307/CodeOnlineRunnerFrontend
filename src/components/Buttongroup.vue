<template>
  <el-row 
    type="flex" 
    justify="start">
    <el-button-group>
      <el-button @click="returnDefaultCode">Default Code</el-button>
      <el-button 
        @click="runCode" 
        type="primary" 
        :loading="running">Run Code</el-button>
      <el-button 
        @click="toggleInput" 
        :disabled="!ifInput">Input</el-button>
      <el-button>Copy Code</el-button>
    </el-button-group>
  </el-row>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    ifInput: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    returnDefaultCode() {
      this.$emit("returnDefaultCode");
    },
    runCode() {
      this.$emit("runCode");
    },
    toggleInput() {
      this.$emit("toggleInput");
    }
  }
};
</script>

<style scoped>
</style>
