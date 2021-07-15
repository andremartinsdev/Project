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
      Valores não recebidos
    </h6>
    <h6 class="text-white">
      {{ totalContasNaoRecebidas }}
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
      totalContasNaoRecebidas: 0,
    };
  },
  methods: {
    async readReceberAbertasFP(dataInicial, dataFinal, formaDePagamento) {
      try {
        const totalRecebidas = await AgendaService.readDatePagasPagamento(
          dataInicial,
          dataFinal,
          formaDePagamento,
          false
        );
        const totalRecebidasReceita =
          await ReceitaService.readDatePagasPagamento(
            dataInicial,
            dataFinal,
            formaDePagamento,
            false
          );

        let valor1 =
          totalRecebidasReceita.data.result[0]?.valorTotalReceita ?? 0;

        let valor2 =
          totalRecebidas.data.consultaReceber[0]?.valorTotalAgenda ?? 0;

        let total = valor1 + valor2;
        this.totalContasNaoRecebidas =
          total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? 0;
      } catch (error) {
        console.log(error);
      }
    },

    async readReceberAbertas(dataInicial, dataFinal) {
      try {
        const totalRecebidas = await AgendaService.readDatePagas(
          dataInicial,
          dataFinal,
          false
        );
        const totalRecebidasReceita = await ReceitaService.readDatePagas(
          dataInicial,
          dataFinal,
          false
        );
        let valor1 =
          totalRecebidasReceita.data.result[0]?.valorTotalReceita ?? 0;
        let valor2 =
          totalRecebidas.data.agendamentos[0]?.totalReceitaAgendamento ?? 0;
        const total = valor1 + valor2;

        this.totalContasNaoRecebidas =
          total.toLocaleString("pt-br", {
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
      this.totalContasNaoRecebidas = 0;
      if (this.search.formaDePagamento) {
        this.readReceberAbertasFP(
          this.search.dataInicial,
          this.search.dataFinal,
          this.search.formaDePagamento
        );
        return;
      }
      this.readReceberAbertas(this.search.dataInicial, this.search.dataFinal);
    },
  },
};
</script>

<style>
</style>