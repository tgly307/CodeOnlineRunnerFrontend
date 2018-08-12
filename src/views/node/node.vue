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
      require("brace/mode/javascript"); // language
      require("brace/snippets/javascript"); // snippet
    }
  }
};
</script>

<style scoped>
</style>
