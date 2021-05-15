<template>
  <div id="app">
      
    <vue-editor v-model="content"></vue-editor>
   
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import modelo from '../editor_text/modelo'


export default {
  components: {
    VueEditor,
  },

  

  data() {
    return {
      modelo: modelo,
      htmlRender: "<h1> ola </h1>",
      content:""
     
    };
  },

  mounted(){
    this.content = this.htmlRender
  }
 
      


  
  
};
</script>
<style scoped>

</style>