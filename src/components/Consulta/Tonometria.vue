<template>
  <div>
    <label>Técnica: Transpalpebral</label>

    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
        size="sm"
        v-model="tonometria.OD"
        @change="enviarTonometria"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        
        v-model="tonometria.OE"
        @change="enviarTonometria"
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
      ></b-input>
      <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">Hora :</label>
        <b-input
          size="sm"
          @change="enviarTonometria"
          v-model="tonometria.HORA"
        ></b-input>
      </b-input-group>
    </b-form>
    
     
  </div>
</template>

<script>
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    tonometriaProps: {
      type: Object
    }
  },

  watch:{
    Limpar(){
      this.tonometria = {
        OD: "",
        OE: "",
        HORA: "",
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("TONOMETRIA", this.tonometria);
    },

    tonometriaProps(){
      if(Object.keys(this.tonometriaProps).length === 0){
      this.tonometria = {
        OD: "",
        OE: "",
        HORA: "",
      }
      }else{
        this.tonometria = this.tonometriaProps
        this.enviarTonometria();
      }
    }
  },
  data() {
    return {
      tonometria: {
        OD: "",
        OE: "",
        HORA: "",
      },
    };
  },

  methods: {
    enviarTonometria() {
      this.$store.commit("TONOMETRIA", this.tonometria);
    },
  },
};
</script>

<style>
</style>