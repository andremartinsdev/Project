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
  
  <Menu/>
      <CardHome  class="mb-4" />

 <b-row class="justify-content-center flex-wrap-wrap  mt-5">
        <b-col cols="12" class="teste2">
          <b-card-group deck>
            <b-card
              header-bg-variant="dark"
              header-text-variant="white"
              header-tag="header"
              title="Title"
              class="text-center shadow-sm p-3 mb-5 bg-white rounded"

            >
              <template v-slot:header>
                <h6 class="mb-0">PROXIMAS CONSULTAS</h6>
              </template>
              <div class="card1">
                <b-table striped hover :items="items"></b-table>
              </div>
            </b-card>

            <b-card
              title="Title"
              header-tag="header"
              header-bg-variant="dark"
              header-text-variant="white"
              footer-tag="footer"
              class="text-center shadow-sm p-3 mb-5 bg-white rounded"
              id="card1"


              
            >
              <template v-slot:header>
                <h6 class="mb-0">Header Slot</h6>
              </template>
              <div class="card1">
                <b-table striped hover :items="items"></b-table>
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
</b-container>
 </div>
</template>

<script>
import CardHome from "./CardHome";
import Menu from "./Menu";

export default {
components:{
    CardHome,
    Menu
},
data(){
  return{
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
}
}
</script>

<style>
.home{
  margin-top: 90px;
}


.card1{
  overflow: auto;
  height: 300px;
}

header{
  background-color: brown;
}

navbar{
 background: #0082c8;  /* fallback for old browsers */
  height: 160px;
}


</style>