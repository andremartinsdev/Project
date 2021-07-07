<template>
  <b-card
    header-tag="header"
    bg-variant="danger"
    footer-tag="footer"
    v-b-popover.hover.bottom="
      'Despesas : Composta por todas Despesas Cadastradas'
    "
  >
    <h6 class="text-white">
      <b-icon-arrow-down variant="light"></b-icon-arrow-down>
      Contas em aberto
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
    async readContasPagarAbertasFp(dataInicial, dataFinal, formaPagamento) {
      try {
        const total = await DespesaService.readDateAbertoFP(
          dataInicial,
          dataFinal,
          formaPagamento
        );
        this.total =
          total.data.result[0]?.valorTotalDespesa?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? 0;
      } catch (error) {
        console.log(error);
      }
    },
    async readContasPagarAbertas(dataInicial, dataFinal) {
      try {
        const total = await DespesaService.readDateAberto(
          dataInicial,
          dataFinal
        );
        this.total =
          total.data.result[0]?.valorTotalDespesa?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? 0;
      } catch (error) {
        console.log(error);
      }
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
      if (this.search.formaDePagamento) {
        this.readContasPagarAbertasFp(
          this.search.dataInicial,
          this.search.dataFinal,
          this.search.formaDePagamento
        );
        return;
      }
      this.readContasPagarAbertas(
        this.search.dataInicial,
        this.search.dataFinal
      );
    },
  },
};
</script>

<style>
</style>