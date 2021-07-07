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
            <!-- {{
              totalRecebidas.toLocaleString("pt-br", {
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