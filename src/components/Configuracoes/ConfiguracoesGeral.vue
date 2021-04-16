<template>
  <div class="containerConfig">
    <div class="bg-light cardFormaPagamento">
      <b-card-group deck >
        <b-card header="Cadastrar Forma de Pagamento" header-tag="header" class="card1">
        
          <b-input hidden v-model="formaPagamento.idFormaPagamento" />
          <b-input hidden v-model="formaPagamento.uuid" />
          <b-input
            size="sm"
            v-model="formaPagamento.descricao"
            placeholder="Descrição da Forma de Pagamento"
          />

             
         

          
          <b-button
            @click="saveFormaDePagamento"
            variant="primary"
            class="mt-4"
            size="sm"
            >Salvar</b-button
          >

            <b-button
            @click="newFormaPagamento"
            variant="primary"
            class="mt-4 ml-3"
            size="sm"
            >Limpar</b-button
          >
          
        </b-card>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Formas de Pagamento</h6>
          </template>
          <div class="cardCadastro">

         
          <table class="table table-sm ">
            <thead>
              <tr>
                <th scope="col">Descrição da Forma de Pagamento</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="forma in formasDePagamento"
                :key="forma.idFormaPagamento"
              >
                <td>{{ forma.descricao }}</td>
                <td>
                  <b-button size="sm" variant="primary" @click="readByUuid(forma.uuid)">Editar</b-button>
                </td>
                <td>
                  <b-button
                    size="sm"
                    variant="danger"
                    @click="deleteFormaDePagamento(forma.uuid)"
                    >Excluir</b-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
           </div>
          <template #footer  v-if="load">
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary" v-if="load === true"
              >{{quantForma}} <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>
      </b-card-group>
    </div>

    <div class="bg-light cardOticas cardFormaPagamento">
      <b-card-group deck>
        <b-card header="Cadastrar Óticas Parceiras" header-tag="header" class="card1">
          
          <b-input hidden v-model="oticaParceira.uuid" />
          <b-input
            size="sm"
            v-model="oticaParceira.nome"
            placeholder="Nome da Ótica Parceira"
          />
          <b-button
            @click="saveOticaParceira"
            variant="primary"
            class="mt-4"
            size="sm"
            >Salvar</b-button
          >

             <b-button
            @click="newOticaParceira"
            variant="primary"
            class="mt-4 ml-3"
            size="sm"
            >Limpar</b-button
          >
          
        </b-card>

        <b-card header-tag="header" footer-tag="footer" >
          <template #header>
            <h6 class="mb-0">Óticas Parceira</h6>
          </template>

           <div class="cardCadastro">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nome da Ótica Parceira</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="otica in oticasParceiras" :key="otica.idOticaParceira">
                <td>{{ otica.nome }}</td>
                <td>
                  <b-button size="sm" variant="primary" @click="readByUuidOtica(otica.uuid)">Editar</b-button>
                </td>
                <td>
                  <b-button size="sm" variant="danger" @click="deleteOticaParceira(otica.uuid)">Excluir</b-button>
                </td>
              </tr>
            </tbody>
          </table>
           </div>
          <template #footer >
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary" v-if="loadOticas === true"
              >{{quantOticas}} <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import ServiceFormaDePagamento from "../../services/formaDePagamento";
