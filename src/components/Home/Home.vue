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
                                  :src="logoAaniversario"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Aniversariantes do Mês</h4>
                              <p class="card-text">
                                Deseje um Feliz aniversario para seus Pacientes
                              </p>
                              <a
                                v-b-popover.hover="
                                  'Verifique todos os Pacientes Aniversariantes do Mês'
                                "
                                @click="showModalAniversariante"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
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
                                  :src="logoCalendar"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Consultas Vencidas</h4>
                              <p class="card-text">
                                Veja os Pacientes os quais suas Consultas
                                venceram
                              </p>
                              <a
                                v-b-popover.hover="
                                  'Verifique todas as consultas Vencidas no dia de Hoje'
                                "
                                @click="$bvModal.show('my-modal-consultas')"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
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
                                  :src="logoOpto"
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">Proximas Consultas</h4>
                              <p class="card-text">
                                Veja qual a Proxima consulta do dia
                              </p>
                              <a
                                v-b-popover.hover="
                                  'Verifique todas as consultas de Hoje'
                                "
                                @click="$bvModal.show('my-modal-proxConsultas')"
                                class="btn btn-primary btn-sm"
                                ><i class="fa fa-plus"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>

            <!-- Contact-->
          </b-container>

         
        </b-col>
      </b-row>
       <b-card class="text-center shadow bg-white rounded cardConteudo">
            <div class="card1">
              <Agendamento :agendamentos="this.fake"/>
            </div>
          </b-card>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <p class="small text-center text-black-50">{{ dataHoje }}</p>
                <div class="card-body text-center">
                  <b-icon-calendar2-date
                    variant="primary"
                    class="h2 mb-4"
                  ></b-icon-calendar2-date>
                  <h4 class="text-uppercase m-0 bg-primary text-light">
                    Agendados Para Hoje
                  </h4>
                  <hr class="my-4" />
                  <h3 class="text-primary">{{ countAgenda }} Agendamento(s)</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <p class="small text-center text-black-50">{{ dataHoje }}</p>
                <div class="card-body text-center">
                  <b-icon-arrow-up-circle-fill
                    class="h1 mb-4"
                    variant="success"
                  ></b-icon-arrow-up-circle-fill>
                  <h4 class="text-uppercase m-0 bg-success text-light">
                    Contas a Receber
                  </h4>
                  <hr class="my-4" />
                  <div>
                    <h3 class="text-success">
                      {{ resumoFinaceiro.totalReceber }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <p class="small text-center text-black-50">{{ dataHoje }}</p>
                <div class="card-body text-center">
                  <b-icon-arrow-down-circle-fill
                    class="h1 mb-4"
                    variant="danger"
                  ></b-icon-arrow-down-circle-fill>
                  <h4 class="text-uppercase m-0 bg-danger text-light">
                    Contas a Pagar
                  </h4>
                  <hr class="my-4" />
                  <div>
                    <h3 class="text-danger">
                      {{ resumoFinaceiro.totalPagar }}
                    </h3>
                  </div>
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
      


      <!-- <footer
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
      </footer> -->
    </b-container>
    <b-modal
      id="modal-xl-t"
      hide-footer
      size="xl"
      title="Seja Bem Vindo ao BMS Opto ... Temos algumas instruções para você"
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
    <ModalAniversariante />
    <ModalConsultaVencida />
    <ModalProxConsultas />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PacienteService from "../../services/paciente";
import moment from "moment";
import AgendaService from "../../services/agenda";
import DespesaServices from "../../services/despesas";
import ReceitaServices from "../../services/receita";
import ModalAniversariante from "../Home/Modals/ModalAniversariante";
import ModalConsultaVencida from "../Home/Modals/ModalConsultaVencida";
import ModalProxConsultas from "../Home/Modals/ModalProxConsultas";
import ClinicaService from "../../services/clinica";
import imgTela from "../../assets/tela-min.png";
import imgTela2 from "../../assets/tela2-min.png";
import logoCalendar from "../../assets/logoCalendar.jpg";
import logoOpto from "../../assets/logoOpto.jpg";
import logoAaniversario from "../../assets/logoAaniversario.jpg";
import Agendamento from "../Agenda/Agendamento";

export default {
  components: {
    CardHome: () => import("./CardHome"),
    // Calendar: () => import("../Agenda/Calendar"),
    ModalAniversariante,
    ModalConsultaVencida,
    ModalProxConsultas,
    Agendamento
  },
  computed: {
    ...mapState({
      pacientes: (state) => state.option,
    }),
  },
  data() {
    return {
      logoCalendar: logoCalendar,
      logoOpto: logoOpto,
      logoAaniversario:logoAaniversario,
      imgTela: imgTela,
      imgTela2: imgTela2,
      agendamentosDia: 0,
      resumoFinaceiro: {
        totalReceber: 0,
        totalPagar: 0,
        liquido: 0,
      },
      proximaConsultaLoad: false,
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
      dadosClinica: {
        email: "",
        endereco: "",
        telefone: "",
        cidade: "",
        bairro: "",
        numero: "",
      },
      fake: [{uuid: '1212121', nomePaciente: 'Andre', horario:'12:22'}],
      dataHoje: moment().format("DD/MM/YYYY"),
      proximasConsultas: [],
      consultasVencidas: [],
      aniversarianteDoMes: [],
      indexAniversario: 0,
      indexProxiConsulta: 0,
      consultas: 0,
      countAgenda: 0,
      consultasMes: 0,
      message: `https://api.whatsapp.com/send?phone=55${this.aniversarianteDoMes}&text=olaa`,
    };
  },
  methods: {
    async countAgendamento() {
      const count = await AgendaService.countAgendamento(
        moment().format("YYYY-MM-DD")
      );
      this.countAgenda = count.data.result[0].total;
    },
    async readDadosClinica() {
      this.dadosClinica = [];
      const clinica = await ClinicaService.read();
      if (clinica.data.result.length > 0) {
        this.dadosClinica.email = clinica.data.result[0].email;
        this.dadosClinica.endereco = clinica.data.result[0].endereco;
        this.dadosClinica.telefone = clinica.data.result[0].telefone;
        this.dadosClinica.bairro = clinica.data.result[0].bairro;
        this.dadosClinica.numero = clinica.data.result[0].numero;
        this.dadosClinica.cidade = clinica.data.result[0].cidade;
        this.$store.commit("uuidClinica", clinica.data.result[0].uuid)
      }
    },

    showModalAniversariante() {
      this.$bvModal.show("my-modal");
    },
    proximaConsultaProxConsulta() {
      if (this.indexProxiConsulta < this.proximasConsultas.length - 1) {
        this.indexProxiConsulta = this.indexProxiConsulta + 1;
      }
    },

    anteriorProxConsulta() {
      if (this.indexProxiConsulta > 0) {
        this.indexProxiConsulta = this.indexProxiConsulta - 1;
      }
    },

    async readProximasConsultas() {
      const consultas = await AgendaService.readDateProximasConsultas(
        moment().format("YYYY-MM-DD")
      );
      consultas.data.consultas.forEach((element) => {
        element.data = moment(element.data).format("DD/MM/YYYY");
        this.proximasConsultas.push(element);
      });
      if (consultas.data.consultas.length > 0) {
        this.proximaConsultaLoad = true;
      }
    },

    async countPaciente() {
      const countPaciente = await PacienteService.countPaciente();
      this.pacientesCadastrados = countPaciente.data.quantidade;
    },
    ...mapActions(["alterOption"]),
    showOption($event) {
      this.showOptionRelatorio = $event.showOption;
    },
    hiddenOption() {
      this.showOptionRelatorio = false;
    },

    // aniversarioAnterior() {
    //   if (this.indexAniversario > 0) {
    //     this.indexAniversario = this.indexAniversario - 1;
    //   }
    // },

    async readDespesa() {
      const valorDespesa = await DespesaServices.readValorDespesa(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      );
      if(valorDespesa.data.result[0].total != null){
        this.resumoFinaceiro.totalPagar = valorDespesa.data.result[0].total.toLocaleString(
          "pt-br",
          { style: "currency", currency: "BRL" }
        );
      }
    },

    async readValorReceita() {
      const valorReceita = await ReceitaServices.readValorReceita(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      );
     
      if(valorReceita.data.result[0].total != null){
this.resumoFinaceiro.totalReceber = valorReceita.data.result[0].total.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      }
      
    },

    async readValorLiquido() {
      await this.readValorReceita();
      await this.readDespesa();

      var total =
        parseFloat(this.resumoFinaceiro.totalReceber) -
        parseFloat(this.resumoFinaceiro.totalPagar);
      this.resumoFinaceiro.liquido = !total ? 0 : total.toFixed(2);
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
          if (result.data.agendamentos.length > 0) {
            this.consultasVencidas.push(result.data.agendamentos);
            this.consultasVencidas[0].map((el) => {
              el.data = moment(el.data).format("DD/MM/YYYY");
              el.dataVencimento = moment(el.dataVencimento).format(
                "DD/MM/YYYY"
              );
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
      var mes = parseInt(moment().format("DD/MM/YYYY").substring(3, 5));
      var dia = moment().format("DD/MM/YYYY").substring(0, 2);
      PacienteService.readAniversariante(mes, dia).then((result) => {
        result.data.map((el) => {
          el.dataNascimento = moment(el.dataNascimento).format("DD/MM/YYYY");
          this.aniversarianteDoMes.push(el);
        });
      });
    },
  },

  beforeMount() {
    if (this.$route.path === "/Home") {
      ClinicaService.read().then((result) => {
        if (result.data.result.length === 0) {
          this.$bvModal.show("modal-xl-t");
        }
      });
    }
    this.countAgendamento();
    this.readDadosClinica();
    this.readProximasConsultas();
    this.countPaciente();
    this.readValorLiquido();
    this.readAgendamentosDia();
    this.consultaVencida();
    this.aniversariantes();
    this.readConsultasDia();
    this.readConsultasMes();
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

.proximaConsulta {
  border: 4px solid #2de2b8d7;
  margin: 15px;
  border-radius: 10px;
  color: #007b5e;
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
  height: 310px;
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

.cardConteudo {
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
}

.home {
  margin-top: 10px;
}

.card1 {
  border-radius: 10px;
  width: 100%;
  height: 100%;
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
  .cardConteudo {
    display: none;
  }
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