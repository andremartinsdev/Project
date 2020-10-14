<template>
  <div class="containerPrescri">
    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
        v-model="prescricaoOculos.OD_ESFERICO"
      ></b-input>
      <b-input
        
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoOculos.OD_CILINDRICO"
        placeholder="CIL"
      ></b-input>
      <b-input-group size="sm" prepend="°" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          
          placeholder="EIXO"
          v-model="prescricaoOculos.OD_EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
        v-model="prescricaoOculos.OD_AV"
      ></b-input>
    </b-form>

    <b-form inline class="mt-4">
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
        v-model="prescricaoOculos.OE_ESFERICO"
      ></b-input>
      <b-input
        
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="CIL"
        v-model="prescricaoOculos.OE_CILINDRICO"
      ></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          
          v-model="prescricaoOculos.OE_EIXO"
          size="sm"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        
        v-model="prescricaoOculos.OE_AV"
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
      ></b-input>
    </b-form>
    <b-form inline class="mt-5">
      <label for="input-with-list" class="mr-3">ADIÇÃO :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ADIÇÃO"
        type="number"
        size="sm"
        v-model="prescricaoOculos.ADICAO"
      ></b-input>
    </b-form>

    <div class="mt-3 ml-2">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-4 mb-2">
      <label>Observação</label>
      <b-form-textarea
        class="mt-2"
        id="textarea-rows"
        placeholder="Favor medir DNP com pupilômetro.
Retorno com 01 Ano"
        rows="4"
        v-model="prescricaoOculos.OBSERVACAO"
      ></b-form-textarea>
    </div>
    <b-button class="mr-3" pill variant="primary" @click="save">Salvar</b-button>
    <b-button pill>Cancelar</b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prescricaoOculos: {
        OD_ESFERICO: "",
        OD_CILINDRICO: "",
        OD_EIXO: "",
        OD_AV: "",
        OE_ESFERICO: "",
        OE_CILINDRICO: "",
        OE_EIXO: "",
        OE_AV: "",
        ADICAO: "",
        OBSERVACAO: ""
      }
    };
  },
  methods: {
    save() {
      axios
        .post(
          "http://localhost:3000/PrescricaoOculos/Save",
          this.prescricaoOculos
        )
        .then(response => {
          console.log("certo", response);
        });
    }
  }
};
</script>

<style>
</style>