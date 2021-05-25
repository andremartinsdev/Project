<template>
  <div>
    <div class="formCliente">
      <div>
        <b-card no-body>
          <b-tabs  pills card>
            <b-tab title="Cadastro" active class="formClienteCard">
              <b-card class="formClienteCard">
                <b-container class="col-sm-12" fluid>
                  <h3 class="mb-2">
                    Cadastro Clínica
                    <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                  </h3>

                   <b-avatar :src="clinica.logo" style="margin-left: 45%; " class="mt-4 mb-4" size="6rem"></b-avatar>

                  <form class="row">
                    <div class="form-group col-sm-5">
                      <input type="text" v-model="clinica.uuid" hidden class="form-control" />
                      <label >Nome Clínica</label>
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
                      <label for="exampleInputEmail1">CNPJ/CPF</label>
                      <input
                        v-mask="'###.###.###-##'"
                        type="text"
                        class="form-control"
                        v-model="clinica.cnpjcpf"
                      />
                    </div>
                    <div class="form-group col-sm-2">
                      <label for="exampleInputEmail1">Endereço</label>
                      <input
                        type="text"
                        v-model="clinica.endereco"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-5">
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
                      <label for="exampleInputEmail1">Logo (Url da Imagem)</label>
                      <input
                       v-b-popover.hover.bottom="'A Logo só sera renderizada após o recarregamento da Pagina'" 
                        type="text"
                        v-model="clinica.logo"
                        class="form-control"
                      />
                    </div>
                  </form>
                  <div class="btns">
                    <b-button variant="success" @click="saveClinica" class="mr-2" type="submit">
                      <b-icon-person-check-fill class="mr-2">
                      </b-icon-person-check-fill>
                      Salvar
                    </b-button>
                    <b-button variant="warning" class="mr-2">
                      <b-icon-arrow-clockwise
                        class="mr-3"
                      ></b-icon-arrow-clockwise
                      >Limpar
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

  <!-- <div class="containerCadastroClinica">
    <b-card header="Cadastro Clínica">
      <input
        placeholder="Nome Clínica"
        type="text"
        class="form-control col-sm-5"
        hidden
        v-model="clinica.uuid"
      />
      <b-form inline>
        <label for="" class="mr-2 ml-2 mt-2">Nome da Clínica :</label>
        <input
          placeholder="Nome Clínica"
          type="text"
          class="form-control col-sm-5"
          :disabled="editar"
          v-model="clinica.nomeClinica"
        />
        <label for="" class="ml-2 mr-2 mt-2">CNPJ/CPF :</label>
        <input
          placeholder="CNPJ/CPF"
          type="text"
          class="form-control col-sm-2"
          :disabled="editar"
          v-model="clinica.cnpjcpf"
        />
        <label for="" class="ml-2 mr-2 mt-2">Número :</label>
        <input
          placeholder="Número"
          type="text"
          :disabled="editar"
          v-model="clinica.numero"
          class="form-control col-sm-1"
        />
      </b-form>

      <b-form inline class="mt-3">
        <label for="" class="ml-2 mr-2 mt-2">Endereço :</label>
        <input
          placeholder="Endereço"
          type="text"
          class="form-control col-sm-3"
          :disabled="editar"
          v-model="clinica.endereco"
        />
        <label for="" class="ml-2 mr-2 mt-2">Bairro :</label>
        <input
          placeholder="Bairro"
          type="text"
          v-model="clinica.bairro"
          :disabled="editar"
          class="form-control col-sm-3"
        />

        <label for="" class="ml-2 mr-2 mt-2">Cidade :</label>
        <input
          placeholder="Cidade"
          type="text"
          v-model="clinica.cidade"
          :disabled="editar"
          class="form-control col-sm-3"
        />
      </b-form>
      <b-form inline class="mt-3">
        <label for="" class="ml-2 mr-2 mt-2">CEP :</label>
        <input
          placeholder="CEP"
          type="text"
          v-model="clinica.cep"
          :disabled="editar"
          class="form-control col-sm-1"
        />
        <label for="" class="ml-2 mr-2 mt-2">Telefone :</label>
        <input
          v-model="clinica.telefone"
          placeholder="Telefone"
          type="text"
          class="form-control col-sm-5"
          :disabled="editar"
        />
      </b-form>

      <b-avatar-group size="5rem" class="avat"> </b-avatar-group>
      <div class="mt-4 mb-4">
        <b-avatar class="ml-4" size="6rem" :src="clinica.logo"></b-avatar>
      </div>

      <div class="avat"></div>

      <label for="" class="text-center ml-3"
        ><small>Url da Imagem : (exemplo: http://imagemLogo.png)</small></label
      >

      <input
        placeholder="Url"
        type="text"
        class="form-control"
        v-model="clinica.logo"
        :disabled="editar"
      />
      <b-button variant="primary" class="mt-4" @click="saveClinica" block
        >Salvar</b-button
      >
      <b-button variant="primary" @click="editar = false" block
        >Editar</b-button
      >
    </b-card>
  </div> -->
</template>

<script>
import ClinicaService from "../../services/clinica";
export default {
  data() {
    return {
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
        logo:""
      },

      editar: true,
    };
  },
  created() {
    this.read();
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
        if(result.data.result.length === 0){
          return
        }
        this.clinica = result.data.result[0];
      } catch (error) {
        // console.log("erro");
      }
    },

    async saveClinica() {
      if (this.clinica.uuid) {
        try {
          await ClinicaService.update(this.clinica, this.clinica.uuid);
          this.showAlert("success", "Registro Atualizado com Sucesso");
          this.editar = true;
        } catch (error) {
          this.showAlert("error", "Ops! ocorreu um erro a Atualizar Registro");
        }
      } else {
        try {
          const result = await ClinicaService.save(this.clinica);
          this.clinica.uuid = result.data.result.uuid;
          this.showAlert("success", "Registro Salvo com Sucesso");
          this.editar = true;
        } catch (error) {
          this.showAlert("error", "Ops! ocorreu um erro o Salvar Registro");
        }
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