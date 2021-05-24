<template>
  <div
    v-if="
      this.$route.path.substr(0, 11) != '/Impressao/' &&
      this.$route.path.substr(0, 11) != '/' &&
      this.$route.path.substr(0, 11) != '/Impressao/'
    "
  >
    <b-navbar toggleable="sm" id="navbar2" fixed="top" class="navbar">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <div class="mb-1">
        <b-avatar size="50" :src="logoBms"></b-avatar>
        <label class="ml-3 text-white"></label>
        <b-navbar-brand class="ml-3 text-white nomeEmpresa"
          >Clínica Teste</b-navbar-brand
        >
      </div>

      <b-collapse id="nav-text-collapse" is-nav class="colapseContainer">
        <b-navbar-nav class="flexNav">
          <router-link class="nav-link mr-5" to="/Home" style="padding: 0">
            <b-img center :src="image" alt="Center image" width="35"></b-img>
            <label class="text-white ml-2">Inicio</label>
          </router-link>
          <router-link class="nav-link mr-5" to="/Agenda" style="padding: 0">
            <b-img
              center
              :src="imageCalender"
              alt="Center image"
              width="35"
            ></b-img>
            <label class="text-white">Agenda</label>
          </router-link>

          <router-link
            class="nav-link mr-5"
            to="/CadastroPaciente"
            style="padding: 0"
          >
            <b-img
              center
              :src="imagePaciente"
              alt="Center image"
              width="35"
            ></b-img>
            <label class="text-white">Paciente</label>
          </router-link>

          <router-link class="nav-link mr-5" to="/Consulta" style="padding: 0">
            <b-img
              center
              :src="imageConsulta"
              alt="Center image"
              width="35"
            ></b-img>
            <label class="text-white">Consulta</label>
          </router-link>

          <router-link class="nav-link mr-5" to="/Relatorio" style="padding: 0">
            <b-img
              center
              :src="imageRelatorio"
              alt="Center image"
              width="35"
            ></b-img>
            <label class="text-white">Relatorio</label>
          </router-link>
          <a v-b-toggle.sidebar-1 class="mr-5">
            <b-img
              center
              :src="imageConfig"
              alt="Center image"
              width="35"
            ></b-img>
            <label class="text-white">Configurações</label>
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div
      id="links-fixos"
      v-if="this.$route.path === '/Home'"
      class="hidden-md-down iconeMenu"
    >
      <b-col md="6" class="mb-3">
        <b-icon
          icon="arrow-right-circle-fill"
          v-b-toggle.sidebar-2
          class="bg-success rounded p-1"
          v-b-popover.hover.top="'Quadro de Lembretes'"
          variant="light"
          animation="cylon"
          font-scale="2"
        ></b-icon>
      </b-col>
      <b-popover target="popover-target-1" triggers="hover" placement="top">
        <template #title>Popover Title</template>
        I am popover <b>component</b> content!
      </b-popover>
    </div>
    <div>
      <b-sidebar
        id="sidebar-1"
        right
        title="Opções"
        class="text-center mt-2"
        shadow
      >
        <div hidden class="px-3 py-2">
          <router-link to="/ConfiguracaoGeral">
            <b-button size="sm" variant="primary" block
              >Configuração Geral</b-button
            >
          </router-link>
        </div>

        <div class="px-3 py-2">
          <router-link to="/CadastroClinica">
            <b-button size="sm" variant="primary" block
              >Cadastro da Clínica</b-button
            >
          </router-link>
        </div>
      </b-sidebar>

      <b-sidebar
        id="sidebar-2"
        width="20rem"
        class="text-center mt-2"
        shadow
        no-header
      >
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Lembretes Para Hoje</h4>

            <div class="mb-2">
              <b-avatar :src="logoBms" size="6rem"></b-avatar>
            </div>

            <b-button
              size="sm"
              variant="primary"
              class="mb-4 mt-4"
              block
              @click="showAgendamento"
              >Agendamentos de Hoje</b-button
            >
            <b-button
              size="sm"
              variant="danger"
              v-if="showAgendamentos === false"
              class="mb-4 mt-4"
              block
              @click="showDespesa"
              >Despesas de Hoje</b-button
            >
            <div v-if="showAgendamentos === true">
              <b-toast
                id="example-toast"
                variant="primary"
                :title="'Procedimento : ' + agendamento.text.toUpperCase()"
                class="ml-2"
                static
                visible
                no-auto-hide
                v-for="agendamento in agendamentosHoje"
                :key="agendamento.uuid"
              >
                <label for=""
                  >Nome Paciente : {{ agendamento.nomePaciente }}</label
                ><br />
                <label for="">Data : {{ agendamento.data }}</label
                ><br />
                <label for="">Horario : {{ agendamento.horario }}</label
                ><br />
              </b-toast>
            </div>

            <div v-if="showDespesas === true">
              <b-toast
                id="example-toast"
                variant="danger"
                :title="'Descrição Despesa : ' + despesa.descricaoDespesa"
                class="ml-2"
                static
                visible
                no-auto-hide
                v-for="despesa in despesasHoje"
                :key="despesa.uuid"
              >
                <label for="">Data : {{ despesa.data }}</label
                ><br />
                <label for=""
                  >Valor :
                  {{
                    despesa.valor.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }}</label
                ><br />
              </b-toast>
            </div>
            <b-button variant="primary" class="mt-4" size="sm" @click="hide"
              >Fechar <b-icon-x scale="1.5" class="mb-1"></b-icon-x
            ></b-button>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import image from "../../public/home.png";
