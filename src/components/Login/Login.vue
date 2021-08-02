<template>
<div>
  <div class="imgOlho">
        <img :src="logoOlho" width="500" alt="">
    </div>
    <h1> BMS Optometrista </h1>
    
    <form action="">
    <h2>Faça seu Login</h2>

        <img :src="logoBms" alt="" srcset="">
        <div class="containerInputs">
           
            <input type="text" v-model="login.cpfcnpj" placeholder="Login" />
            <input type="password" v-model="login.senha" placeholder="Senha" />
            <input type="submit" @click="logar" value="Entrar" />
        </div>
        <small>&copy; BMS LTDA 2021 </small>
    </form>
</div>
  <!-- <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto teste">
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
  </div> -->
</template>

<script>
import logo from "../../../public/logo.png";
import logoOlho from "../../assets/LogoOlho2.png";
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
      event.preventDefault()
      if (this.login.cpfcnpj === "" || this.login.senha === "") {
        this.showAlert("info", "Campo de Login e Senha devem ser Preenchidos");
        return;
      }
      LoginService.logar(this.login.cpfcnpj, this.login.senha)
        .then((result) => {
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
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background: #43c6ac;
            /* fallback for old browsers */
            background: -webkit-linear-gradient(to bottom,
                    #191654,
                    #43c6ac) fixed;
            /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to bottom,
                    #191654,
                    #43c6ac) fixed;
        }

        form {
            background-color: white;
            max-width: 500px;
            width: 70%;
            padding-top: 351px;
            height: 100%;
            padding-left: 50px;
            padding-right: 50px;
            position: absolute;

        }

        form input[type=text]:focus,
        form input[type=password]:focus {
            outline: none;

        }

        form input[type=text]:hover,
        form input[type=password]:hover {
            padding-left: 30px;
            color: turquoise;
        }


        form input[type=submit]:hover {
            background-color: rgb(45, 167, 154);
        }

        form input[type=submit] {
            width: 100%;
            height: 45px;
            border-radius: 5px;
            border: none;
            margin-top: 35px;
            background-color: turquoise;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: 0.5s;
            letter-spacing: .1rem;
        }

        form input[type=text],
        form input[type=password] {
            width: 100%;
            
            height: 45px;
            border: 1px solid #43c6ac;
            padding-left: 10px;
            margin: 10px 0;
            font-size: 15px;
            transition: 0.7s;
            color: #666;
            border-left: none;
            border-right: none;
            border-top: none;
            color: rgba(64, 224, 208, 0);
            text-decoration: none;
            letter-spacing: .1rem;
        }
        small{
            left: 15px;
            position: absolute;
            top: 96%; 
        }

        .imgOlho{
            position: absolute;
            right: 50%;
            top: 10%;
           
        }

        img {
            margin: auto 16%;
            position: absolute;
            top: 6%;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            top: 67%;
            left: 48%;
            color: rgb(243, 246, 247);
            font-size: 50px;
            letter-spacing: .4rem;
        }
       
        h2{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 25px;
            letter-spacing: .2rem;
            text-align: center;
            position: absolute;
            top: 30%;
            left: 24%;
            }
/* 
        .containerInputs{
            position: absolute;
            background-color: rgba(0, 128, 128, 0.089);
           width: 95%;
           left: 10px;
           padding: 20px;
           border-radius: 10px;
           
        } */

        @media (max-width: 700px) {

            .imgOlho{
                display: none;
            }

           

            h1{
                display: none;
            }
            form {
                width: 95%;
                margin-left: 2.5%;
                padding-left: 15px;
                padding-right: 15px;
            }

            form input[type=text],
            form input[type=password] {
                width: 100%;
            }
        }

        @media (max-width: 1033px) {
            .imgOlho{
                display: none;
            }

            h1{
                display: none;
            }
        }
</style>