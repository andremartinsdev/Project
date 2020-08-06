<template>
  <div id="app">
      <div class="atestado" v-html="content"></div>
    <vue-editor v-model="content"></vue-editor>
    <label v-bind="paciente2">{{this.paciente2}}</label>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";


export default {
  components: {
    VueEditor,
  },

  

  data() {
    return {
   
      content:""
     
    };
  },
 
      


  
  
};
</script>
<style scoped>

</style>