import ServiceOticasParceiras from "../../services/oticasParceiras";
export default {
  components: {
  },

  data() {
    return {
      quantForma: 0,
      quantOticas:0,
      formasDePagamento: [],
      oticasParceiras: [],
      load: false,
      loadOticas: false,
      saveForma: false,
      formaPagamento: {
        uuid:"",
        idFormaPagamento: 0,
        descricao: "",
      },

      oticaParceira: {
        nome: "",
        uuid:""
      },
    };
  },

 created() {
    this.readFormaDePagamento();
    this.readOticasParceiras();
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

    saveFormaDePagamento() {
      if(!this.formaPagamento.uuid){
        ServiceFormaDePagamento.save(this.formaPagamento).then(() => {
          this.showAlert("success","Registro Salvo")
          this.readFormaDePagamento();
           this.formaPagamento = {
        uuid:"",
        idFormaPagamento: 0,
        descricao: "",
      }
         
        }).catch(()=>{
          this.showAlert("error","Ops! ocorreu um erro ao salvar Forma de Pagamento")
        });
      }else{
        ServiceFormaDePagamento.update(this.formaPagamento.uuid, this.formaPagamento).then(() =>{
          this.showAlert("success", "Forma de Pagamento Atualizada com Sucesso")
          this.readFormaDePagamento();
          this.formaPagamento = {
        uuid:"",
        idFormaPagamento: 0,
        descricao: "",
      }
        }).catch(()=>{
          this.showAlert("error", "ops! ocorreu um erro ao atualizar forma de pagamento")
        })
      }
    },

    newOticaParceira(){
       this.oticaParceira = {
        nome: "",
        uuid:""
      }
    },

    newFormaPagamento(){
      this.formaPagamento = {
        uuid:"",
        idFormaPagamento: 0,
        descricao: "",
      }
    },

    readFormaDePagamento() {
      ServiceFormaDePagamento.read().then((result) => {
        this.formasDePagamento = result.data.formasPagamento;
        this.quantForma = this.formasDePagamento.length
        this.load = true;
      });
    },

    deleteFormaDePagamento(uuid) {
      console.log("entroo delet");
      ServiceFormaDePagamento.delete(uuid)
        .then(() => {
          this.showAlert("success", "Registro Deletado")
          this.readFormaDePagamento();
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.showAlert("info", error.response.data.message);
          } else {
            this.showAlert("error", "erro ao deletar");
          }
        });
    },

    saveOticaParceira() {
      if(!this.oticaParceira.uuid){
        ServiceOticasParceiras.save(this.oticaParceira).then(() => {
          this.showAlert("success","Registro Salvo com Sucesso")
          this.readOticasParceiras();
        });
      }else{
        ServiceOticasParceiras.update(this.oticaParceira.uuid, this.oticaParceira).then(() =>{
          this.showAlert("success", "Registro Atualizado com Sucesso")
          this.readOticasParceiras();
        })
      }
    },

    

    deleteOticaParceira(uuid){
      ServiceOticasParceiras.delete(uuid).then(() => {
          this.showAlert("success", "Registro Deletado")
          this.readOticasParceiras();
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.showAlert("info", error.response.data.message);
          } else {
            this.showAlert("error", "erro ao deletar");
          }
        });
    },

    readByUuid(uuid){
      ServiceFormaDePagamento.findById(uuid).then(result =>{
        this.formaPagamento.idFormaPagamento = result.data.formaPagamento[0].idFormaPagamento
        this.formaPagamento.descricao = result.data.formaPagamento[0].descricao
        this.formaPagamento.uuid = result.data.formaPagamento[0].uuid
      })
    },

    readByUuidOtica(uuid){
      ServiceOticasParceiras.findById(uuid).then(result =>{
        this.oticaParceira.nome = result.data.result[0].nome
        this.oticaParceira.uuid = result.data.result[0].uuid
      })
    },

    readOticasParceiras() {
      ServiceOticasParceiras.read().then((result) => {
        this.oticasParceiras = result.data.oticaParceira;
        this.quantOticas = this.oticasParceiras.length
        this.loadOticas = true;
      });
    },
  },
};
</script>

<style>
.containerConfig {
  height: 800px;
}

.cardFormaPagamento {
  padding: 20px;
  margin: 40px;
  margin-top: 100px;
  border-radius: 10px;
}
.cardFormaPagamento table {
  overflow-x: scroll;
}

.cardOticas {
  padding: 20px;
  margin: 40px;
  margin-top: 10px;
  border-radius: 10px;
}

.cardCadastro{
  overflow-y: scroll;
  height: 200px;
}

.tessss{
  
}

@media (max-width: 700px) {
  .cardFormaPagamento{
    width: 100%;
    padding: 0;
    margin: 0;
  
  }
  .containerConfig{
    margin-top: 90px;
  }
}

.card1{
  height: 50%;
}
</style>