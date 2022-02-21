<template>
  <b-card>
    <b-button @click="teste">gerar</b-button>

    <table class="table table-sm table-borderless" id="sintomas">
      <thead>
        <tr>
          <th scope="col">Sintomas</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sintoma in sintomas" :key="sintoma.value">
          <td>{{ sintoma.text }}</td>
          <td>
            <b-form-radio name="radio-size" size="sm">X</b-form-radio>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="doenca">
      <thead>
        <tr>
          <th scope="col">Doença Ocular</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doenca in doencaOcular" :key="doenca.value">
          <td>{{ doenca.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="doencaSis">
      <thead>
        <tr>
          <th scope="col">Doença Sistêmica</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doenca in doencaSistematica" :key="doenca.value">
          <td>{{ doenca.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="medicamento">
      <thead>
        <tr>
          <th scope="col">Medicamento</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medica in medicamentos" :key="medica.value">
          <td>{{ medica.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="info">
      <thead>
        <tr>
          <th scope="col">Outras Infromações</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in options" :key="info.value">
          <td>{{ info.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="anteceFami">
      <thead>
        <tr>
          <th scope="col">Antecedente Familiar</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ateF in antecedentesFamiliar" :key="ateF.value">
          <td>{{ ateF.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="prescriUlt">
      <thead>
        <tr>
          <th scope="col">prescrição Último Exame</th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="precri in prescricaoUltExame" :key="precri.text">
          <td>{{ precri.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="acuidadeSC">
      <thead>
        <tr>
          <th colspan="4" class="text-center">SC</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Visão Lon.</th>
          <th scope="col">Visão Per.</th>
          <th scope="col">PH</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <td>OD</td>
        </tr>
        <tr>
          <td>OE</td>
        </tr>
        <tr>
          <td>AO</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="acuidadeCC">
      <thead>
        <tr>
          <th colspan="4" class="text-center">CC</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Visão Lon.</th>
          <th scope="col">Visão Per.</th>
          <th scope="col">PH</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <td>OD</td>
        </tr>
        <tr>
          <td>OE</td>
        </tr>
        <tr>
          <td>AO</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="ceratometria">
      <thead>
        <tr>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
          <th scope="col">Miras</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="avMotora">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kappa</td>
        </tr>
        <tr>
          <td>Hirschberg</td>
        </tr>
        <tr>
          <td>Ducções</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="reflexPulpilar">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fotomotor</td>
        </tr>
        <tr>
          <td>Consensual</td>
        </tr>
        <tr>
          <td>Acomodativo</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="biomicro">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cílios</td>
        </tr>
        <tr>
          <td>Sobrancelhas</td>
        </tr>
        <tr>
          <td>Pálpebras</td>
        </tr>
        <tr>
          <td>Conjuntiva</td>
        </tr>
        <tr>
          <td>Esclerótica</td>
        </tr>
        <tr>
          <td>Córnea</td>
        </tr>
        <tr>
          <td>Íris</td>
        </tr>
        <tr>
          <td>Pupila</td>
        </tr>
        <tr>
          <td>Cristalino</td>
        </tr>
        <tr>
          <td>Câmara Anterior</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="oftalmo">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Papila</td>
        </tr>
        <tr>
          <td>Escavação</td>
        </tr>
        <tr>
          <td>Mácula</td>
        </tr>
        <tr>
          <td>Fixação</td>
        </tr>
        <tr>
          <td>Cor</td>
        </tr>
        <tr>
          <td>Relação A/V</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="ceratometria">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
          <th scope="col">Miras</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>

    <table class="table table-sm" id="retinoscopia">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>AV</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="forometria">
      <thead>
        <tr>
          <th></th>
          <th scope="col"></th>
          <th scope="col">Longe</th>
          <th scope="col">40 cm</th>
          <th scope="col">20 cm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SC</td>
        </tr>
        <tr>
          <td>CC</td>
        </tr>
      </tbody>
    </table>

    <table id="rx">
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">Esférico</th>
          <th class="text-center">Cilíndrico</th>
          <th class="text-center">Eixo</th>
          <th class="text-center">AV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <input
              type="number"
              step="0.25"
              class="form-control num form-control form-control-sm"
              id="__BVID__491"
            />
          </td>
          <td>
            <input
              type="number"
              max="0"
              step="0.25"
              class="form-control num form-control form-control-sm"
              id="__BVID__492"
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              max="360"
              step="5"
              class="form-control form-control form-control-sm"
              id="__BVID__493"
            />
          </td>
          <td>
            <input
              type="number"
              step="1"
              class="form-control num form-control form-control-sm"
              id="__BVID__494"
            />
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <input
              type="number"
              step="0.25"
              class="form-control num form-control form-control-sm"
              id="__BVID__495"
            />
          </td>
          <td>
            <input
              type="number"
              max="0"
              step="0.25"
              class="form-control num form-control form-control-sm"
              id="__BVID__496"
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              max="360"
              step="5"
              class="form-control form-control form-control-sm"
              id="__BVID__497"
            />
          </td>
          <td>
            <input
              type="number"
              step="1"
              class="form-control num form-control form-control-sm"
              id="__BVID__498"
            />
          </td>
        </tr>
        <tr>
          <td>Adição</td>
          <td colspan="2">
            <input
              type="text"
              class="form-control form-control form-control-sm"
              id="__BVID__499"
            />
          </td>
          <td>AV. Perto</td>
          <td>
            <input
              type="text"
              class="form-control form-control form-control-sm"
              id="__BVID__500"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </b-card>
</template>
	
	
	
	
	
	
	
	
	

Obs
<script>
import avMotora from "../../assets/av.png";
import biomicro from "../../assets/biomicro.png";
import oftalmo from "../../assets/oftalmo.png";
import jsPDF from "jspdf";
import "jspdf-autotable";
import serviceFichaClinica from "../../services/fichaClinica";
export default {
  async mounted() {
    await this.readConsulta();
    this.imprimir();
  },
  data() {
    return {
      jsonTotal: [{}],
      acuidade: [{}],
      adicao: [{}],
      afinamento: [{}],
      amplitude: [{}],
      anamnese: [{}],
      avMotara: [{}],
      biomicro2: [{}],
      cerametria: [{}],
      dx: [{}],
      flexDeAcomodacao: [{}],
      forometria: [{}],
      oftalmoscopia: [],
      ppc: [{}],
      prescricaoUltimoExame: [{}],
      reflexoPulpilar: [{}],
      reservasFusionais: [{}],
      retinoscopia: [{}],
      rxFinal: [{}],
      subjetivo: [{}],
      testeAmbulatorial: [{}],
      tonometria: [{}],
      oftalmo: oftalmo,
      avMotora: avMotora,
      biomicro: biomicro,
      antecedentesFamiliar: [
        { text: "Diabetes", value: "DIABETES_AF" },
        { text: "Estrabismo", value: "ESTRABISMO_AF" },
        { text: "Glaucoma", value: "GLAUCOMA_AF" },
        { text: "Pressão Alta", value: "PRESSAOALTA_AF" },
        { text: "Catarata", value: "CATARATA_AF" },
      ],
      options: [
        { text: "Usa Óculos ", value: "USAOCULOS" },
        { text: "Dificuldade Longe ", value: "DIFICULDADELONGE" },
        { text: "Dificuldade Perto", value: "DIFICULDADEPERTO" },
        { text: "Cefaléia - Dor de cabeça", value: "CEFALEIA" },
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
      doencaOcular: [
        { text: "Glaucoma", value: "GLAUCOMA" },
        { text: "Catarata", value: "CATARATA" },
        { text: "Pterígio", value: "PTEREGIO_OD" },
        { text: "Ceratocone", value: "CERATOCONE" },
        { text: "Estrabismo", value: "ESTRABISMO" },
        { text: "Trauma Ocular", value: "TRAUMA_OCULAR" },
        { text: "Corpo Estranho", value: "CORPO_ESTRANHO" },
        { text: "Queimaduras", value: "QUEIMADURAS" },
        { text: "Inflamações", value: "INFLAMACOES" },
        { text: "Cegueira", value: "CEGUEIRA" },
        { text: "Descolamento de Retina", value: "DESCOLAMENTO_RETINA" },
        { text: "Toxoplasmose", value: "TOXOPLASMOSE" },
        { text: "Extrabismo", value: "EXTRABISMO" },
        { text: "Alérgico", value: "ALERGICO" },
        { text: "Defeitos de Refração", value: "DEFEITOS_REFRACAO" },
      ],
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
        { text: "Visão Dupla", value: "VISAO_DUPLA" },
        { text: "Fotopsias - fosfeno", value: "FOTOPSIAS" },
        { text: "Miodesopsia", value: "MIODESOPSIA" },
        { text: "Enxaqueca", value: "EXAQUECA" },
        { text: "Astenopia", value: "ASTENOPIA" },
        { text: "Halos", value: "HALOS" },
      ],
      prescricaoUltExame: [
        { text: "Esférico" },
        { text: "Cilíndrico" },
        { text: "Eixo" },
        { text: "Adição" },
        { text: "DNP" },
        { text: "ALT" },
        { text: "Lente" },
      ],
    };
  },
  methods: {
    async readConsulta() {
      const { data } = await serviceFichaClinica.read(this.$route.params.uuid);
      this.jsonTotal = data;
      console.log(
        this.jsonTotal.ficha[0].json_fichaClinica,
        "aqui mofiiiiiiiii"
      );
    },

    imprimir() {
      console.log("doideraaaaaaaaaaaaaa jsPdf");
      const doc = new jsPDF();
      doc.autoTable({
        html: "#sintomas",
        margin: { horizontal: 5 },
        startY: 20,
        styles: { fontSize: 7 },
        tableWidth: 50,
        tableId: "salesTable",
      });
      doc.setFontSize(10).setTextColor(150).text("Anamnese", 99, 16);
      doc.rect(2, 10, 205, 140);

      doc.autoTable({
        html: "#doenca",
        margin: { horizontal: 60 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 50,
      });

      doc.autoTable({
        html: "#doencaSis",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#medicamento",
        margin: { horizontal: 160 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#anteceFami",
        margin: { horizontal: 160 },
        styles: { fontSize: 7 },
        startY: 110,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#info",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 90,
        tableWidth: 40,
      });
      doc.rect(2, 153, 85, 60);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Prescrição Ultimo Exame", 8, 158);

      doc.autoTable({
        html: "#prescriUlt",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 160,
        tableWidth: 78,
      });
      doc.setFontSize(10).setTextColor(150).text("Acuidade Visual", 138, 158);
      doc.rect(90, 153, 117, 48);
      doc.autoTable({
        html: "#acuidadeSC",
        margin: { horizontal: 150 },
        styles: { fontSize: 7 },
        startY: 163,
        tableWidth: 50,
      });

      doc.autoTable({
        html: "#acuidadeCC",
        margin: { horizontal: 95 },
        styles: { fontSize: 7 },
        startY: 163,
        tableWidth: 50,
      });

      doc.rect(2, 217, 85, 28);
      doc.setFontSize(10).setTextColor(150).text("Ceratometria", 30, 222);

      doc.autoTable({
        html: "#ceratometria",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 225,
        tableWidth: 80,
      });

      doc.rect(90, 205, 117, 74);
      doc.setFontSize(10).setTextColor(150).text("Avaliação Motora", 130, 210);

      doc.autoTable({
        html: "#avMotora",
        margin: { horizontal: 96 },
        styles: { fontSize: 7 },
        startY: 214,
        tableWidth: 105,
      });
      doc.addImage(this.avMotora, "JPEG", 100, 250, 33, 15);
      doc.addImage(this.avMotora, "JPEG", 167, 250, 33, 15);

      doc.rect(2, 247, 85, 44);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Reflexos Pulpilares", 30, 252);

      doc.autoTable({
        html: "#reflexPulpilar",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 255,
        tableWidth: 80,
      });
      doc.addPage("a4");

      doc.rect(2, 5, 105, 105);
      doc.setFontSize(10).setTextColor(150).text("Biomicroscopia", 30, 10);
      doc.setFontSize(8).setTextColor(150).text("Observação :", 7, 100);
      doc.addImage(this.biomicro, "JPEG", 43, 90, 53, 15);

      doc.autoTable({
        html: "#biomicro",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 13,
        tableWidth: 100,
      });

      doc.setFontSize(10).setTextColor(150).text("Oftalmoscopia", 140, 10);

      doc.setFontSize(10).setTextColor(150).text("Observação", 115, 70);

      doc.addImage(this.oftalmo, "JPEG", 155, 65, 33, 15);
      doc.rect(110, 5, 98, 80);
      doc.autoTable({
        html: "#oftalmo",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 13,
        tableWidth: 90,
      });

      doc.rect(2, 115, 105, 40);
      doc.setFontSize(10).setTextColor(150).text("Ceratometria", 45, 120);
      doc.autoTable({
        html: "#ceratometria",
        margin: { horizontal: 8 },
        styles: { fontSize: 7 },
        startY: 125,
        tableWidth: 90,
      });

      doc.rect(110, 88, 98, 160);
      doc.setFontSize(10).setTextColor(150).text("Retinoscopia", 147, 92);

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Estática", 115, 102);
      doc.autoTable({
        html: "#retinoscopia",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 105,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Dinâmica", 115, 133);
      doc.autoTable({
        html: "#retinoscopia",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 135,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Subjetivo", 115, 160);
      doc.autoTable({
        html: "#retinoscopia",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 162,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Afinamento", 115, 190);
      doc.autoTable({
        html: "#retinoscopia",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 192,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Adição", 115, 218);
      doc.autoTable({
        html: "#retinoscopia",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 220,
        tableWidth: 90,
      });

      doc.rect(2, 158, 105, 55);
      doc.setFontSize(10).setTextColor(150).text("Adição", 50, 165);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Técnica : ____________________________________", 5, 205);
      doc.autoTable({
        html: "#forometria",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 170,
        tableWidth: 100,
      });

      doc.rect(2, 218, 105, 55);
      doc.setFontSize(10).setTextColor(150).text("Rx Final", 50, 225);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Técnica : ____________________________________", 5, 205);
      doc.autoTable({
        html: "#rx",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 230,
        tableWidth: 100,
      });
      // Or use javascript directly:
      //      doc.autoTable({
      //   columnStyles: { europe: { halign: 'center' } }, // European countries centered
      //   body: [
      //     { europe: 'Sweden', america: 'Canada', asia: 'China' },
      //     { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
      //   ],
      //   columns: [
      //     { header: 'Europe', dataKey: 'europe' },
      //     { header: 'Asia', dataKey: 'asia' },
      //   ],
      // })

      window.open(doc.output("bloburl"));
      this.$router.push("/Consulta");
    },
  },
};
</script>

<style>
</style>