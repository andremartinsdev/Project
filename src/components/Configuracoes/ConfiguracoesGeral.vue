<template>
  <div class="containerConfig">
    <SidebarNavbar />
    <div class="bg-light cardFormaPagamento">
      <b-card-group deck>
        <b-card header="Cadastrar Forma de Pagamento" header-tag="header">
          <h1>{{ formaPagamento.descricao }}</h1>
          <b-input hidden v-model="formaPagamento.idFormaPagamento" />
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
          <template #footer>
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary"
              >9 <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>

        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Formas de Pagamento</h6>
          </template>
          <table class="table table-sm">
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
                  <b-button size="sm" variant="primary">Editar</b-button>
                </td>
                <td>
                  <b-button size="sm" variant="danger">Excluir</b-button>
                </td>
              </tr>
            </tbody>
          </table>
          <template #footer>
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary"
              >9 <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>
      </b-card-group>
    </div>

    <div class="bg-light cardOticas">
      <b-card-group deck>
        <b-card header="Cadastrar Óticas Parceiras" header-tag="header">
          <h1>{{ formaPagamento.descricao }}</h1>
          <b-input hidden v-model="oticaParceira.idOticaParceira" />
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
          <template #footer>
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary"
              >9 <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>

        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Óticas Parceira</h6>
          </template>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nome da Ótica Parceira</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="otica in oticasParceiras"
                :key="otica.idOticaParceira"
              >
                <td>{{ otica.nome }}</td>
                <td>
                  <b-button size="sm" variant="primary">Editar</b-button>
                </td>
                <td>
                  <b-button size="sm" variant="danger">Excluir</b-button>
                </td>
              </tr>
            </tbody>
          </table>
          <template #footer>
            <label class="mr-1">Total de Cadastros</label>
            <b-badge variant="primary"
              >9 <span class="sr-only">unread messages</span></b-badge
            >
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import SidebarNavbar from "../SidebarNavbar";
import ServiceFormaDePagamento from "../../services/formaDePagamento";
import ServiceOticasParceiras from "../../services/oticasParceiras";
export default {
  components: {
    SidebarNavbar,
  },

  data() {
    return {
      formasDePagamento: [],
      oticasParceiras: [],
      formaPagamento: {
        idFormaPagamento: 0,
        descricao: "",
      },

      oticaParceira: {
        nome: "",
      },
    };
  },

  created() {
    this.readFormaDePagamento();
    this.readOticasParceiras();
  },

  methods: {
    saveFormaDePagamento() {
      ServiceFormaDePagamento.save(this.formaPagamento).then((result) => {
        console.log(result);
      });
    },

    readFormaDePagamento() {
      ServiceFormaDePagamento.read().then((result) => {
        this.formasDePagamento = result.data.formasPagamento;
      });
    },

    saveOticaParceira() {
      ServiceOticasParceiras.save(this.oticaParceira).then((result) => {
        console.log(result);
      });
    },

    readOticasParceiras() {
      ServiceOticasParceiras.read().then((result) => {
        this.oticasParceiras = result.data.oticaParceira;
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
</style>