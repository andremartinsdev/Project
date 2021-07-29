<template>
  <FullCalendar
    :options="calendarOptions"
    @dateClick="handleDateClick"
    id="calendario"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AgendaService from "../../services/agenda";
import moment from "moment";

export default {
  components: {
    FullCalendar,
  },
  props: {
    loadEventos: {
      type: Array,
    },
    consulta: {
      type: Object,
    },
  },
  watch: {
    loadEventos() {
      this.calendarOptions.events = this.loadEventos;
    },
    async consulta() {
      try {
        await AgendaService.save(this.consulta);
        this.showAlert("success", "Agendamento Realizado com Sucesso");
      } catch (ex) {
        this.showAlert("error", "Erro ao Realizar agendamento");
      }
    },
  },
  data() {
    return {
      calendarOptions: {
        dateClick: this.handleDateClick,
        selectable: true,
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: "pt-br",
        events: [],
        eventColor: "rgb(4, 56, 151)",
        editable: true,
        buttonText: {
          today: "Hoje",
        },
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      },
    };
  },
  async created() {
    const { data } = await AgendaService.read();
    data.consulta.map((resultado) => {
      this.calendarOptions.events.push(this.CreateObject(resultado));
    });
  },
  methods: {
    CreateObject(dados) {
 
      return {
        id: dados.uuid,
        title: dados.titulo,
        start: moment(dados.data).add('day', 1).format("YYYY-MM-DD"),
        description: dados.observacao,
      };
    },
    showAlert(icon, title) {
      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },
    handleDateClick: function (arg) {
      this.$emit("selectDate", arg.dateStr);
    },
    handleEventClick(clickInfo) {
      this.$emit("detalhesAgenda", clickInfo.event);
    },
  },
};
</script>