import imageCalender from "../../public/calender.png";
import imagePaciente from "../../public/user.png";
import imageConsulta from "../../public/consulta.png";
import imageRelatorio from "../../public/relatorio.png";
import imageConfig from "../../public/configuracao.png";
import AgendaService from "../services/agenda";
import DespesaService from "../services/despesas";
import logoBms from "../../src/assets/LogoBms2.jpg";
import ClinicaService from "../services/clinica";

import moment from "moment";
export default {
  data() {
    return {
      logoBms: logoBms,
      image: image,
      imageCalender: imageCalender,
      imagePaciente: imagePaciente,
      imageConsulta: imageConsulta,
      imageRelatorio: imageRelatorio,
      imageConfig: imageConfig,
      agendamentosHoje: [],
      despesasHoje: [],
      showAgendamentos: false,
      showDespesas: false,
      nomeClinica: "",
    };
  },

  created() {
    if (this.$route.path.substr(0, 11) != "/" && this.$route.path) {
      this.readAgendamentos();
      this.readDespesas();
    }
  },
  
  mounted() {
    if (this.$route.path.substr(0, 11) != "/" && this.$route.path) {
      this.readDadosClinica();
    }
  },

  methods: {
    readAgendamentos() {
      this.agendamentosHoje = [];
      AgendaService.readDateInner(moment().format("YYYY-MM-DD")).then(
        (result) => {
          result.data.agendamentos.map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
            this.agendamentosHoje.push(el);
          });
        }
      );
    },

    async readDadosClinica() {
      this.dadosClinica = [];
      await ClinicaService.read();
      this.nomeClinica = "Cliníca Teste Beta";
    },

    async showDespesa() {
      this.showAgendamentos = false;
      await this.readDespesas();
      this.showDespesas = !this.showDespesas;
      console.log(this.despesasHoje);
    },


   async showAgendamento() {
      this.showDespesas = false;
      await this.readAgendamentos()
      this.showAgendamentos = !this.showAgendamentos;
    },


    readDespesas() {
      this.despesasHoje = []
      DespesaService.readDate(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ).then((result) => {
        console.log(result);
        result.data.result.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
          this.despesasHoje.push(el);
        });
      });
      console.log(this.despesasHoje)
    },
  },
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@media (max-width: 700px) {
  .nomeEmpresa {
    font-size: 20px !important;
    color: red;
  }
}
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
  background: #0000469f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1cb5e06b,
    #00004665
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1cb5e03f,
    #00004667
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  /* fallback for old browsers */
  /* fallback for old browsers */
  /* fallback for old browsers */
  /* fallback for old browsers */
}

#sidebar-1 {
  background: aqua;
}
#links-fixos {
  /*você pode alterar largura usando width*/
  padding: 5px;
  position: fixed;
  top: 300px; /*altura da classe*/
}

.nomeEmpresa {
  font-family: "Lobster", cursive;
  font-size: 38px;
}
.iconeMenu {
  z-index: 1000;
}

.sidebar-2 {
  background: #0000469f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1cb5e06b,
    #00004665
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1cb5e03f,
    #00004667
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>