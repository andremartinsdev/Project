<template>
  <div>
      <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Papila</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.papila"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.papila"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Escavação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.escavacao"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.escavacao"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>

          <td>Mácula</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.macula"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.macula"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
            
          <td>Fixação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia"  v-model="oftalmoscopia[0].olhoDireito.fixacao"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.fixacao"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Cor</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.cor"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.cor"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Relação A/V</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.relacaoAv"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.relacaoAv"></b-input>
            </b-input-group>
          </td>
        </tr>

         <tr>
          <td>Obs</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoDireito.obs"></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm" @change="enviarOftalmoscopia" v-model="oftalmoscopia[0].olhoEsquerdo.obs"></b-textarea>
            </b-input-group>
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
  props:{
    Limpar:{
      type: Boolean
    },
    oftalmoProps: {
      type: [Array, Object]
    }
  },
watch:{
  Limpar(){
    this.oftalmoscopia = [
      {
        olhoDireito: {
          papila: '',
          escavacao: '',
          macula: '',
          fixacao: '',
          cor: '',
          relacaoAv: '',
          obs: ''
        },
        olhoEsquerdo: {
          papila: '',
          escavacao: '',
          macula: '',
          fixacao: '',
          cor: '',
          relacaoAv: '',
          obs: ''
        }
      }
    ]
    this.$emit('alteraLimpar', false)
    this.$store.commit("OFTALMOSCOPIA", {})
  },

  oftalmoProps(){
    if(Object.keys(this.oftalmoProps).length != 0){
    this.oftalmoscopia = this.oftalmoProps;
    this.enviarOftalmoscopia();
    }
  }

},

data(){
  return{
    oftalmoscopia: [
      {
        olhoDireito: {
          papila: '',
          escavacao: '',
          macula: '',
          fixacao: '',
          cor: '',
          relacaoAv: '',
          obs: ''
        },
        olhoEsquerdo: {
          papila: '',
          escavacao: '',
          macula: '',
          fixacao: '',
          cor: '',
          relacaoAv: '',
          obs: ''
        }
      }
    ]
  }
},
methods: {
  enviarOftalmoscopia(){
    this.$store.commit("OFTALMOSCOPIA", this.oftalmoscopia)
  }
}
}
</script>

<style>

</style>