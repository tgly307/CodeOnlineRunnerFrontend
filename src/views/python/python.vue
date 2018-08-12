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
  name: "Python",
  data() {
    return {
      code: "",
      lang: "python",
      defaultCode: 'print("1")',
      ifInput: false,
      codeAPI: "/python"
    };
  },
  methods: {
    editorInit() {
      require("brace/mode/python"); // language
      require("brace/snippets/python"); // snippet
    }
  }
};
</script>

<style scoped>
</style>
