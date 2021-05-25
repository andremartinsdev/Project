<template>
  <div id="app">
    <SidebarNavbar />
    <b-modal
      id="modal-xl-t"
      hide-footer
      size="xl"
      title="Seja Bem Vindo ao BMS Opto ... Temos alguns instruções para você"
    >
      <b-card>
        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="Primeiro Passo"
              :img-src="imgTela"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Segundo Passo"
              :img-src="imgTela2"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-card>
    </b-modal>
    <transition v-if="this.$router.path != '/'" name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import SidebarNavbar from "../src/components/SidebarNavbar";
import imgTela from "../public/tela.png";
import imgTela2 from "../public/tela2.png";
import clinicaService from '../src/services/clinica'
export default {
  name: "App",
  components: {
    SidebarNavbar,
  },
  mounted() {
    clinicaService.read().then(result =>{
      console.log(result.data)
    })
    this.$bvModal.show("modal-xl-t");
  },
  data() {
    return {
      imgTela: imgTela,
      imgTela2: imgTela2,
    };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
}
body {
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
