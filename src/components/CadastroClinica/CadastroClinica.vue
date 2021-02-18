<template>
  <div class="containerCadastroClinica">
    <b-card header="Cadastro Clínica">
      <div class="flexContainer">
        <div  class="col-sm-6">
          <label for="">Nome da Clínica</label>
          <input
            placeholder="Nome Clínica"
            type="text"
            class="form-control col-sm-12"
          />
        </div>

        <div class="col-sm-6">
          <label for="">Endereço</label>
          <input
            placeholder="Endereço"
            type="text"
            class="form-control col-sm-12"
          />
        </div>
      </div>

      <div class="flexContainer">
        <div  class="col-sm-6">
          <label for="">Telefone/Celular</label>
          <input
            placeholder="Telefone"
            type="text"
            class="form-control col-sm-12"
          />
        </div>

        <div class="col-sm-6">
          <label for="">CNPJ/CPF</label>
          <input
            placeholder="CNPJ/CPF"
            type="text"
            class="form-control col-sm-12"
          />
        </div>
      </div>

      <b-card header="Confiração de Logo" class="logo mt-4">
          <div class="logoFlex">
          <div>
          <b-avatar size="4rem" :src="logoClinica"></b-avatar>
          </div>
          <div  class="col-sm-11">
          <label for="" class="text-center ml-3"><small>Url da Imagem : (exemplo: http://imagemLogo.png)</small></label>

          <input
            placeholder="Url"
            type="text"
            class="form-control "
            v-model="logoClinica"
          />
          </div>
          </div>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            logoClinica:""
        }
    }
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

}
.logo{
    width: 50%;
    margin: 0 auto;
    
}

.logoFlex{
display: flex;
}
</style>