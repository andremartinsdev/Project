<template>
  <div>
    <Sidebar />
    <div class="formCliente">
      <div>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Cadastro" active class="formClienteCard">
              <b-card class="formClienteCard">
                <b-container class="col-sm-12" fluid>
                  <h3 class="mb-2">
                    Cadastro Clínica
                    <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                  </h3>
                  <b-input v-model="clinica.uuid" hidden></b-input>
                  <b-avatar
                    :src="clinica.logo"
                    style="margin-left: 45%"
                    class="mt-4 mb-4"
                    size="6rem"
                  ></b-avatar>

                  <form class="row">
                    <div class="form-group col-sm-5">
                      <input
                        type="text"
                        v-model="clinica.uuid"
                        hidden
                        class="form-control"
                      />
                      <label>Nome Clínica</label>
                      <b-form-input
                        v-model="clinica.nomeClinica"
                        trim
                        max="50"
                      ></b-form-input>
                    </div>

                    <div class="form-group col-sm-4">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        v-model="clinica.email"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-3">
                      <label for="exampleInputEmail1">Telefone</label>
                      <input
                        type="text"
                        v-model="clinica.telefone"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-2">
                      <b-form-radio
                        v-model="selected"
                        name="some-radios"
                        value="fisica"
                        >Pessoa Física (CPF)</b-form-radio
                      >
                      <b-form-radio
                        v-model="selected"
                        name="some-radios"
                        class="mb-0.5"
                        value="juridica"
                        >Pessoa Jurídica (CNPJ)</b-form-radio
                      >

                      <input
                        v-if="selected === 'fisica'"
                        v-mask="'###.###.###-##'"
                        type="text"
                        class="form-control"
                        v-model="clinica.cnpjcpf"
                      />
                      <input
                        v-else-if="selected === 'juridica'"
                        v-mask="'##.###.###/####-##'"
                        type="text"
                        class="form-control"
                        v-model="clinica.cnpjcpf"
                      />
                    </div>
                    <div class="form-group col-sm-2 mt-3">
                      <label for="exampleInputEmail1">Endereço</label>
                      <input
                        type="text"
                        v-model="clinica.endereco"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-5 mt-3">
                      <label for="exampleInputEmail1">Bairro</label>
                      <input
                        type="text"
                        v-model="clinica.bairro"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-5">
                      <label for="exampleInputEmail1">Cidade</label>
                      <input
                        type="text"
                        v-model="clinica.cidade"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group mb-5 col-sm-2">
                      <label for="exampleInputEmail1">Estado</label>
                      <input
                        type="text"
                        v-model="clinica.estado"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group mb-5 col-sm-5">
                      <label for="exampleInputEmail1"
                        >Logo (Apenas imagem .png)</label
                      >

                      <b-form-file
                        v-model="file"
                        :state="Boolean(file)"
                        placeholder="Selecione sua Logo"
                        drop-placeholder="Drop file here..."
                      ></b-form-file>

                      <!-- <input
                        v-b-popover.hover.bottom="
                          'A Logo só sera renderizada após o recarregamento da Pagina'
                        "
                        type="text"
                        v-model="clinica.logo"
                        class="form-control"
                      /> -->
                    </div>
                  </form>
                  <div class="btns">
                    <b-button
                      variant="success"
                      @click="saveClinica"
                      class="mr-2"
                      type="submit"
                      size="sm"
                    >
                      <b-icon-person-check-fill class="mr-2">
                      </b-icon-person-check-fill>
                      Salvar
                    </b-button>
                    <b-button variant="warning" size="sm" class="mr-2">
                      <b-icon-arrow-clockwise
                        class="mr-3"
                      ></b-icon-arrow-clockwise
                      >Limpar
                    </b-button>
                    <b-button
                      variant="primary"
                      size="sm"
                      @click="aplicar"
                      class="mr-2 float-right"
                    >
                      <b-icon-image class="mr-3"></b-icon-image>Salvar Logo
                    </b-button>
                  </div>
                </b-container>
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import ClinicaService from "../../services/clinica";
import { http } from "../../services/config";
import Sidebar from "../../components/SidebarNavbar.vue";
// import baseUrl from '../../../vue.config'
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      selected: "juridica",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
      arquivoSelected: false,
      file: null,
      clinica: {
        uuid: "",
        nomeClinica: "",
        cnpjcpf: "",
        telefone: "",
        endereco: "",
        bairro: "",
        numero: "",
        cep: "",
        email: "",
        cidade: "",
        estado: "",
        logo: "",
      },

      editar: true,
    };
  },
  created() {
    this.read();
    this.readLogo();
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

    async read() {
      try {
        const result = await ClinicaService.read();
        if (result.data.result.length === 0) {
          return;
        }
        Object.assign(this.clinica, result.data.result[0]);
        this.clinica.logo = `${http.prototype.constructor.defaults.baseURL}/Clinica/image/logo/${result.data.result[0].uuid}`;
        console.log(this.clinica.logo)
      } catch (error) {
        // console.log("erro");
      }
    },

    async aplicar() {
      try {
        if (this.file != null) {
          const file = document.querySelector("input[type=file]").files[0];
          const logo = await this.toBase64(file);
          await ClinicaService.saveLogo(logo, this.clinica.uuid);
          // window.location.reload();
          return;
        }
        this.showAlert("info", "Por favor Selecione uma Imagem");
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro ao Salvar Logo");
      }
    },

    async saveClinica() {
      if (this.clinica.uuid) {
        try {
          // this.clinica.logo = await this.toBase64(file);
          await ClinicaService.update(this.clinica, this.clinica.uuid);
          this.showAlert("success", "Registro Atualizado com Sucesso");
          this.editar = true;
        } catch (error) {
          this.showAlert("error", "Ops! ocorreu um erro a Atualizar Registro");
        }
      } else {
        try {
          // const file = document.querySelector('input[type=file]').files[0]
          // this.clinica.logo = await this.toBase64(file);
          const result = await ClinicaService.save(this.clinica);
          this.clinica.uuid = result.data.result.uuid;
          this.showAlert("success", "Registro Salvo com Sucesso");
          this.editar = true;
        } catch (error) {
          this.showAlert("error", "Ops! ocorreu um erro o Salvar Registro");
        }
      }
    },

    async readLogo() {
      //  const logo = await ClinicaService.readLogo()
      //  this.clinica.logo = logo
      //  console.log(logo)
      //  var img = new Image();
      //   img.src = logo.data;
      //  console.log(img)
    },

    toBase64(file) {
      try {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      } catch (error) {
        this.showAlert("error", "Ops! ocorreu um erro o base64");
      }
      
    },
  },
};
</script>

<style>
.containerCadastroClinica {
  margin-top: 100px;
  width: 100%;
  padding: 10px;
}

.flexContainer {
  display: flex;
  margin: 10px;
  border: 1px solid black;
}
.logo {
  width: 50%;
  margin: 0 auto;
}

.logoFlex {
  width: 100%;
}

.avat {
  margin: 0 auto;
}
</style>