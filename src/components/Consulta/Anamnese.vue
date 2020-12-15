<template>
  <b-container fluid class="consultaAnamnese">
    <div>
      <b-card-group deck>
        <b-card header="Sintomas" header-tag="header">
          <div class="check">
            <b-input
                  type="text"
                  
                  hidden
                />
            <b-form-group>
              <b-form-checkbox-group
                v-model="anamnese"
                :options="sintomas"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                @input="enviarAnamnese"
              ></b-form-checkbox-group>
            </b-form-group>
          </div>
        </b-card>

        <b-card header="Doença Ocular" header-tag="header">
          <div class="check">
            <b-form-group>
              <b-form-checkbox-group
                v-model="anamnese"
                :options="doencaOcular"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                @input="enviarAnamnese"
              ></b-form-checkbox-group>
            </b-form-group>
          </div>
        </b-card>

        <b-card header="Doença Sistema" header-tag="header">
          <div class="check">
            <b-form-group>
              <b-form-checkbox-group
                v-model="anamnese"
                :options="doencaSistematica"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                @input="enviarAnamnese"
              ></b-form-checkbox-group>
            </b-form-group>
          </div>
        </b-card>

        <b-card header="Medicamento" header-tag="header">
          <div class="check">
            <b-form-group>
              <b-form-checkbox-group
                v-model="anamnese"
                :options="medicamentos"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                @input="enviarAnamnese"
              ></b-form-checkbox-group>
            </b-form-group>
          </div>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card>
        <b-form-group>
          <b-form-checkbox-group
            v-model="anamnese"
            :options="options"
            class="mt-3"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            @input="enviarAnamnese"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </div>
    <div class="mt-3 mb-2">
      <b-card>
        <b-form-group label="Antecedentes Familiares">
          <b-form-checkbox-group
            v-model="anamnese"
            :options="antecedentesFamiliar"
            class="mt-3"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            @input="enviarAnamnese"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </div>
    <div class="p-3">
      <b-button variant="primary"  class="mr-5">Salvar</b-button>
      <b-button variant="primary" @click="LimparAnamnese">Limpar</b-button>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import { DateTime } from "luxon";

export default {
  props: {
    propsAnamnese2: {
      type: Object,
    },
    Visualizar: {
      type: Boolean,
    },
    LimparAnamnese: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState({
      pacienteSelected: (state) => state.pacienteSelected,
      anamneseState: (state) => state.anamnese,
      dadosClinica: (state) => state.dadosClinica,
      idConsulta: (state) => state.idConsulta,
    }),
  },
  data() {
    return {
      visualizar: this.Visualizar,
      anamnese: [],
      sintomas: [
        { text: "Prurido", value: "PRURIDO" },
        { text: "Fotofobia", value: "FOTOFOBIA" },
        { text: "Hiperemia", value: "HIPEREMIA" },
        { text: "Pterígio", value: "PTERIGIO" },
        { text: "Epífera", value: "EPIFERA" },
        { text: "Trauma", value: "TRAUMA" },
        { text: "Vermelhidão", value: "VERMELHIDAO" },
        { text: "Ardência", value: "ARDENCIA" },
        { text: "Dor Ocular", value: "DOROCULAR" },
        { text: "Lacrimejamento", value: "LACRIMEJAMENTO" },
        { text: "Força a Visão", value: "FORCAVISAO" },
        { text: "Cansaço Visual", value: "CANSACOVISUAL" },
        { text: "Sensibilidade a Luz", value: "SENSIBILIDADELUZ" },
      ],
      doencaOcular: [
        { text: "Glaucoma", value: "GLAUCOMA" },
        { text: "Catarata", value: "CATARATA" },
        { text: "Pterígio", value: "PTEREGIO_OD" },
        { text: "Ceratocone", value: "CERATOCONE" },
        { text: "Estrabismo", value: "ESTRABISMO" },
        { text: "Conjuntivite", value: "CONJUNTIVITE" },
      ],
      doencaSistematica: [
        { text: "Asma", value: "ASMA" },
        { text: "Colesterol", value: "COLESTEROL" },
        { text: "Diabetes", value: "DIABETES" },
        { text: "Hipertensão", value: "HIPERTENSAO" },
        { text: "Renite", value: "RENITE" },
        { text: "Sinusite", value: "SINUSITE" },
        { text: "Alergias", value: "ALERGIAS" },
        { text: "Reumatismo", value: "REUMATISMO" },
      ],
      medicamentos: [
        { text: "Losartana", value: "LOSARTANA" },
        { text: "Captopril", value: "CAPTOPRIL" },
        { text: "Atenolol", value: "ATENOLOL" },
        { text: "Nifidipino", value: "NIFIDIPINO" },
        { text: "Propanolol", value: "PROPANOLOL" },
        { text: "Hidrocloratiazida", value: "HIDROCLORATIAZIDA" },
        { text: "Metiformina", value: "METIFORMINA" },
        { text: "Glibencamida", value: "GLIBENCAMIDA" },
        { text: "AAS", value: "AAS" },
        { text: "Sinvastantina", value: "SINVASTANTINA" },
        { text: "Polaramine", value: "POLARAMINE" },
        { text: "Omeprazol", value: "OMEPRAZOL" },
      ],
      options: [
        { text: "Usa Óculos ", value: "USAOCULOS" },
        { text: "Dificuldade Longe ", value: "DIFICULDADELONGE" },
        { text: "Dificuldade Perto", value: "DIFICULDADEPERTO" },
        { text: "Cefaléia - Dor de cabeça", value: "CEFALEIA" },
      ],
      antecedentesFamiliar: [
        { text: "Diabetes", value: "DIABETES_AF" },
        { text: "Estrabismo", value: "ESTRABISMO_AF" },
        { text: "Glaucoma", value: "GLAUCOMA_AF" },
        { text: "Pressão Alta", value: "PRESSAOALTA_AF" },
        { text: "Catarata", value: "CATARATA_AF" },
      ],
    };
  },
  watch: {
    propsAnamnese2(){
    
      this.anamnese = Object.keys(this.propsAnamnese2)
      this.enviarAnamnese();
      console.log(this.propsAnamnese2)
    },
    Visualizar() {
      this.carregarAnamnese();
      this.visualizar = false;
    },
    LimparAnamnese() {
      this.anamnese = [];
      this.$emit('alteraLimpar', false)
      this.$store.commit("ANAMNESE", {});
    },
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

    carregarAnamnese() {
      this.anamnese = this.propsAnamnese2;
    },

    
    enviarAnamnese() {
      var anamneseSelected = {};
      this.anamnese.map((resul) => {
        anamneseSelected[resul] = true;
        anamneseSelected.DATA = `${DateTime.local().c.year}-${DateTime.local().c.month}-${DateTime.local().c.day}`;
        anamneseSelected.IDPACIENTE = this.$store.state.pacienteSelected;
        anamneseSelected.IDCONSULTA = this.$store.state.idConsulta;
      });

      this.$store.commit("ANAMNESE", anamneseSelected);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

.consultaAnamnese {
  margin-top: 20px;
  font-family: "Monda", sans-serif;
}

.fichaClinica {
  display: flex;
  flex-direction: row;
}

.check {
  display: flex;
  flex-wrap: wrap;
}
</style>