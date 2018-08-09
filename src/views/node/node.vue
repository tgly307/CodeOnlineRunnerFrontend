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
  name: 'javascript',
  data () {
    return {
      code: '',
      lang: 'javascript',
      defaultCode: 'console.log("1");',
      ifInput: false,
      codeAPI: '/node'
    }
  },
  methods: {
    editorInit () {
      require('brace/mode/javascript') // language
      require('brace/snippets/javascript') // snippet
    }
  }
}
</script>

<style scoped>

</style>
