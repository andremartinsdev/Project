<template>
  <div id="app">
    
    
   
    <router-view/>
  </div>
</template>

<script>
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "App",
  components: {
  },

  data() {
    return {

      calendarPlugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin],
      plugins: [interactionPlugin],
      themeSystem: "bootstrap",
     
      events: [
        {
          title: "event1",
          start: "2010-01-01"
        },
        {
          title: "event2",
          start: "2010-01-05",
          end: "2010-01-07"
        },
        {
          title: "event3",
          start: "2020-06-20T12:30:00",
          allDay: false // will make the time show
        }
      ]
    };
  }
};
</script>

<style>
body {
  background: #1a2980; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #1a2980, #26d0ce); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #1a2980, #26d0ce);
}
.teste3 {
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
