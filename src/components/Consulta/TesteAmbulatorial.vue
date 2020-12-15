<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="c_tes_amb_tem">Tempo</label>
        <b-input type="text" @change="enviarTesteAmbulatorial" v-model="testeAmbulatorial.TEMPO" size="sm" class="form-control" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="c_tes_amb_res">Resultado</label>
        <b-input type="text" @change="enviarTesteAmbulatorial" v-model="testeAmbulatorial.RESULTADO" size="sm" class="form-control" />
      </div>
    </div>
    
     <div class="mt-5">
  <b-button  variant="primary" class="mr-5">Salvar</b-button>
  <b-button  variant="primary">Limpar</b-button>
</div>
  </div>
</template>

<script>
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    testeProps: {
      type: Object
    }
  },
  watch:{
    testeProps(){
      if(Object.keys(this.testeProps).length != 0){
        this.testeAmbulatorial = this.testeProps
        this. enviarTesteAmbulatorial();
      }
    },

    Limpar(){
      this.testeAmbulatorial = {
        TEMPO:'',
        RESULTADO:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("TESTE_AMBULATORIAL", {})
    }
  },
  data(){
    return{
      testeAmbulatorial:{
        TEMPO:'',
        RESULTADO:''
      }
    }
  },

  methods:{
    enviarTesteAmbulatorial(){
      this.$store.commit("TESTE_AMBULATORIAL", this.testeAmbulatorial)
    }
  }
};
</script>

<style>
</style>