<template>


    
        <FullCalendar :options="calendarOptions" local="pt-br" id="calendario" />
        


    
  
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'App',
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
         locale: 'pt-br' ,
           events: [
    {
      id: 'a',
      title: 'my event',
      start: '2020-08-21',
      editable: true,
      backgroundColor: "red",
    },
    {
      id: 'a',
      title: 'my event',
      start: '2020-08-21',
      editable: true,
      backgroundColor: "red",
    },
    {
      id: 'a',
      title: 'my event',
      start: '2020-08-21',
      editable: true,
      backgroundColor: "red",
    },
    {
      id: 'a',
      title: 'my event',
      start: '2020-08-21',
      editable: true,
      backgroundColor: "red",
    },
    {
      id: 'a',
      title: 'my event',
      start: '2020-08-21',
      editable: true,
      backgroundColor: "red",
    }
  ]
      }
    }
  }
}
</script>

<style>
#calendario{
    
}

</style>
