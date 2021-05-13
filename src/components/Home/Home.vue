<template>
  <div>
    <b-container class="home" fluid>
      <CardHome
        class="mb-4 mt-2"
        :consultas="this.consultas"
        :pacientesCadastrados="this.pacientesCadastrados"
        :agendamentosDia="this.agendamentosDia"
        :consultasMes="this.consultasMes"
      />
      <b-row class="justify-content-center flex-wrap-wrap mt-5 testando">
        <b-col cols="12" class="teste2 testando">
          <b-container>
            <section id="team" class="pb-5">
              <div class="container">
                <div class="row">
                  <!-- Team member -->
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip">
                      <div class="mainflip flip-0">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class="img-fluid"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUym5JGMpWsjlPq6txVnG52Va2fR6FJLFDew&usqp=CAU"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Aniversariantes do Mês</h4>
                              <p class="card-text">
                                Deseje um Feliz aniversario para seus Pacientes
                              </p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="backside shadow">
                          <div class="card">
                            <div class="card-body text-center mt-1">
                              <h4 class="card-title">
                                Aniversariante
                                <b-badge variant="info">{{
                                  this.aniversarianteDoMes === undefined
                                    ? "0"
                                    : this.aniversarianteDoMes.length
                                }}</b-badge>
                              </h4>

                              <div
                                class="aniversarioContent shadow"
                                v-if="this.aniversarianteDoMes.length > 0"
                              >
                                <p class="card-text">
                                  Nome do Paciente:
                                  {{
                                    this.aniversarianteDoMes[
                                      this.indexAniversario
                                    ].nomePaciente
                                  }}
                                </p>
                                <p class="card-text">
                                  Telefone/Celular:
                                  {{
                                    this.aniversarianteDoMes[
                                      this.indexAniversario
                                    ].telefone
                                  }}
                                </p>
                                <p class="card-text">
                                  Data de Nascimento:
                                  {{
                                    this.aniversarianteDoMes[
                                      this.indexAniversario
                                    ].dataNascimento
                                  }}
                                </p>
                              </div>
                              <div class="mt-4">
                                <a>
                                  <i
                                    class="fa fa-facebook-square fa-2x mr-3"
                                    style="color: rgb(0, 138, 255)"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <a @click="enviarMsgWhatsapp">
                                  <i
                                    class="fa fa-whatsapp fa-2x"
                                    style="color: rgb(83, 247, 68)"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                            <div class="flexIcon">
                              <div>
                                <b-icon
                                  icon="arrow-left-circle-fill"
                                  class="bg-info rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Consulta Vencida Anterior'
                                  "
                                  @click="aniversarioAnterior"
                                ></b-icon>
                              </div>
                              <div>
                                <p class="text-info">
                                  {{ this.indexAniversario + 1 }} de
                                  {{ this.aniversarianteDoMes.length }}
                                </p>
                              </div>
                              <div>
                                <b-icon
                                  icon="arrow-right-circle-fill"
                                  class="bg-info rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Proxima Consulta Vencida'
                                  "
                                  @click="aniversarioProximo"
                                ></b-icon>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ./Team member -->
                  <!-- Team member -->
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div
                      class="image-flip"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div class="mainflip">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class="img-fluid"
                                  src="https://blog.acordocerto.com.br/wp-content/uploads/2020/04/rsz_novo-prazo-imposto-de-renda-2020.jpg"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Consultas Vencidas</h4>
                              <p class="card-text">
                                Veja os Pacientes os quais suas Consultas
                                venceram
                              </p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="backside shadow">
                          <div class="card" >
                            <div
                              class="card-body text-center mt-1" v-if="this.renderConsultasVencidas"
                            >
                              <h4 class="card-title">
                                Consulta Vencida
                                <b-badge variant="info">{{
                                  this.consultasVencidas[0].length 
                                }}</b-badge>
                              </h4>
                              <div
                                class="consultasContent shadow"
                                v-if="this.consultasVencidas[0] && this.consultasVencidas[0].length > 0"
                              >
                                <p class="card-text">
                                  Nome Paciente:
                                  {{
                                    this.consultasVencidas[0][
                                      this.indexConsultaVencida
                                    ].nomePaciente
                                  }}
                                </p>
                                <p class="card-text">
                                  Data da ultima Consulta:
                                  {{
                                    this.consultasVencidas[0][
                                      this.indexConsultaVencida
                                    ].data
                                  }}
                                </p>
                                <p class="card-text">
                                  Data de Vencimento da consulta:
                                  {{
                                    this.consultasVencidas[0][
                                      this.indexConsultaVencida
                                    ].dataVencimento
                                  }}
                                </p>
                              </div>
                            </div>
                            <div class="flexIcon" v-if="this.renderConsultasVencidas" >
                              <div>
                                <b-icon
                                  icon="arrow-left-circle-fill"
                                  class="bg-info rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Consulta Vencida Anterior'
                                  "
                                  @click="anteriorConsultaVencida"
                                ></b-icon>
                              </div>
                              <div>
                                <p class="text-info">
                                  {{ this.indexConsultaVencida + 1 }} de
                                  {{
                                    this.consultasVencidas[0] == undefined
                                      ? 0
                                      : this.consultasVencidas[0].length
                                  }}
                                </p>
                              </div>
                              <div>
                                <b-icon
                                  icon="arrow-right-circle-fill"
                                  class="bg-info rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Proxima Consulta Vencida'
                                  "
                                  @click="proximaConsultaVencida"
                                ></b-icon>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ./Team member -->
                  <!-- Team member -->
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div
                      class="image-flip"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div class="mainflip">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class="img-fluid"
                                  src="https://img.lovepik.com/photo/50112/2310.jpg_wh860.jpg"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Proximas Consultas</h4>
                              <p class="card-text">
                                Veja qual a Proxima consulta do dia
                              </p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="backside shadow">
                          <div class="card">
                            <div class="card-body text-center mt-1">
                              <h4 class="card-title">
                                Consulta <b-badge variant="info">5</b-badge>
                              </h4>
                              <p class="card-text">
                                Nome do Paciente: André martins silva
                              </p>
                              <p class="card-text">Horario: 12:30</p>
                              <p class="card-text">Data: 12/12/1222</p>
                            </div>
                            <div class="flexIcon">
                              <div>
                                <b-icon
                                  icon="arrow-left-circle-fill"
                                  class="bg-success rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Consulta Vencida Anterior'
                                  "
                                ></b-icon>
                              </div>
                              <div>
                                <p class="text-info">1 de 5</p>
                              </div>
                              <div>
                                <b-icon
                                  icon="arrow-right-circle-fill"
                                  class="bg-success rounded p-1 icone"
                                  variant="light"
                                  font-scale="2"
                                  v-b-popover.hover.top="
                                    'Proxima Consulta Vencida'
                                  "
                                ></b-icon>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ./Team member -->
                  <!-- Team member -->

                  <!-- ./Team member -->
                  <!-- Team member -->

                  <!-- ./Team member -->
                  <!-- Team member -->

                  <!-- ./Team member -->
                </div>
              </div>
            </section>

            <!-- Contact-->
          </b-container>

          <b-card-group deck>
            <b-card
              header-bg-variant="info"
              header-text-variant="white"
              header-tag="header"
              class="text-center shadow-sm bg-white rounded"
            >
              <template v-slot:header>
                <h6 class="mb-0">PROXIMAS CONSULTAS</h6>
              </template>
              <Chart />
              <b-card
                header="Resumo Financeiro"
                header-bg-variant="primary"
                header-text-variant="light"
                class="shadow"
              >
                <div>
                  <label for="" class="text-success"
                    >Total de Receita :
                    <u class="text-dark">R$ 1000,00</u></label
                  >
                </div>
                <div>
                  <label for="" class="text-dark"
                    >Total de Despesas :
                    <u class="text-dark">R$ 1920,00</u></label
                  >
                </div>
                <hr />
                <div>
                  <label for="" class="text-warning"
                    >Total Líquido : <u class="text-dark">R$ 1920,00</u></label
                  >
                </div>
              </b-card>
            </b-card>

            <b-card class="text-center shadow-sm bg-white rounded" id="card1">
              <div class="card1">
                <Calendar />
              </div>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Endereço</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    4923 Rua Bom Jardim, Viçosa-MG
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Telefone</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">(55) 9902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
      <footer
        v-if="showOptionRelatorio == true"
        id="sticky-footer-Home"
        class="py-4 text-white-50"
      >
        <div class="container text-center">
          <b-button
            pill
            variant="light"
            @click="read(idPacienteAcoes)"
            class="mr-2"
            type="submit"
          >
            <b-icon-person-check-fill
              submit
              class="mr-3"
            ></b-icon-person-check-fill
            >Atendidos Hoje
          </b-button>

          <b-button
            pill
            variant="light"
            @click="deletePaciente(idPacienteAcoes)"
            class="mr-2"
          >
            <b-icon-arrow-clockwise submit class="mr-3"></b-icon-arrow-clockwise
            >Relatório Financeiro
          </b-button>

          <b-button pill class="mr-2" variant="light">
            <b-icon-x class="mr-3 mb-1"></b-icon-x>Relatório Consultas
          </b-button>

          <b-button pill class="mr-2" variant="light">
            <b-icon-x class="mr-3 mb-1"></b-icon-x>Aniversariantes
          </b-button>

          <b-button pill class="mr-2" variant="light">
            <b-icon-x class="mr-3 mb-1"></b-icon-x>Consultas Vencidas
          </b-button>
          <b-button pill class="mr-2" @click="hiddenOption" variant="danger">
            <b-icon-x class="mb-1"></b-icon-x>
          </b-button>
        </div>
      </footer>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PacienteService from "../../services/paciente";
