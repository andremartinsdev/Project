<template>
  <div id="app">
   
    <transition v-if="this.$router.path != '/'" name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
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
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background:  #191654,       /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(178, 178, 184);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid rgb(255, 255, 255);  /* creates padding around scroll thumb */
}
body {
  font-size: 14px!important;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ) fixed; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ) fixed; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
