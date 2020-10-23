<template>
  <div class="panel-body">
<div class="row">
<div class="col-md-12">
<table class="table">
<tbody><tr>
<td>OD</td>
<td><b-input type="text" v-model="afinamento.OD" size="sm" @change="enviarAfinamento" class="form-control"/></td>
<td>AV</td>
<td><b-input type="text" size="sm" v-model="afinamento.AVD" @change="enviarAfinamento" class="form-control"/></td>
</tr>
<tr>
<td>OE</td>
<td><b-input type="text" size="sm" v-model="afinamento.OE" @change="enviarAfinamento" class="form-control"/></td>
<td>AV</td>
<td><b-input type="text" size="sm" v-model="afinamento.AVE" @change="enviarAfinamento" class="form-control"/></td>
</tr>
</tbody></table>
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
data(){
  return{
    afinamento:{
      OD: "",
      AVD: "",
      OE: "",
      AVE: ""
    }
  }
},

methods:{
  enviarAfinamento(){
  this.$store.commit('AFINAMENTO', this.afinamento)
  },
}


}
</script>

<style>

</style>