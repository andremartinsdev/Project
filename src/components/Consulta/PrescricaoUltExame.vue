<template>
  <div class="prescriUltimoExame">
    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame[0].olhoDireito.esferico"
        @change="enviarPrescricaoUltExame"
      ></b-input>
        
      <b-input  size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="CILÍNDRICO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoDireito.cilindrico"></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" placeholder="EIXO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoDireito.eixo"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" placeholder="ADIÇÃO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoDireito.adicao"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" placeholder="DNP" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoDireito.dnp"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm" placeholder="ALT" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoDireito.alt"></b-input>
      </b-input-group>
    </b-form>

       <b-form inline class="mt-3">
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame[0].olhoEsquerdo.esferico"
        @change="enviarPrescricaoUltExame"
      ></b-input>
      <b-input  size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="CILÍNDRICO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoEsquerdo.cilindrico"></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  size="sm" placeholder="EIXO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoEsquerdo.eixo"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm"  placeholder="ADIÇÃO" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoEsquerdo.adicao"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm"  placeholder="DNP" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoEsquerdo.dnp"></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input size="sm"  placeholder="ALT" @change="enviarPrescricaoUltExame" v-model="prescricaoUltExame[0].olhoEsquerdo.alt"></b-input>
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
            esferico: "",
            cilindrico: "",
            eixo: "",
            adicao: "",
            dnp: "",
            alt: ""
        },
        olhoEsquerdo: {
            esferico: "",
            cilindrico: "",
            eixo: "",
            adicao: "",
            dnp: "",
            alt: ""
        }
      }
       
      ]
    }
  },
  
  methods:{
    enviarPrescricaoUltExame(){
      this.$store.commit("PRESCRICAO_ULTIMO_EXAME", this.prescricaoUltExame)
    }
  }
};


</script>

<style>
.prescriUltimoExame{
    margin: 50px;
}
</style>