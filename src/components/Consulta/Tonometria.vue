<template>
  <div>
    <label>Técnica: Transpalpebral</label>

    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
        size="sm"
        v-model="tonometria.OD"
        @change="enviarTonometria"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        
        v-model="tonometria.OE"
        @change="enviarTonometria"
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
      ></b-input>
      <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">Hora :</label>
        <b-input
          size="sm"
          @change="enviarTonometria"
          v-model="tonometria.HORA"
        ></b-input>
      </b-input-group>
    </b-form>
    
     <div class="mt-5">
  <b-button  variant="primary" class="mr-5">Salvar</b-button>
  <b-button  variant="primary">Limpar</b-button>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tonometria: {
        OD: "",
        OE: "",
        HORA: "",
      },
    };
  },

  methods: {
    enviarTonometria() {
      this.$store.commit("TONOMETRIA", this.tonometria);
    },
  },
};
</script>

<style>
</style>