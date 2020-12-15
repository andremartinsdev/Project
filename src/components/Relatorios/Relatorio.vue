<template>
  <div class="containerRelatorio">
    <SidebarNavbar />
    <div class="containerTabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Atendidos Hoje" active>
            <b-card>
              <h5 class="text-center mb-4">Atendidos Hoje</h5>

              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nome Paciente</th>
                    <th scope="col">Data Consulta</th>
                    <th scope="col">Horário</th>
                    <th scope="col">Procedimento</th>
                    <th scope="col">Forma de Pagamento</th>
                    <th scope="col">Valor Consulta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="consulta in this.consultasDeHoje"
                    :key="consulta.idConsulta"
                  >
                    <td>{{ consulta.nomePaciente }}</td>
                    <td>{{ consulta.data }}</td>
                    <td>{{ consulta.horario }}</td>
                    <td>{{ consulta.procedimento }}</td>
                    <td>{{ consulta.formaDePagamento }}</td>
                    <td>{{ consulta.valorConsulta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</td>
                    
                  </tr>
                </tbody>
              </table>

            </b-card>
          </b-tab>
          <b-tab title="Relatório Financeiro">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Aniversariantes">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Consultas Vencidas">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Relatório Financeiro">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Relatório Financeiro">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import SidebarNavbar from "../SidebarNavbar";
//import PacienteService from '../../services/paciente'
//import ConsultaService from "../../services/consulta";
import AgendaService from "../../services/agenda";

import moment from "moment";
export default {
  data() {
    return {
      nomePaciente:"",
      dataNascimento:"",
      valorConsulta:"00,00",
      procedimento:"",
      horario:"",
      consultasDeHoje: [],
    };
  },
  components: {
    SidebarNavbar,
  },
  created() {
    this.readConsultaToday();
  },
  methods: {
    compararHora(a, b) {
      return parseInt(a.horario) - parseInt(b.horario);
    },
    detalhesConsulta(uuid, nomePaciente, dataNascimento, valorConsulta) {
      AgendaService.readParams(uuid).then(result =>{
        console.log(result)
        this.nomePaciente = nomePaciente
        this.horario = result.data.agendamento.horario
        this.dataNascimento = dataNascimento
        this.valorConsulta = valorConsulta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        this.procedimento = result.data.agendamento.procedimento
      })
       this.$bvModal.show("modal-1");
    },
    readConsultaToday() {
      AgendaService.readDateAgendamentoFinalizado(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ).then((result) => {
        this.consultasDeHoje = result.data.agendamentos;
        this.consultasDeHoje.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.consultasDeHoje.sort(this.compararHora);
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

.btnDetalher {
  justify-content: baseline;
}
.containerTabs {
  font-family: "Monda", sans-serif;
  margin-top: 120px;
  padding: 20px;
  height: 670px;
}
</style>

