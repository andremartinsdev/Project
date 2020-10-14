<template>
  <div>
<label>Técnica: AutoRefratômetro</label>

      <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        id=""
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
          size="sm"
          v-model="cerametria[0].olhoDireito"
          @change="enviarCerametria"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input id=""   size="sm" class="mb-2 mr-sm-2 mb-sm-0" v-model="cerametria[0].olhoEsquerdo" @change="enviarCerametria" ></b-input>
      <b-input-group   size="sm" class="mb-2 mr-sm-2 mb-sm-0">
      <label for="input-with-list" class="mr-2">Miras :</label>
        <b-input   size="sm" v-model="cerametria[0].miras" @change="enviarCerametria"></b-input>
      </b-input-group>

    </b-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cerametria: [
        {
          olhoDireito: 1,
          olhoEsquerdo: 'cerametria olho esquerdo',
          miras: 'miras'
        }
      ]
    }
  },

  methods: {
    enviarCerametria(){
      this.$store.commit("CERAMETRIA", this.cerametria)
    }
  }
}
</script>

<style>

</style>