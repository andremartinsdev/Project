<template>
  <div>
    <div>
      <b-navbar toggleable="sm" class="navBar" fixed="top">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <div class="mb-1">
          <b-avatar text="BV"></b-avatar>
          <b-navbar-brand class="ml-3">BootstrapVue</b-navbar-brand>
        </div>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Navbar text</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container class="home" fluid>
      <Menu @mostrar="showOption($event)" />
      <CardHome class="mb-4" />
      <b-row class="justify-content-center flex-wrap-wrap mt-5">
        <b-col cols="12" class="teste2">
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
              <div class="card1">
                <b-table striped hover :items="items"></b-table>
              </div>
            </b-card>

            <b-card class="text-center shadow-sm bg-white rounded" id="card1">
              <div class="card1">
                <Calendar />
              </div>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-container>
        <section id="team" class="pb-5">
          <div class="container">
            <h5 class="section-title h3">FUNCIONARIOS</h5>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Cortes de Cabelo e Barbas</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
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
                              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                              alt="card image"
                            />
                          </p>
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-plus"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Sunlimetech</h4>
                          <p class="card-text">
                            This is basic card with image on top, title,
                            description and button.This is basic card with image
                            on top, title, description and button.This is basic
                            card with image on top, title, description and
                            button.
                          </p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                class="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ./Team member -->
            </div>
          </div>
        </section>

        <!-- Contact-->
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
      </b-container>
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
import CardHome from "./CardHome";
import Menu from "./Menu";
import Calendar from "../Agenda/Calendar";
import { mapState, mapActions } from "vuex";
import ServiceClinica from '../../services/clinica'

export default {
  components: {
    CardHome,
    Menu,
    Calendar,
  },
  data() {
    return {
      computed: {
        ...mapState({
          pacientes: (state) => state.option,
        }),
      },
      showOptionRelatorio: false,
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
    };
  },
  methods: {
    ...mapActions(["alterOption"]),
    showOption($event) {
      this.showOptionRelatorio = $event.showOption;
      console.log(this.showOptionRelatorio);
    },
    hiddenOption() {
      this.showOptionRelatorio = false;
    },
  },
  created(){
    ServiceClinica.read(1).then(result =>{
      localStorage.setItem("UUIDCLINICA", result.data.retorno[0].UUIDCLINICA)
      localStorage.setItem("IDCLINICA", result.data.retorno[0].IDCLINICA)
      this.$store.commit("DADOS_CLINICA", result.data.retorno[0])
    })
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: rgba(0, 0, 0, 0) !important;
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
  margin-top: 90px;
}

.card1 {
  overflow: auto;
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
}
</style>