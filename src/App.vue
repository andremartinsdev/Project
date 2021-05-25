<template>
  <div id="app">
    <SidebarNavbar />
   
    <transition v-if="this.$router.path != '/'" name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import SidebarNavbar from "../src/components/SidebarNavbar";

export default {
  name: "App",
  components: {
    SidebarNavbar,
  },

 
  beforeMount() {
    console.log("entrrroooooo mounteds")
   
  },
  data() {
    return {
      
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
