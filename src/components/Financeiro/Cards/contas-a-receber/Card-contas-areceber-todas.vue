<template>
  <b-card
    header-tag="header"
    bg-variant="success"
    footer-tag="footer"
    v-b-popover.hover.bottom="
      'Receita : Composto por todas as receitas cadastradas e Atendimentos Finalizados'
    "
  >
    <h6 class="text-white">
      <b-icon-arrow-up variant="light"></b-icon-arrow-up>
      Total de contas a Receber
    </h6>
    <h6 class="text-white">
      {{ totalReceber }}
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
      totalReceber: 0,
    };
  },
  methods: {
    async readContasReceber(dataInicial, dataFinal) {
      try {
        const constasPagas = await ReceitaService.readDate(
        dataInicial,
        dataFinal
      );
      const agenda = await AgendaService.readDateTotal(dataInicial, dataFinal);
      let valor1 = agenda.data.result[0]?.totalReceitaAgendamento ?? 0
      let valor2 = constasPagas.data.result[0]?.valorTotal ?? 0
      const total =  valor1 + valor2
      this.totalReceber =
        total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }) ?? 0;
      } catch (error) {
        console.log(error)
      }
      
    },

    async readContasReceberFP(dataInicial, dataFinal, formaDePagamento) {
      try {
        const constasPagas = await ReceitaService.readDateFormaPagamento(
        dataInicial,
        dataFinal,
        formaDePagamento
      );
      const agenda = await AgendaService.readDateTotalFp(
        dataInicial,
        dataFinal,
        formaDePagamento
      );
      let valorAgenda = agenda.data.result[0]?.totalReceitaAgendamento ?? 0;
      let valorReceita = constasPagas.data.result[0]?.totalReceita ?? 0;
      let total = valorAgenda + valorReceita;
      this.totalReceber =
        total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }) ?? 0;
      } catch (error) {
        console.log(error)
      }
      
    },
  },

  watch: {
    search() {
      this.totalReceber = 0;
      if(this.search.formaDePagamento){
        this.readContasReceberFP(
          this.search.dataInicial,
          this.search.dataFinal,
          this.search.formaDePagamento
        );
        return
      }
      this.readContasReceber(this.search.dataInicial, this.search.dataFinal)
    },
  },
};
</script>

<style>
</style>