import moment from "moment";
import AgendaService from "../../services/agenda";


export default {
  components: {
    CardHome: () => import("./CardHome"),
    Chart: () => import("../Chart/Chart"),
    Calendar: () => import("../Agenda/Calendar"),
  },
  data() {
    return {
      computed: {
        ...mapState({
          pacientes: (state) => state.option,
        }),
      },
      agendamentosDia: 0,
      consultasVencidasCard: 0,
      showOptionRelatorio: false,
      pacientesCadastrados: 0,
      indexConsultaVencida: 0,
      renderConsultasVencidas: false,
      items: [
        { Paciente: 40, Data_Consulta: "10/10/2020", Nome: "Macdonald" },
        { Paciente: 21, Data_Consulta: "10/12/2020", Nome: "Shaw" },
        { Paciente: 89, Data_Consulta: "12/10/2020", Nome: "Wilson" },
        { Paciente: 38, Data_Consulta: "09/07/2020", Nome: "Carney" },
        { Paciente: 21, Data_Consulta: "10/10/2020", Nome: "Shaw" },
        { Paciente: 89, Data_Consulta: "01/11/2020", Nome: "Wilson" },
        { Paciente: 38, Data_Consulta: "14/10/2020", Nome: "Carney" },
        { Paciente: 21, Data_Consulta: "10/10/2020", Nome: "Shaw" },
        { Paciente: 89, Data_Consulta: "11/06/2020", Nome: "Wilson" },
      ],
      dadosClinica : [],
      consultasVencidas: [],
      aniversarianteDoMes: [],
      indexAniversario: 0,
      consultas: 0,
      consultasMes: 0,
      message: `https://api.whatsapp.com/send?phone=55${this.aniversarianteDoMes}&text=olaa`,
    };
  },
  methods: {
    ...mapActions(["alterOption"]),
    showOption($event) {
      this.showOptionRelatorio = $event.showOption;
    },
    hiddenOption() {
      this.showOptionRelatorio = false;
    },

    aniversarioAnterior() {
      if (this.indexAniversario > 0) {
        this.indexAniversario = this.indexAniversario - 1;
      }
    },

    proximaConsultaVencida() {
      if (this.indexConsultaVencida < this.consultasVencidas[0].length - 1) {
        this.indexConsultaVencida = this.indexConsultaVencida + 1;
      }
    },

    anteriorConsultaVencida() {
      if (this.indexConsultaVencida > 0) {
        this.indexConsultaVencida = this.indexConsultaVencida - 1;
      }
    },

    aniversarioProximo() {
      if (this.indexAniversario < this.aniversarianteDoMes.length - 1) {
        this.indexAniversario = this.indexAniversario + 1;
      }
    },

    enviarMsgWhatsapp() {
      window.open(
        `https://api.whatsapp.com/send?phone=55${
          this.aniversarianteDoMes[this.indexAniversario].telefone
        }&text=olaa`,
        "_blank"
      );
    },

    consultaVencida() {
      AgendaService.readDateVencimento(moment().format("YYYY-MM-DD")).then(
        (result) => {
         
          if(result.data.agendamentos.length > 0){
            this.consultasVencidas.push(result.data.agendamentos);
            this.consultasVencidas[0].map((el) => {
              el.data = moment(el.data).format("DD/MM/YYYY");
              el.dataVencimento = moment(el.dataVencimento).format("DD/MM/YYYY");
              this.renderConsultasVencidas = true;
            });
          }
        }
      );
    },

    readAgendamentosDia() {
      AgendaService.readDateInner(moment().format("YYYY-MM-DD")).then(
        (result) => {
          this.agendamentosDia = result.data.agendamentos.length;
        }
      );
    },

    _numDias() {
      var objData = new Date(),
        numAno = objData.getFullYear(),
        numMes = objData.getMonth() + 1,
        numDias = new Date(numAno, numMes, 0).getDate();
      return numDias;
    },

    readConsultasDia() {
      AgendaService.readDateAgendamentoFinalizado(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ).then((result) => {
        this.consultas = result.data.agendamentos.length;
      });
    },

    readConsultasMes() {
      AgendaService.readDateAgendamentoFinalizado(
        `${moment().format("YYYY-MM")}-01`,
        `${moment().format("YYYY-MM")}-${this._numDias()}`
      ).then((result) => {
        this.consultasMes = result.data.agendamentos.length;
      });
    },

    

    aniversariantes() {
      PacienteService.readAll().then((result) => {
        this.pacientesCadastrados = result.data.result.length;
        result.data.result.map((el) => {
          if (
            moment(el.dataNascimento).format("DD/MM/YYYY").substring(3, 5) ==
            moment().format("DD/MM/YYYY").substring(3, 5)
          ) {
            el.dataNascimento = moment(el.dataNascimento).format("DD/MM/YYYY");
            this.aniversarianteDoMes.push(el);
          }
        });
      });
    },
  },

  beforeMount(){
    this.readAgendamentosDia();
    this.consultaVencida();
    this.aniversariantes();
    this.readConsultasDia();
    this.readConsultasMes();
  },

  created() {
    console.log(sessionStorage.getItem('token'))
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: rgba(0, 0, 0, 0) !important;
  width: 100%;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #f5f8f7;
  margin-bottom: 50px;
  text-transform: uppercase;
}
section {
  font-family: "Monda", sans-serif;
}

#team .card {
  border: none;
  background: #ffffff;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  width: 330px;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #007b5e !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.home {
  margin-top: 110px;
}

