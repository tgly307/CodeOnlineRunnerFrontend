<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="12">
      <editor v-model="content" @init="editorInit" :lang="language" :theme="theme" height="400" :options="options"></editor>
      <el-button-group>
        <el-button>default</el-button>
        <el-button>run</el-button>
        <el-button>input</el-button>
        <el-button>copy code</el-button>
      </el-button-group>
      <el-button @click="javascript">nodejs</el-button>
      <el-button @click="python">python</el-button>
      <el-button @click="cpp">c++</el-button>
    </el-col>
  </el-row>
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
      language: 'javascript',
      content: ''
    }
  },
  methods: {
    editorInit () {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/less')
      require('brace/theme/monokai')
      if (this.language === 'javascript') {
        this.javascript()
      }
      if (this.language === 'python') {
        this.python()
      }
    },
    javascript () {
      this.language = 'javascript'
      this.content = 'console.log("1")'
      require('brace/mode/html')
      require('brace/mode/javascript') // language
      require('brace/snippets/javascript') // snippet
    },
    python () {
      this.language = 'python'
      this.content = 'print("1")'
      require('brace/mode/python') // language
      require('brace/snippets/python') // snippet
    },
    cpp () {
      this.language = 'c_cpp'
      this.content = 'cout<<"abc"<<endl;'
      require('brace/mode/c_cpp') // language
      require('brace/snippets/c_cpp') // snippet
    }
  }
}
</script>

<style scoped>

</style>
