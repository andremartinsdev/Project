<template>
  <div>
    <b-navbar toggleable="sm" id="navbar2" fixed="top" class="navbar">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <div class="mb-1">
        <b-avatar text="BV"></b-avatar>
        <b-navbar-brand class="ml-3">BootstrapVue</b-navbar-brand>
      </div>

      <b-collapse id="nav-text-collapse" is-nav class="colapseContainer">
        <b-navbar-nav class="flexNav">
          <router-link class="nav-link" to="/">
            <b-button pill variant="light" class="ml-4">
              <b-icon-house-door-fill font-scale="1.5" class="mr-2"></b-icon-house-door-fill>Inicio
            </b-button>
          </router-link>
          <router-link class="nav-link" to="/Agenda">
            <b-button pill variant="light" class="ml-4">
              <b-icon-calendar-fill font-scale="1.5" class="mr-2"></b-icon-calendar-fill>Agenda
            </b-button>
          </router-link>

          <router-link class="nav-link" to="/CadastroPaciente">
            <b-button pill variant="light" class="ml-4">
              <b-icon-person-plus-fill font-scale="1.5" class="mr-2"></b-icon-person-plus-fill>Paciente
            </b-button>
          </router-link>

          <router-link class="nav-link" to="/Consulta">
            <b-button pill variant="light" class="ml-4">
              <b-icon-card-list font-scale="1.5" class="mr-2"></b-icon-card-list>Consulta
            </b-button>
          </router-link>
          <div class="mb-1 ml-4">
            <b-dropdown
              pill
              size="md"
              variant="transparent"
              right
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content pill>
                <b-icon-gear-fill class="text-white" font-scale="1.5"></b-icon-gear-fill>
                <span class="ml-2 text-white">Opções</span>
              </template>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style >
@keyframes bounce {
  0%,
  20%,
  60%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  80% {
    transform: translateY(-5px);
  }
}
#navbar1:hover {
  border-radius: 20px;
}
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Odibee+Sans&family=Ubuntu:wght@500&display=swap");
button {
  height: 40px;
}

.flexNav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  font-family: "Ubuntu", sans-serif;
}

button:hover {
  animation: bounce 1s;
}

.colapseContainer {
  display: flex;
  justify-content: space-around;
}

.menu {
  display: flex;
  justify-content: space-around;
}

.navbar {
  background: #0082c871;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px; /* fallback for old browsers */
  /* fallback for old browsers */
  /* fallback for old browsers */
  /* fallback for old browsers */
}
</style>