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
              <b-input  size="sm" v-model="oftalmoscopia[0].olhoDireito.papila"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.papila"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Escavação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoDireito.escavacao"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm" v-model="oftalmoscopia[0].olhoEsquerdo.escavacao"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>

          <td>Mácula</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoDireito.macula"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.macula"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
            
          <td>Fixação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoDireito.fixacao"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.fixacao"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Cor</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoDireito.cor"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.cor"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Relação A/V</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoDireito.relacaoAv"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.relacaoAv"></b-input>
            </b-input-group>
          </td>
        </tr>

         <tr>
          <td>Obs</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm"  v-model="oftalmoscopia[0].olhoDireito.obs"></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea  size="sm"  v-model="oftalmoscopia[0].olhoEsquerdo.obs"></b-textarea>
            </b-input-group>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
data(){
  return{
    oftalmoscopia: [
      {
        olhoDireito: {
          papila: 'papila direita',
          escavacao: 'escavação direita',
          macula: 'macula direita',
          fixacao: 'fixação direita',
          cor: 'cor direita',
          relacaoAv: 'relação av direita',
          obs: 'obs direita'
        },
        olhoEsquerdo: {
          papila: 'papila esquerdo',
          escavacao: 'escavação esquerdo',
          macula: 'macula esquerdo',
          fixacao: 'fixação esquerdo',
          cor: 'cor esquerdo',
          relacaoAv: 'relação av esquerdo',
          obs: 'obs esquerdo'
        }
      }
    ]
  }
}
}
</script>

<style>

</style>