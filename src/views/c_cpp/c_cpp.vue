<template>
  <editor v-model="code"
          :lang="lang"
          :defaultCode="defaultCode"
          :ifInput="ifInput"
          :codAPI="codAPI"
          @init="editorInit">
  </editor>
</template>

<script>
export default {
  name: 'c_cpp',
  data () {
    return {
      code: '',
      lang: 'c_cpp',
      defaultCode: 'cout<<1<<endl;',
      ifInput: true,
      codAPI: '/c_cpp'
    }
  },
  methods: {
    editorInit () {
      require('brace/mode/c_cpp') // language
      require('brace/snippets/c_cpp') // snippet
    }
  }
}
</script>

<style scoped>

</style>
