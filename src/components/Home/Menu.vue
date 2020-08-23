<template>
  <b-row>
    <b-col cols="12">
      <div class="row" id="menu">
        <div>
          <router-link class="nav-link" to="/">
            <b-img center :src="image" alt="Center image"></b-img>
             <label class="text-white ml-2">Inicio</label>
          </router-link>
        </div>
        <div>
          <router-link class="nav-link" to="/Agenda">
            <b-img center :src="imageCalender" alt="Center image"></b-img>
             <label class="text-white">Agenda</label>
          </router-link>
        </div>
        <div>
          <router-link class="nav-link" to="/CadastroPaciente">
            <b-img center :src="imagePaciente" alt="Center image"></b-img>
             <label class="text-white">Paciente</label>
          </router-link>
        </div>

        <div>
          <router-link class="nav-link" to="/Consulta">
            <b-img center :src="imageConsulta" alt="Center image"></b-img>
            <label class="text-white">Consulta</label>
          </router-link>
        </div>

        <div>
          <router-link class="nav-link" to="" >
            <b-img center :src="imageRelatorio" alt="Center image" @click="apresentar()"></b-img>
            <label class="text-white">Relatório</label>
          </router-link>
        </div>

        <div>
          <router-link class="nav-link" to="/Consulta">
            <b-img center :src="imageConfig" alt="Center image"></b-img>
            <label class="text-white">Configuração</label>
          </router-link>
        </div>
      </div>
      <!-- CARD DE PACIENTES -->
      <img src="C:\Users\Andre\Downloads\home.png" alt srcset />

      <!----------------------- E N D------------------- -->

      <!----------------------- CARD AGENDAMENTOS ------------------- -->
    </b-col>
    
  </b-row>
</template>

<script>
import image from "../../../public/home.png";
import imageCalender from "../../../public/calender.png";
import imagePaciente from "../../../public/user.png";
import imageConsulta from "../../../public/consulta.png";
import imageRelatorio from "../../../public/relatorio.png";
import imageConfig from "../../../public/configuracao.png";
export default {
  props: {
    option: Boolean
  },
  data() {
    return {
      image: image,
      imageCalender: imageCalender,
      imagePaciente: imagePaciente,
      imageConsulta: imageConsulta,
      imageRelatorio: imageRelatorio,
      imageConfig: imageConfig
    };
  },

  methods:{
    apresentar(){
      this.$emit('mostrar',{showOption: true})
    }
  }
};
</script>

<style>
@keyframes bounce {
  0%, 20%, 60%, 100%{
    transform: translateY(0)
  }
  40%{
    transform: translateY(-20px)

  }
  80%{
    transform: translateY(-10px)

  }
}
    @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");


.testea {
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

card {
  border-radius: 20px;
}

#menu{
    display: flex;
    justify-content: space-around;
  font-family: "Monda", sans-serif;


}

img:hover{
animation: bounce 1s;
}

</style>