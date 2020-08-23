<template>
<div>
<div>
 
  <b-navbar toggleable="sm"  class="navBar" fixed="top"  >
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <div class="mb-1">
        <b-avatar text="BV"></b-avatar>
        <b-navbar-brand class="ml-3">BootstrapVue</b-navbar-brand>
      </div>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<b-container class="home" fluid>
  
  <Menu @mostrar="showOption($event)"/>
      <CardHome  class="mb-4" />

 <b-row class="justify-content-center flex-wrap-wrap  mt-5">
        <b-col cols="12" class="teste2">
          <b-card-group deck>
            <b-card
              header-bg-variant="info"
              header-text-variant="white"
              header-tag="header"
              class="text-center shadow-sm bg-white rounded"

            >
              <template v-slot:header>
                <h6 class="mb-0">PROXIMAS CONSULTAS</h6>
              </template>
              <div class="card1">
                <b-table striped hover :items="items"></b-table>
              </div>
            </b-card>

            <b-card
              
              
              class="text-center shadow-sm bg-white rounded"
              id="card1"


              
            >
              
              <div class="card1">
                <Calendar/>
              </div>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-container>
        <div class="mt-4">
          <b-jumbotron lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <router-link class="nav-link" to="/Consulta">
            <b-button variant="primary">More Info</b-button>
          </router-link>
            
          </b-jumbotron>
        </div>
      </b-container>
     <footer v-if="showOptionRelatorio == true" id="sticky-footer-Home" class="py-4 text-white-50">
                      <div class="container text-center">
                        <b-button pill variant="light" @click="read(idPacienteAcoes)" class="mr-2" type="submit">
                          <b-icon-person-check-fill submit class="mr-3"></b-icon-person-check-fill>Atendidos Hoje
                        </b-button>

                        <b-button pill variant="light" @click="deletePaciente(idPacienteAcoes)" class="mr-2">
                          <b-icon-arrow-clockwise submit class="mr-3"></b-icon-arrow-clockwise>Relatório Financeiro
                        </b-button>

                        <b-button pill class="mr-2" variant="light">
                          <b-icon-x class="mr-3 mb-1"></b-icon-x>Relatório Consultas
                        </b-button>

                         <b-button pill class="mr-2" variant="light">
                          <b-icon-x class="mr-3 mb-1"></b-icon-x>Aniversariantes
                        </b-button>

                           <b-button pill class="mr-2" variant="light">
                          <b-icon-x class="mr-3 mb-1"></b-icon-x>Consultas Vencidas
                        </b-button>
                         <b-button pill class="mr-2" @click="hiddenOption" variant="danger">
                          <b-icon-x class=" mb-1"></b-icon-x>
                        </b-button>
                      </div>
                    </footer>
</b-container>

</div>
</template>

<script>
import CardHome from "./CardHome";
import Menu from "./Menu";
import Calendar from "../fullCalendar/Calendar";
import { mapState, mapActions } from "vuex";

export default {
components:{
    CardHome,
    Menu,
    Calendar
},
data(){
  return{
    computed: {
    ...mapState({
      pacientes: state => state.option
    })
  },
    showOptionRelatorio: false,
     items: [
          { Paciente: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { Paciente: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { Paciente: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { Paciente: 38, first_name: 'Jami', last_name: 'Carney' },
          { Paciente: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { Paciente: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { Paciente: 38, first_name: 'Jami', last_name: 'Carney' },
          { Paciente: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { Paciente: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { Paciente: 38, first_name: 'Jami', last_name: 'Carney' },
          
        ],
  }
},
 methods: {
    ...mapActions([
      "alterOption",
      
    ]),
    showOption($event){
      this.showOptionRelatorio = $event.showOption
      console.log(this.showOptionRelatorio )
    },
    hiddenOption(){
      this.showOptionRelatorio = false;
    }
 },
}
</script>

<style>
.home{
  margin-top: 90px;
}


.card1{
  overflow: auto;
  
}

header{
  background-color: brown;
}

navbar{
 background: #0082c8;  /* fallback for old browsers */
  height: 160px;
}


#sticky-footer-Home {
  margin-left: 65px;
  flex-shrink: none;
  position: fixed;
  margin-right: 25%;
  top: 80px;
  margin-bottom: 4px;
  width: 72%;
  background: linear-gradient(0deg, #015ea0 0%, #0082c8 100%);
  border-radius: 55px;
  padding: 4;
  float: left;
}

@media (max-width: 700px) {
  #sticky-footer-Home {
    position: unset;
    display: flex;
    width: 100%;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 10px;
    align-items: center;
  }
  #sticky-footer-Home button {
    width: 100%;
    margin-bottom: 5px;
  }
}

</style>