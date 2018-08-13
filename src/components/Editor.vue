<template>
  <div>
    <div
      style="height: 400px; width: 100%"
      id="editor">
    </div>
    <button-group
      :running="running"
      :if-input="ifInput"
      @returnDefaultCode="returnDefaultCode"
      @runCode="runCode"
      @toggleInput="toggleInput"/>
    <el-row style="text-align: left">
      <el-card
        header="Input:"
        v-show="showInput">
        <div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="Input data here"
            v-model="input"/>
        </div>
      </el-card>
      <el-card header="Output:">
        <div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="Output data here"
            v-model="output"/>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
// import ace from "brace";
import buttonGroup from "@/components/Buttongroup";
import request from "@/request";
export default {
  name: "Editor",
  components: {
    buttonGroup
  },
  props: {
    value: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    },
    defaultCode: {
      type: String,
      required: true
    },
    ifInput: {
      type: Boolean,
      default: false
    },
    codeApi: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editor: null,
      contentBackup: "",
      input: "",
      output: "",
      running: false,
      showInput: false
    };
  },
  watch: {
    value: function(val) {
      if (this.contentBackup !== val) {
        this.editor.setValue(val, 1);
      }
    }
  },
  mounted: function() {
    const vm = this;

    // require("brace/ext/emmet");

    const editor = (vm.editor = window.ace.edit("editor"));

    // require("brace/ext/language_tools"); // language extension prerequsite...
    // require("brace/theme/monokai");
    this.$emit("init", editor);

    editor.$blockScrolling = Infinity;
    editor.setOption("enableEmmet", true);
    editor.getSession().setMode("ace/mode/" + this.lang);
    editor.setTheme("ace/theme/monokai");
    editor.setValue(this.defaultCode, 1);
    this.contentBackup = this.value;

    editor.on("change", function() {
      let content = editor.getValue();
      vm.$emit("input", content);
      vm.contentBackup = content;
    });
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });
  },
  methods: {
    returnDefaultCode() {
      this.editor.setValue(this.defaultCode, 1);
    },
    runCode() {
      this.running = true;
      const data = {
        code: this.editor.getValue(),
        input: this.input
      };
      request({
        url: this.codeApi,
        method: "post",
        data
      })
        .then(res => {
          this.output = res.data.data;
          this.running = false;
        })
        .catch(e => {
          console.log(e);
          this.output = "Network error";
          this.running = false;
        });
    },
    toggleInput() {
      this.showInput = !this.showInput;
    }
  },
  beforeDestroy: function() {
    this.editor.destroy();
    this.editor.container.remove();
    this.editor = null;
  }
};
</script>

<style scoped>
</style>
