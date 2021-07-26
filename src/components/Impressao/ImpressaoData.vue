<template>
<div>
  <anamnese/>
  <prescriUlt/>

</div>
</template>

<script>
import anamnese from '../../components/Consulta/Anamnese.vue'
import prescriUlt from '../../components/Consulta/PrescricaoUltExame.vue'
// import anamnese from '../../components/Consulta/Anamnese.vue'
export default {
components:{
    anamnese,
    prescriUlt
}
}
</script>

<style>

</style>