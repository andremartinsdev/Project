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
     loadEventos:{
       type: Array
     },
    consulta: {
      type: Object,
    },
  },

  watch: {
    loadEventos(){
      this.calendarOptions.events = this.loadEventos
    },
    consulta() {
      AgendaService.save(this.consulta)
        .then((result) => {
          if (result.status === 201) {
            this.showAlert("success", "Agendamento Realizado com Sucesso");
          }
        })
        .catch(() => {
          this.showAlert("error", "Erro ao Realizar agendamento");
        });
    },
  },
  data() {
    return {
      isModal: false,
      calendarOptions: {
        dateClick: this.handleDateClick,
        selectable: true,
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: "pt-br",
        events: [],
        eventColor: 'rgb(4, 56, 151)',
       editable: true,
       buttonText: {
        
        today: "Hoje",
       
    },
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        
      },
    };
  },
  created(){
    AgendaService.read().then(result => {
      console.log(result)
    result.data.consulta.map(resultado => {
      console.log(this.CreateObject(resultado))
      this.calendarOptions.events.push(this.CreateObject(resultado))
    })
    })
  },
  methods: {
   
    CreateObject(dados){
      console.log(dados)
      return {
        id: dados.uuid,
        title: dados.titulo,
        start: moment(dados.data).format('YYYY-MM-DD'),
       description: dados.observacao
      }
    },

    
    showAlert(icon, title) {
      // Use sweetalert2

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
      
        this.$emit('detalhesAgenda', clickInfo.event)
        
      
    }
   
  },
};
</script>

<style>
#calendario {
}
</style>
