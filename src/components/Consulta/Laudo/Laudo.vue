<template>
  <div class="containerLaudo" >
    
    <div class="imagemOpto">
      <img
        width="200"
        src="https://images.tcdn.com.br/img/img_prod/476855/adesivo_curso_ou_profissao_optometria_961_1_20180905174055.jpg"
        alt=""
        srcset=""
      />
    </div>
    <h2 class="text-center" id="av">AVALIAÇÃO VISUAL</h2>
    <h5 class="text-center">Paciente : {{ this.nomePaciente }}</h5>
    <hr />
    <div class="divFle">
      <b-card class="col-5" header="OLHO DIREITO">
        <label for="">LONGE: S/C = </label><br />
        <label for="">LONGE: C/C = </label><br />
        <label for="">PERTO: S/C = </label><br />
        <label for="">PERTO: C/C = </label>
      </b-card>
      <b-card class="col-5" header="OLHO ESQUERDO">
        <label for="">LONGE: S/C = </label><br />
        <label for="">LONGE: C/C = </label><br />
        <label for="">PERTO: S/C = </label><br />
        <label for="">PERTO: C/C = </label>
      </b-card>
    </div>
    <hr />

    <div>
      <small class="text-center mt-4"
        >O presente exame efetuado pelo optometrista, tem por finalidade a
        correção dos defeitos retrativos, a avaliação sensorial e motora,
        através da indicação de lentes corretoras retrativas e/ou exercícios
        ortópticos. O diagnósticos de doenças oculares e seu tratamento são de
        competência do profissional médico.</small
      >
    </div>

    <div class="assinatura">
      <div class="line"></div>
      <div>
        <p>Assinatura</p>
      </div>
      <div>
        <p>Data : 10/09/2019</p>
      </div>
    </div>
    <footer id="sticky-footer" class="py-2 text-white-50 mb-4 p-3">
      <b-button
        pill
        variant="light"
        class="mr-2"
        type="submit"
        block
        @click="imprimir"
      >
        <b-icon-printer-fill submit class="mr-3"></b-icon-printer-fill>Imprimir
      </b-button>
    </footer>
  </div>
  
</template>

<script>
import Paciente from "../../services/paciente";


export default {
  data() {
    return {
      nomePaciente: "",
    };
  },
  created() {
    this.readPaciente();
  },
  methods: {
    imprimir(){
      window.print();
    },
    readPaciente() {
      Paciente.read(this.$route.params.uuid).then((result) => {
        this.nomePaciente = result.data.paciente.nomePaciente;
      }).catch(()=>{
        alert("Ocorreu um Erro ao ler os dados do Paciente")
      });
    },
  },
};
</script>

<style>
.containerLaudo {
  background: white;
}
#receita {
  width: 500px;
}

@media print {
  table {
    border: none;
  }

  footer{
    display: none;
  }
}

table tr {
  padding: 1px;
}

.divFle {
  display: flex;
  justify-content: space-around;
}
.line {
  border: 1px solid rgb(97, 96, 96);
  width: 50%;
}
.imagemOpto {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.assinatura {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-self: center;
}

#av {
  color: rgb(105, 104, 104);
  padding: 20px;
}
</style>