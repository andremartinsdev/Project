<template>
  <div id="app">
    <SidebarNavbar/>
    
    
     <transition v-if="this.$router.path != '/'" name="slide-fade">
    <router-view/>

  </transition>
  
  </div>
</template>

<script>

import SidebarNavbar from '../src/components/SidebarNavbar'
export default {
  name: "App",
  components: {
    SidebarNavbar
  },

  data() {
    return {

      
    };
  }
};
</script>

<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
}
body {
  background: #1a2980; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #1a2980, #26d0ce); /* Chrome 10-25, Safari 5.1-6 */
  background-color: linear-gradient(to bottom, #1a2980, #26d0ce);
}
.teste3 {
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
