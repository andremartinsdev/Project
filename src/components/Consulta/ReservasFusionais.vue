<template>
  <div>
    <label for="input-with-list" class="mr-2">Técnica :</label>

    <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input
        
        @change="enviarReservasFusionais"
        v-model="reservasFusionais.TECNICA"
        size="sm"
      ></b-input>
    </b-input-group>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">VL</th>
          <th scope="col">VP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RFN</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                
                v-model="reservasFusionais.VL.RFN"
                size="sm"
                @change="enviarReservasFusionais"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                
                v-model="reservasFusionais.VP.RFN"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>RFP</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                
                v-model="reservasFusionais.VL.RFP"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                
                v-model="reservasFusionais.VP.RFP"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
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
  data() {
    return {
      reservasFusionais: {
        VL: {
          RFN: "",
          RFP: "",
        },
        VP: {
          RFN: "",
          RFP: "",
        },
        TECNICA: "",
      },
    };
  },

  methods: {
    enviarReservasFusionais(){
      this.$store.commit("RESERVAS_FUSIONAIS", this.reservasFusionais)
    }
  }
};
</script>

<style>
</style>