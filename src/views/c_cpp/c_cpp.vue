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
      require("../../../public/lang/mode-c_cpp");
      require("../../../public/lang/snippets/c_cpp");
    }
  }
};
</script>

<style scoped>
</style>
