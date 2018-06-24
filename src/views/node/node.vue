<template>
  <div>
    <editor v-model="content" @init="editorInit" lang="javascript" :theme="theme" height="400" :options="options"></editor>
  </div>
</template>

<script>
import editor from 'vue2-ace-editor'
export default {
  name: 'node',
  components: {
    editor
  },
  data () {
    return {
      options: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      },
      theme: 'monokai',
      content: ''
    }
  },
  methods: {
    editorInit () {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/html')
      require('brace/mode/javascript') // language
      require('brace/mode/less')
      require('brace/theme/monokai')
      require('brace/snippets/javascript') // snippet
    }
  }
}
</script>

<style scoped>
  #editor {
    position: absolute;
    width: 500px;
    height: 400px;
  }
</style>
