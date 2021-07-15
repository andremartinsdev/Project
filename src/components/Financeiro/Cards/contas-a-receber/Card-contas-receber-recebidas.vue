<template>
  <b-card
    header-tag="header"
    bg-variant="success"
    footer-tag="footer"
    v-b-popover.hover.bottom="
      'Despesas : Composta por todas Despesas Cadastradas'
    "
  >
    <h6 class="text-white">
      <b-icon-arrow-down variant="light"></b-icon-arrow-down>
      Contas Recebidas
    </h6>
    <h6 class="text-white">
      {{ totalRecebidas }}
    </h6>
  </b-card>
</template>

<script>
import ReceitaService from "../../../../services/receita";
import AgendaService from "../../../../services/agenda";
export default {
  props: {
    search: {
      type: Object,
    },
  },

  data() {
    return {
      totalRecebidas: 0,
    };
  },

  methods: {
    async readContasRecebidas(dataInicial, dataFinal) {
      const totalRecebidas = await AgendaService.readDatePagas(
        dataInicial,
        dataFinal,
        true
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagas(
        dataInicial,
        dataFinal,
        true
      );
      let valor1 = totalRecebidasReceita.data.result[0]?.valorTotalReceita ?? 0;
      let valor2 =
        totalRecebidas.data.agendamentos[0]?.totalReceitaAgendamento ?? 0;
      const total = valor1 + valor2;

      this.totalRecebidas =
        total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }) ?? 0;
    },

    async readContasRecebidasFP(dataInicial, dataFinal, formaDePagamento) {
      const totalRecebidas = await AgendaService.readDatePagasPagamento(
        dataInicial,
        dataFinal,
        formaDePagamento,
        true
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagasPagamento(
        dataInicial,
        dataFinal,
        formaDePagamento,
        true
      );

      let valor1 = totalRecebidasReceita.data.result[0]?.valorTotalReceita ?? 0;

      let valor2 =
        totalRecebidas.data.consultaReceber[0]?.valorTotalAgenda ?? 0;
      let total = valor1 + valor2;
      this.totalRecebidas =
        total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }) ?? 0;
    },
  },

  watch: {
    search() {
      if (this.search.formaDePagamento) {
        this.readContasRecebidasFP(
          this.search.dataInicial,
          this.search.dataFinal,
          this.search.formaDePagamento
        );
        return;
      }
      this.readContasRecebidas(this.search.dataInicial, this.search.dataFinal);
    },
  },
};
</script>

<style>
</style>