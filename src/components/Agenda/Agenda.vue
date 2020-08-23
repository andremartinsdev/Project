<template>
  <div>
    <SidebarNavbar />

    <div class="card" id="calendario2">
      <div class="card-header text-center">
        Agenda
        <b-button pill class="mr-2 float-right" v-b-modal.modal-lg variant="success">
          <b-icon-plus class="mr-3 mb-1"></b-icon-plus>Novo Agendamento
        </b-button>
      </div>
      <div class="card-body">
        <div class="card" id="cardCalender">
          <div class="card-body">
            <Calendar class="calen" />
          </div>
        </div>
      </div>
      <b-modal id="modal-lg" header-bg-variant="light" size="lg" title="Large Modal">
        <label class="mr-sm-2" for="inline-form-custom-select-pref">Procedimento</label>
        <b-form-select size="sm" id="input-1" type="email" required placeholder="Enter email"></b-form-select>
        <label class="mr-sm-2 mt-2" for="inline-form-custom-select-pref">Data do Procedimento</label>
        <input type="date" size="sm"  class="form-control col-4 " />
        <label class="mt-2">Paciente</label>
            <b-form-select size="sm"></b-form-select>
        <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Calendar from "../fullCalendar/Calendar";
import SidebarNavbar from "../SidebarNavbar";

export default {
  components: {
    Calendar,
    SidebarNavbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

#calendario2 {
  margin-top: 100px;
  font-family: "Monda", sans-serif;
  display: flex;
}
#modal-lg{
  font-family: "Monda", sans-serif;

}
.calen {
  width: 100%;
  height: 700px;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
}

@media (max-width: 700px) {
  .calen {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

#cardCalender {
  background: #0082c891;
}
</style>