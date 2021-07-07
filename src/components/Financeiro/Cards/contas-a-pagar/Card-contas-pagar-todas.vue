<template>
  <b-card
    header-tag="header"
    bg-variant="danger"
    footer-tag="footer"
    v-b-popover.hover.bottom="
      'Receita : Composto por todas as receitas cadastradas e Atendimentos Finalizados'
    "
  >
    <h6 class="text-white">
      <b-icon-arrow-down variant="light"></b-icon-arrow-down>
      Total de Contas a Pagar
    </h6>
    <h6 class="text-white">
      {{ total }}
    </h6>
  </b-card>
</template>

<script>
import DespesaService from "../../../../services/despesas";
export default {
  props: {
    search: {
      type: Object,
    },
  },

  data() {
    return {
      total: 0,
    };
  },

  methods: {
    async readContasPagar(dataInicial, dataFinal) {
      try {
        const totalPagar = await DespesaService.readDate(
          dataInicial,
          dataFinal
        );
        this.total =
          totalPagar.data.result[0]?.valorTotal?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? 0;
      } catch (error) {
        console.log(error);
      }
    },

    async readContasPagarFP(dataInicial, dataFinal, formaPagmento) {
      const totalPagar = await DespesaService.readDateFormaPagamento(
        dataInicial,
        dataFinal,
        formaPagmento
      );
      this.total =
        totalPagar.data.result[0]?.valorTotal?.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }) ?? 0;
    },
  },

  watch: {
    search() {
      if (this.search.dataInicial === "" || this.search.dataFinal === "") {
        return this.showAlert(
          "error",
          "Ops! ocorreu um erro ao calcular valor das Despesas"
        );
      }
        this.total = 0;

      if (this.search.formaDePagamento) {
        this.readContasPagarFP(
          this.search.dataInicial,
          this.search.dataFinal,
          this.search.formaDePagamento
        );
        return;
      }

      this.readContasPagar(this.search.dataInicial, this.search.dataFinal);
    },
  },
};
</script>

<style>
</style>