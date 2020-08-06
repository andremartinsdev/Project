<template>
  <b-container fluid class="consultaAnamnese">
    <div>
      <b-card-group deck>
        <b-card header="Sintomas" header-tag="header">
          <div class="check">
            <b-form-group>
              <b-form-checkbox-group
                v-model="anamnese"
                :options="sintomas"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
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
                
              ></b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </div>
    <button @click="teste">ok</button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      anamnese: [],
      sintomas: [
        { text: "Prurido", value: "prurido" },
        { text: "Fotofobia", value: "fotofobia" },
        { text: "Hiperemia", value: "hiperemia" },
        { text: "Pterígio", value: "pterigio" },
        { text: "Epífera", value: "epifera" },
        { text: "Trauma", value: "trauma" },
        { text: "Vermelhidão", value: "vermelhidao" },
        { text: "Ardência", value: "ardencia" },
        { text: "Dor Ocular", value: "dorOcular" },
        { text: "Lacrimejamento", value: "lacrimejamento" },
        { text: "Força a Visão", value: "forcaVisao" },
        { text: "Cansaço Visual", value: "cansacoVisual" },
        { text: "Sensibilidade a Luz", value: "sensibilidadeLuz" },
      ],
      doencaOcular: [
        { text: "Glaucoma", value: "glaucoma" },
        { text: "Catarata", value: "catarata" },
        { text: "Pterígioa", value: "pterigio" },
        { text: "Ceratocone", value: "ceratocone" },
        { text: "Estrabismo", value: "estrabismo" },
        { text: "Conjuntivite", value: "conjuntivite" },
      ],
      doencaSistematica: [
        { text: "Asma", value: "asma" },
        { text: "Colesterol", value: "colesterol" },
        { text: "Diabetes", value: "diabetes" },
        { text: "Hipertensão", value: "hipertensão" },
        { text: "Renite", value: "renite" },
        { text: "Sinusite", value: "sinusite" },
        { text: "Alergias", value: "alergias" },
        { text: "Reumatismo", value: "reumatismo" },
      ],
      medicamentos: [
        { text: "Losartana", value: "losartana" },
        { text: "Captopril", value: "captopril" },
        { text: "Atenolol", value: "atenolol" },
        { text: "Nifidipino", value: "nifidipino" },
        { text: "Propanolol", value: "propanolol" },
        { text: "Hidrocloratiazida", value: "hidrocloratiazida" },
        { text: "Metiformina", value: "metiformina" },
        { text: "Glibencamida", value: "glibencamida" },
        { text: "AAS", value: "aas" },
        { text: "Sinvastantina", value: "sinvastantina" },
        { text: "Polaramine", value: "polaramine" },
        { text: "Omeprazol", value: "omeprazol" },
      ],
      options: [
        { text: "Usa Óculos ", value: "usaOculos " },
        { text: "Dificuldade Longe ", value: "dificuldadeLonge " },
        { text: "Dificuldade Perto", value: "dificuldadePerto" },
        { text: "Cefaléia - Dor de cabeça", value: "cefaleia" },
      ],
      antecedentesFamiliar: [
        { text: "Diabetes", value: "diabetes" },
        { text: "Estrabismo", value: "estrabismo" },
        { text: "Glaucoma", value: "glaucoma" },
        { text: "Pressão Alta", value: "pressaoAlta" },
        { text: "Catarata", value: "catarata" },
      ],
    };
  },
  methods: {
    teste() {
      console.log(this.anamnese);
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