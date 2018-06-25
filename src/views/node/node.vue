<template>
  <div>
    <editor v-model="code" @init="editorInit" lang="javascript" theme="monokai" height="400" :options="options"></editor>
    <button-group :running="running"
                  :defaultCode="defaultCode"
                  :ifInput="false"
                  @returnDefaultCode="returnDefaultCode"
                  @runCode="runCode"
                  @toggleInput="toggleInput">
    </button-group>
    <el-row style="text-align: left">
      <el-card header="Input:" v-show="showInput">
        <div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="Input data here"
            v-model="input">
          </el-input>
        </div>
      </el-card>
      <el-card header="Output:">
        <div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="Output data here"
            v-model="output">
          </el-input>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import editor from 'vue2-ace-editor'
import buttonGroup from '@/components/buttonGroup'
import request from '@/request'
export default {
  name: 'node',
  components: {
    buttonGroup,
    editor
  },
  data () {
    return {
      options: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      },
      code: 'console.log("1");',
      input: '',
      output: '',
      defaultCode: 'console.log("1");',
      running: false,
      showInput: false
    }
  },
  methods: {
    editorInit () {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/less')
      require('brace/theme/monokai')
      require('brace/mode/html')
      require('brace/mode/javascript') // language
      require('brace/snippets/javascript') // snippet
    },
    returnDefaultCode () {
      this.code = this.defaultCode
    },
    runCode () {
      this.running = true
      const data = {
        code: this.code
      }
      request({
        url: '/node',
        method: 'post',
        data
      }).then(res => {
        this.output = res.data.data
        this.running = false
      }).catch(e => {
        this.output = 'Network error'
        this.running = false
      })
    },
    toggleInput () {
      this.showInput = !this.showInput
    }
  }
}
</script>

<style scoped>

</style>
