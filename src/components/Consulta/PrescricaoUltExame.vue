<template>
  <div class="prescriUltimoExame">
    <h5 class="text-center mb-3">Olho Direito</h5>
    <b-form inline>
      <label for="input-with-list" class="mr-2">ESFÉRICO :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0 mt-2"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame.OD_ESFERICO"
        @change="enviarPrescricaoUltExame"
      ></b-input>
      <label for="input-with-list" class="mr-2">CILÍNDRICO :</label>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0 mt-2"
        placeholder="CILÍNDRICO"
        @change="enviarPrescricaoUltExame"
        v-model="prescricaoUltExame.OD_CILINDRICO"
      ></b-input>

      <label for="input-with-list" class="mr-2">EIXO :</label>

      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="EIXO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_EIXO"
        ></b-input>
      </b-input-group>

      <label for="input-with-list" class="mr-2">ADIÇÃO :</label>

      <b-input-group class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="ADIÇÃO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_ADICAO"
        ></b-input>
      </b-input-group>

      <label for="input-with-list" class="mr-2">DNP :</label>

      <b-input-group class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="DNP"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_DNP"
        ></b-input>
      </b-input-group>

      <label for="input-with-list" class="mr-2">ALT :</label>

      <b-input-group class="mb-4 mr-sm-2 mb-sm-0 mt-3">
        <b-input
          size="sm"
          placeholder="ALT"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_ALT"
        ></b-input>
      </b-input-group>
    </b-form>

    <hr />
    <h5 class="text-center mb-3">Olho Esquerdo</h5>
    <b-form inline class="mt-3">
      <label for="input-with-list" class="mr-2">ESFÉRICO :</label>

      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame.OE_ESFERICO"
        @change="enviarPrescricaoUltExame"
      ></b-input>
      <label for="input-with-list" class="mr-2">CILÍNDRICO :</label>

      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="CILÍNDRICO"
        @change="enviarPrescricaoUltExame"
        v-model="prescricaoUltExame.OE_CILINDRICO"
      ></b-input>
      <label for="input-with-list" class="mr-2">EIXO :</label>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          placeholder="EIXO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_EIXO"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">ADIÇÃO :</label>

        <b-input
          size="sm"
          placeholder="ADIÇÃO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_ADICAO"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">DNP :</label>

        <b-input
          size="sm"
          placeholder="DNP"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_DNP"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">ALT :</label>

        <b-input
          size="sm"
          placeholder="ALT"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_ALT"
          class="mt-3"
        ></b-input>
      </b-input-group>
    </b-form>

    <div class="mt-4">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-5">
      <b-button variant="primary" @click="save" class="mr-5">Salvar</b-button>
      <b-button variant="primary">Limpar</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Save from "../../services/saveGeneric";
import { DateTime } from "luxon";

export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    prescricaoUltExProps: {
      type: Object,
    },
  },
  data() {
    return {
      prescricaoUltExame: {
        IDPACIENTE: "",
        UUIDCLINICA: "",
        DATA: "",
        OD_ESFERICO: "",
        OD_CILINDRICO: "",
        OD_EIXO: "",
        OD_ADICAO: "",
        OD_DNP: "",
        OD_ALT: "",
        OE_ESFERICO: "",
        OE_CILINDRICO: "",
        OE_EIXO: "",
        OE_ADICAO: "",
        OE_DNP: "",
        OE_ALT: "",
        IDCONSULTA: "",
      },
    };
  },
  watch: {
    prescricaoUltExProps() {
      /*if (Object.keys(this.prescricaoUltExProps).length != 0) {
        this.prescricaoUltExame = this.prescricaoUltExProps;
        this.enviarPrescricaoUltExame();
      }else{
        this.enviarPrescricaoUltExame();
        this.prescricaoUltExame = this.prescricaoUltExProps;
      }*/
      this.prescricaoUltExame = this.prescricaoUltExProps;
      this.enviarPrescricaoUltExame();
    },
    Limpar() {
      console.log("eeeentroooo");
      this.prescricaoUltExame = {
        IDPACIENTE: "",
        UUIDCLINICA: "",
        DATA: "",
        OD_ESFERICO: "",
        OD_CILINDRICO: "",
        OD_EIXO: "",
        OD_ADICAO: "",
        OD_DNP: "",
        OD_ALT: "",
        OE_ESFERICO: "",
        OE_CILINDRICO: "",
        OE_EIXO: "",
        OE_ADICAO: "",
        OE_DNP: "",
        OE_ALT: "",
        IDCONSULTA: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("PRESCRICAO_ULTIMO_EXAME", this.prescricaoUltExame);
    },
    Visualizar() {
      this.visualizar = false;
    },
  },
  computed: {
    ...mapState({
      prescricaoUltExameState: (state) => state.prescricaoUltimoExame,
      idPacienteSelected: (state) => state.pacienteSelected,
      dadosClinica: (state) => state.dadosClinica,
      idConsulta: (state) => state.idConsulta,
    }),
  },
  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    enviarPrescricaoUltExame() {
      this.prescricaoUltExame.IDPACIENTE = this.idPacienteSelected;
      this.prescricaoUltExame.UUIDCLINICA = this.dadosClinica.UUIDCLINICA;
      this.prescricaoUltExame.IDCONSULTA = this.idConsulta;
      this.prescricaoUltExame.DATA = `${DateTime.local().c.year}-${
        DateTime.local().c.month
      }-${DateTime.local().c.day}`;
      this.$store.commit("PRESCRICAO_ULTIMO_EXAME", this.prescricaoUltExame);
    },

    save() {
      try {
        Save.save("Prescricao", this.prescricaoUltExameState).then((result) => {
          if (result.status === 200) {
            this.showAlert("success", "Prescrição Salva com Sucesso");
          } else {
            this.showAlert("error", "Erro ao Salvar Prescrição");
          }
        });
      } catch (error) {
        this.showAlert("error", "Erro ao Salvar Prescrição " + error);
      }
    },
  },
};
</script>

<style>
.prescriUltimoExame {
}
</style>