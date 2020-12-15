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
          <router-link class="nav-link mr-5" to="/" style=" padding:0">
            <b-img center :src="image" alt="Center image" width="35"></b-img>
             <label class="text-white ml-2">Inicio</label>
          </router-link>
          <router-link class="nav-link mr-5" to="/Agenda" style=" padding:0">
            <b-img center :src="imageCalender" alt="Center image" width="35"></b-img>
             <label class="text-white">Agenda</label>
          </router-link>

          <router-link class="nav-link mr-5" to="/CadastroPaciente" style=" padding:0">
            <b-img center :src="imagePaciente" alt="Center image" width="35"></b-img>
             <label class="text-white">Paciente</label>
          </router-link>

          <router-link class="nav-link mr-5" to="/Consulta" style="padding:0">
            <b-img center :src="imageConsulta" alt="Center image" width="35"></b-img>
            <label class="text-white">Consulta</label>
          </router-link>

           <router-link class="nav-link mr-5" to="/Consulta" style="padding:0">
            <b-img center :src="imageRelatorio" alt="Center image" width="35"></b-img>
            <label class="text-white">Relatorio</label>
          </router-link>
          <div class="ml-4" style=" margin:auto 0;">
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
              <router-link to="/ConfiguracaoGeral"> <b-button size="sm" variant="primary" block>Configuração Geral</b-button> </router-link>
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
import image from "../../public/home.png";
import imageCalender from "../../public/calender.png";
import imagePaciente from "../../public/user.png";
import imageConsulta from "../../public/consulta.png";
import imageRelatorio from "../../public/relatorio.png";
import imageConfig from "../../public/configuracao.png";
export default {
  data(){
    return{
      image: image,
      imageCalender: imageCalender,
      imagePaciente: imagePaciente,
      imageConsulta: imageConsulta,
      imageRelatorio: imageRelatorio,
      imageConfig: imageConfig
    }
  }
};
</script>

<style scoped >
li a {
    text-decoration: none;
}
router-link {
    text-decoration: none;
}
@keyframes bounce {
  0%,
  20%,
  60%,
  100% {
    transform: translateY(0);
  }
 
  80% {
    transform: translateY(-15px);
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
}

img:hover {
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