<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr>
              <td>OD</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.OD" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.AV_OD" size="sm" class="form-control" /></td>
            </tr>
            <tr>
              <td>OE</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.OE" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.AV_OE" size="sm" class="form-control" /></td>
            </tr>
          </tbody>
        </table>
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
    subjetivoProps: {
      type: Object
    }
  },

  watch:{
    subjetivoProps(){
      if(Object.keys(this.subjetivoProps).length != 0){
        this.subjetivo = this.subjetivoProps
        this.enviarSubjetivo();
      }
    },
    Limpar(){
      this.subjetivo = {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("SUBJETIVO", {})
    }
  },
  data(){
    return{
      subjetivo: {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },
  methods:{
    enviarSubjetivo(){
      this.$store.commit("SUBJETIVO", this.subjetivo)
    }
  }
};
</script>

<style>
</style>