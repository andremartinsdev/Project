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
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.cilios"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.cilios"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Sobrancelhas</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.sombrancelha"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.sombrancelha"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Pálpebras</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.palpebra"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.palpebra"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Conjuntiva</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.conjuntiva"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.conjuntiva"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Esclerótica</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.esclerotica"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.esclerotica"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Córnea</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.cornea"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.cornea"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Íris</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.iris"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.iris"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Pupila</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.pupila"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.pupila"></b-input>
            </b-input-group>
          </td>
        </tr>


        <tr>
          <td>Cristalino</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.cristalina"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.cristalina"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Câmara Anterior</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoDireito.camaraAnterior"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="biomicro[0].olhoEsquerdo.camaraAnterior"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Obs</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm" v-model="biomicro[0].olhoDireito.obs"></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              
              <b-textarea  size="sm" v-model="biomicro[0].olhoEsquerdo.obs"></b-textarea>
            </b-input-group>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biomicro: [
        {
          olhoDireito: {
            cilios: 'cilios direito',
            sombrancelha: 'sombrancelha direita',
            palpebra: 'palpebra direita',
            conjuntiva: 'conjuntiva direita',
            esclerotica: 'esclerotica direita',
            cornea: 'cornea direita',
            iris: 'iris direita',
            pupila: 'pupila direita',
            cristalina: 'critalina direita',
            camaraAnterior: 'camara direita',
            obs: 'obs direito'
          },
          olhoEsquerdo: {
            cilios: 'cilios esquerdo',
            sombrancelha: 'sombrancelha esquerdo',
            palpebra: 'palpebra esquerdo',
            conjuntiva: 'conjuntiva esquerdo',
            esclerotica: 'esclerotica esquerdo',
            cornea: 'cornea esquerdo',
            iris: 'iris esquerdo',
            pupila: 'pupila esquerdo',
            cristalina: 'critalina esquerdo',
            camaraAnterior: 'camara esquerdo',
            obs: 'obs esquerdo'
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>