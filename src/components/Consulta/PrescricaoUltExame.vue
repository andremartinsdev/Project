<template>
  <div class="prescriUltimoExame">
    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame[0].olhoDireito.esferico"
      ></b-input>
        
      <b-input id="inline-form-input-name" size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="CILÍNDRICO" v-model="prescricaoUltExame[0].olhoDireito.cilindrico"></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-username" size="sm" placeholder="EIXO" v-model="prescricaoUltExame[0].olhoDireito.eixo"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="ADIÇÃO" v-model="prescricaoUltExame[0].olhoDireito.adicao"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="DNP" v-model="prescricaoUltExame[0].olhoDireito.dnp"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="ALT" v-model="prescricaoUltExame[0].olhoDireito.alt"></b-input>
      </b-input-group>
    </b-form>

       <b-form inline class="mt-3">
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame[0].olhoEsquerdo.esferico"
      ></b-input>
      <b-input id="inline-form-input-name" size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="CILÍNDRICO" v-model="prescricaoUltExame[0].olhoEsquerdo.cilindrico"></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-username" size="sm" placeholder="EIXO" v-model="prescricaoUltExame[0].olhoEsquerdo.eixo"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="ADIÇÃO" v-model="prescricaoUltExame[0].olhoEsquerdo.adicao"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="DNP" v-model="prescricaoUltExame[0].olhoEsquerdo.dnp"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" id="inline-form-input-username" placeholder="ALT" v-model="prescricaoUltExame[0].olhoEsquerdo.alt"></b-input>
      </b-input-group>
    </b-form>

    

    <div class="mt-3 ">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

   
  </div>
</template>

<script>
export default {
  data(){
    return{
      prescricaoUltExame: [
      {
         olhoDireito: {
            esferico: 1,
            cilindrico: 1,
            eixo: 1,
            adicao: 1,
            dnp: 1,
            alt: 1
        },
        olhoEsquerdo: {
            esferico: 'esferico Olho esquerdo',
            cilindrico: 'cilindrico olho esquerdo',
            eixo: 'eixo olho esquerdo',
            adicao: 'adição olho esquerdo',
            dnp: 'DNP olho esquerdo',
            alt: 'ALT olho esquerdo'
        }
      }
       
      ]
    }
  }
};
</script>

<style>
.prescriUltimoExame{
    margin: 50px;
}
</style>