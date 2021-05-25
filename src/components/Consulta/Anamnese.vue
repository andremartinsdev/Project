<template>
  <b-container fluid class="consultaAnamnese">
    <div>
      <b-card-group deck>
            <b-toast
          id="example-toast"
          variant="light"
          title="Sintomas"
          static
          visible
          no-auto-hide
          v-if="this.impressao === true"
          class="ml-4"
        >
        <b-form-group>
          
              <b-form-checkbox-group
                v-model="anamnese"
                id="checkbox"
                :options="sintomas"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                @input="enviarAnamnese"
              ></b-form-checkbox-group>
            </b-form-group>
        </b-toast>
        <b-card header="Sintomas" header-tag="header" v-else>
          <div class="check">
            <b-input
                  type="text"
                  
                  hidden
                />
            <b-form-group>
          
              <b-form-checkbox-group
                v-model="anamnese"
                id="checkbox"
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

        <b-toast
          id="example-toast"
         variant="light"
          title="Doença Ocular"
          static
          visible
          no-auto-hide
          v-if="this.impressao === true"
          class="ml-4"

        >
        
          
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
        </b-toast>

        <b-card header="Doença Ocular" header-tag="header" v-else>
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


         <b-toast
          id="example-toast"
       variant="light"
          title="Doença Sistemica"
          static
          visible
          no-auto-hide
          v-if="this.impressao === true"
          class="ml-4"

        >
        
          
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
        </b-toast>

        <b-card header="Doença Sistemica" header-tag="header" v-else>
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

 <b-toast
          id="example-toast"
          variant="light"
          title="Medicamento"
          static
          visible
          no-auto-hide
          class="ml-4"
          v-if="this.impressao === true"
        >
        
          
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
        </b-toast>

        

        <b-card header="Medicamento" header-tag="header" v-else>
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

    <b-toast
          id="example-toast"
          variant="light"
          static
          visible
          no-auto-hide
          v-if="this.impressao === true"
          class="ml-4"

        >
        
          
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
        </b-toast>

        
    <div class="mt-3" v-else>
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

    <b-toast
          id="example-toast"
          variant="light"
          title="Antecedentes Familiares"
          static
          visible
          no-auto-hide
          v-if="this.impressao === true"
          class="ml-4"

        >
        
          
               <b-form-group>
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
        </b-toast>
    <div class="mt-3 mb-2" v-else>
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
    <div class="mt-2 p-4" style="display: flex; justify-content: flex-end">
      <b-button
        size="sm"
        class="mr-3"
        variant="primary"
        @click="createPDF(false)"
      >
        Imprimir <b-icon-printer-fill class="ml-3"></b-icon-printer-fill
      ></b-button>
      <b-link href="#foo" @click="createPDF(true)"
        >Download PDF <b-icon-download></b-icon-download>
      </b-link>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
// import { DateTime } from "luxon";
import jsPDF from "jspdf";
import logoOlho from '../../assets/LogoOlho.png'
import moldura from "../../assets/moldura.png";

export default {
  props: {
    propsAnamnese2: {
      type: Object,
    },
    impressao: {
      type: Boolean,
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
      moldura: moldura,
      logoOlho: logoOlho,
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

     convertNomeColuna(coluna) {
      if (coluna === "OD_ESFERICO") return "Olho Direito Esferico";
      if (coluna === "OD_CILINDRICO") return "Olho Direito Cilindrico";
    },
    

       createPDF(download) {
      let pdfName = "Anamnese ";
      var doc = new jsPDF();
      var linha = 90;

     doc.text("Anamnese", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      //ANAMNESE
      var a = 1
      if (a  > 0) {
        
        delete this.propsAnamnese2.DATA;
        delete this.propsAnamnese2.IDPACIENTE;
        delete this.propsAnamnese2.IDCONSULTA;
        doc.text("Sintomas", 25, linha, null, null);
        doc.text("Doença Ocular", 70, linha, null, null);
        doc.text("Doença Sistemica", 115, linha, null, null);
        doc.text("Medicamento", 160, linha, null, null);
        doc.text("Observação", 25, 130, null, null);
        doc.text("Antecedentes Familiares", 70, 130, null, null);
        this.sintomas.map((item) => { 
           if(this.propsAnamnese2[item.value]){
          linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 25, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [10, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });
        linha = 55
        this.doencaOcular.map((item) => { 
          
           if(this.propsAnamnese2[item.value]){
             linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 70, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [58, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });


        linha = 55
        this.doencaSistematica.map((item) => { 
         
           if(this.propsAnamnese2[item.value]){
              linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 115, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [105, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });

        linha = 55
        this.medicamentos.map((item) => { 
         
           if(this.propsAnamnese2[item.value]){
              linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 160, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [150, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });
        linha = 160
        this.options.map((item) => { 
         
           if(this.propsAnamnese2[item.value]){
              linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 25, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [10, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });

        linha = 160
        this.antecedentesFamiliar.map((item) => { 
         
           if(this.propsAnamnese2[item.value]){
              linha += 8;
          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(item.text, 70, linha, null, null);
         
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [60, linha - 5, 7, 7];
          doc.addField(checkBox);
          }
        });


      }
       doc.setFont("times", "italic");
      doc.text("Rua Geraldo Rodrigues Cunha, 162, Centro, Viçosa-MG", 80, 240);

      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
       window.open(doc.output("bloburl"));
    },

    
    enviarAnamnese() {
      var anamneseSelected = {};
      this.anamnese.map((resul) => {
        anamneseSelected[resul] = true;
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