<template>
  <editor 
    v-model="code"
    :lang="lang"
    :default-code="defaultCode"
    :if-input="ifInput"
    :code-api="codeAPI"
    @init="editorInit"/>
</template>

<script>
export default {
  name: "Javascript",
  data() {
    return {
      code: "",
      lang: "javascript",
      defaultCode: 'console.log("1");',
      ifInput: false,
      codeAPI: "/node"
    };
  },
  methods: {
    editorInit() {
      require("../../../public/lang/mode-javascript");
      require("../../../public/lang/snippets/javascript");
    }
  }
};
</script>

<style scoped>
</style>
