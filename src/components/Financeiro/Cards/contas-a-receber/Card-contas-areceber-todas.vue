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
            <!-- {{
              totalReceber.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }} -->
          </h6>
        </b-card>
</template>

<script>
export default {
 props:{
        search:{
            type: Object
        }
    }
}
</script>

<style>

</style>