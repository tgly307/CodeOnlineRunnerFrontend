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
  name: "CCpp",
  data() {
    return {
      code: "",
      lang: "c_cpp",
      defaultCode: "cout<<1<<endl;",
      ifInput: true,
      codeAPI: "/c_cpp"
    };
  },
  methods: {
    editorInit() {
      require("brace/mode/c_cpp"); // language
      require("brace/snippets/c_cpp"); // snippet
    }
  }
};
</script>

<style scoped>
</style>
