<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col">Estrutura</th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cílios</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.cilios"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.cilios"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Sobrancelhas</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.sombrancelha"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.sombrancelha"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Pálpebras</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.palpebra"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.palpebra"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Conjuntiva</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.conjuntiva"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.conjuntiva"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Esclerótica</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.esclerotica"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.esclerotica"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Córnea</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.cornea"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.cornea"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Íris</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.iris"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.iris"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Pupila</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.pupila"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.pupila"></b-input>
            </b-input-group>
          </td>
        </tr>


        <tr>
          <td>Cristalino</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.cristalina"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.cristalina"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Câmara Anterior</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.camaraAnterior"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.camaraAnterior"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Obs</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoDireito.obs"></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              
              <b-textarea  size="sm" @change="enviarBiomicro" v-model="biomicro[0].olhoEsquerdo.obs"></b-textarea>
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
    biomicroProps: {
      type: [Array, Object]
    }
  },

  watch:{
    biomicroProps(){
      if(Object.keys(this.biomicroProps).length != 0){
      this.biomicro = this.biomicroProps
      this.enviarBiomicro()
      }
      
    },
    Limpar(){
      this.$emit('alteraLimpar', false)
      this.biomicro = [
        {
          olhoDireito: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
          olhoEsquerdo: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
        },
      ]
    }
  },

  data() {
    return {
      biomicro: [
        {
          olhoDireito: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
          olhoEsquerdo: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
        },
      ],
    };
  },

  methods: {
    enviarBiomicro(){
      this.$store.commit("BIOMICRO", this.biomicro)
    }
  }
};
</script>

<style>
</style>