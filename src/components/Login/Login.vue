<template>
  <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto teste">
    <div class="col-lg-6 containerMenu">
      <div class="card2 card px-4 py-5">
        <div class="row"><img :src="logoOlho" class="logo2" /></div>

        <div class="row"></div>
        <div class="row mb-4 mt-4 titulo">
          <div class=""></div>
          <img :src="logoBms" class="teste2" />
          <div class=""></div>
        </div>
        <div class="row px-3">
          <label class="mb-1">
            <h6 class="mb-0 text-sm">Usuario</h6>
          </label>
          <input
            class="mb-4"
            type="text"
            v-model="login.cpfcnpj"
            name="email"
            placeholder="Usuario . . ."
          />
        </div>
        <div class="row px-3">
          <label class="mb-1">
            <h6 class="mb-0 text-sm">Senha</h6>
          </label>
          <input
            type="password"
            name="password"
            v-model="login.senha"
            placeholder="Senha . . ."
          />
        </div>
        <div class="row px-3 mb-4"></div>
        <b-button
          type="submit"
          pill
          block
          class="btn btn-blue text-center"
          @click="logar"
          >Logar</b-button
        >
      </div>

      <footer class="footer">
        <div class="bg-blue py-4">
          <div class="row px-3">
            <small class="ml-4 ml-sm-5 mb-2"
              >Copyright &copy; 2021. All rights reserved.</small
            >
            <div class="social-contact ml-4 ml-sm-auto">
              <span class="fa fa-facebook mr-4 text-sm"></span>
              <span class="fa fa-google-plus mr-4 text-sm"></span>
              <span class="fa fa-linkedin mr-4 text-sm"></span>
              <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import logo from "../../../public/logo.png";
import logoOlho from "../../assets/LogoOlho.png";
import logoBms from "../../assets/LogoBms.png";
import LoginService from "../../services/login";

export default {
  data() {
    return {
      login: {
        cpfcnpj: "",
        senha: "",
      },
      mainProps: { width: 470, height: 450, class: "m1" },
      logo: logo,
      logoOlho: logoOlho,
      logoBms: logoBms,
    };
  },

  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },
    async logar() {
      if (this.login.cpfcnpj === "" || this.login.senha === "") {
        this.showAlert("info", "Campo de Login e Senha devem ser Preenchidos");
        return;
      }
      LoginService.logar(this.login.cpfcnpj, this.login.senha)
        .then((result) => {
          console.log(result)
          sessionStorage.setItem("token", result.data.token);
          this.$router.push({
              path: "/Home",
            })
        })
        .catch(() => {
          this.showAlert("info", "Ocorreu um erro ao efetuar login");
        })
       
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #1a237e;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 10px;
  width: 50%;
}

.card2 {
  margin: 0 auto;
  width: 100%;
}

.logo {
  width: 200px;
  height: 100px;
  margin: 0 auto;
}

button {
  margin: 0 auto;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.linkedin {
  background-color: #2867b2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  height: 3px;
  width: 35%;
  background-color: #e0e0e0;
  margin-top: 10px;
  margin-left: 20px;
}

.or {
  width: 20%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 12px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: rgb(21, 32, 182);
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 991px) {
  .logo {
    margin: 0 auto;
  }

  .titulo {
    display: none;
  }

  .logo2 {
    display: none;
  }
  .img {
    width: 220px;
    height: 200px;
  }
  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
  .card0 {
    width: 100%;
    overflow: auto;
    margin-top: 0;
  }
  .footer {
    z-index: 1000;
  }
}

.logo2 {
  width: 200px;
  margin: 0 auto;
}

.teste {
  height: 100%;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
.img {
  margin: 0 auto;
}

.teste2 {
  margin: 0 auto;
  width: 100px;
}
.containerMenu {
  margin: 0 auto;
}
</style>