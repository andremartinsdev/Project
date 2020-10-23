<template>
  <div class="col-md-12">
    <label for="input-with-list" class="mr-2">Técnica : Flipper 40 cm</label>

    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input type="text" @change="enviarFlexDeAcomodacao" v-model="flexDeAcomodacao.OD" size="sm" class="form-control"></b-input>
          </td>
          <td>Ciclos</td>
          <td>
            <b-input type="text" @change="enviarFlexDeAcomodacao" v-model="flexDeAcomodacao.CICLOS_OD" size="sm" class="form-control"></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input type="text" @change="enviarFlexDeAcomodacao" v-model="flexDeAcomodacao.OE" size="sm" class="form-control"></b-input>
          </td>
          <td>Ciclos</td>
          <td>
            <b-input type="text" @change="enviarFlexDeAcomodacao" v-model="flexDeAcomodacao.CICLOS_OE" size="sm" class="form-control"></b-input>
          </td>
        </tr>
      </tbody>
    </table>
    
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
      flexDeAcomodacao:{
        OD:'',
        OE:'',
        CICLOS_OD: '',
        CICLOS_OE:''
      }
    }
  },

  methods:{
    enviarFlexDeAcomodacao(){
      this.$store.commit("FLEXIBILIDADE_ACOMODACAO", this.flexDeAcomodacao)
    }
  }
};
</script>

<style>
</style>