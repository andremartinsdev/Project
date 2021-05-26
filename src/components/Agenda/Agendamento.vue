<template>
  <div>
    <h3>Agendamentos de Hoje</h3>
    <b-alert
      variant="secondary mt-3"
      show
      dismissible
      v-for="agendamento in this.agendamentos"
      :key="agendamento.uuid"
    >
      <b-badge variant="primary" class="p-2 float-left mr-3"
        >Nome Paciente : {{ agendamento.nomePaciente }}</b-badge
      >
      <b-badge variant="warning" class="p-2 float-left mr-3"
        >Horário : {{ agendamento.horario }}</b-badge
      >
      <b-badge variant="trasnparent" class="p-2 mr-3"
        >Valor : {{ agendamento.valorConsulta }}</b-badge
      >
      <b-button
        variant="light"
        @click="consultar(agendamento.uuidPaciente, agendamento.uuid)"
        size="sm"
        pill
        class="float-right mr-3"
        >Ir para Consulta <b-icon-arrow-right class="ml-2"></b-icon-arrow-right
      ></b-button>
    </b-alert>
  </div>
</template>

<script>
import agendaServices from "../../services/agenda";
import moment from "moment";
export default {
  data() {
    return {
      agendamentos: [],
    };
  },

  created() {
    this.readAgendamento();
  },

  methods: {
    consultar(idPaciente, uuidAgendamento) {
        console.log(idPaciente, uuidAgendamento)
      this.$store.commit("PACIENTE_SELECTED", idPaciente);
      this.$store.commit("UUID_AGENDAMENTO", uuidAgendamento);

      this.$router.push('/Consulta');
    },
    async readAgendamento() {
      const agendados = await agendaServices.readDateProximasConsultas(
        moment().format("YYYY-MM-DD")
      );
      agendados.data.consultas.forEach((element) => {
        this.agendamentos.push(element);
      });
    },
  },
};
</script>

<style>
</style>