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
  </div>
</template>

<script>
export default {
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