.card1 {
  
  border: none;
}

header {
  background-color: brown;
}

navbar {
  background: #0082c8; /* fallback for old browsers */
  height: 160px;
}

#sticky-footer-Home {
  margin-left: 65px;
  flex-shrink: none;
  position: fixed;
  margin-right: 25%;
  top: 80px;
  margin-bottom: 4px;
  width: 72%;
  background: linear-gradient(0deg, #015ea0 0%, #0082c8 100%);
  border-radius: 55px;
  padding: 4;
  float: left;
}

@media (max-width: 700px) {
  #sticky-footer-Home {
    position: unset;
    display: flex;
    width: 100%;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 10px;
    align-items: center;
  }
  #sticky-footer-Home button {
    width: 100%;
    margin-bottom: 5px;
  }
  .testando {
    background: white;
    box-shadow: none;
  }
  .backside {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  }
}

#cardteste {
  overflow: scroll;
  height: 100px;
}
.flexIcon {
  display: flex;
  justify-content: space-around;
}

.aniversarioContent {
  border: 4px solid #2de2b8d7;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  color: #007b5e;
}
.fa-facebook {
  color: rgb(83, 247, 68);
}

.fa-whatsapp:hover {
  cursor: pointer;
}

.fa-facebook:hover {
  cursor: pointer;
}

.icone:hover {
  cursor: pointer;
}

.consultasContent {
  border: 4px solid #2de2b8d7;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  color: #007b5e;
}
</style>