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
            Contas Pagas
          </h6>
          <h6 class="text-white">
            {{
              total
            }}
          </h6>
        </b-card>
</template>

<script>
import DespesaService from "../../../../services/despesas";

export default {
 props:{
        search:{
            type: Object
        }
    },

    data(){
      return {
        total: 0
      }
    },

    methods: {
      async readContasPagarPagas(dataInicial, dataFinal){
         const totalPago = await DespesaService.readDatePagas(
       dataInicial,
       dataFinal,
        true
      );

     this.total =  totalPago.data.result[0]?.valorTotalDespesa?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? 0
      }
    },

    watch:{
      search(){
         this.total = 0;
        this.readContasPagarPagas(this.search.dataInicial, this.search.dataFinal)
      }
    }
}
</script>

<style>

</style>