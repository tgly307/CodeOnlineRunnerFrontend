<template>
  <editor v-model="code"
          :lang="lang"
          :defaultCode="defaultCode"
          :ifInput="ifInput"
          :codeAPI="codeAPI"
          @init="editorInit">
  </editor>
</template>

<script>
export default {
  name: "python",
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
