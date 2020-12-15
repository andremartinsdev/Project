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
      <b-input
        id=""
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="cerametria[0].olhoEsquerdo"
        @change="enviarCerametria"
      ></b-input>
      <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">Miras :</label>
        <b-input
          size="sm"
          v-model="cerametria[0].miras"
          @change="enviarCerametria"
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
  props:{
    Limpar:{
      type: Boolean
    },
    cerametriaProps: {
      type: [Array, Object]
    }
  },

  watch:{
    cerametriaProps(){
      if(Object.keys(this.cerametriaProps).length != 0){
      this.cerametria = this.cerametriaProps
      this.enviarCerametria();
      }
    },
    Limpar(){
      this.cerametria = [
        {
          olhoDireito: "",
          olhoEsquerdo: "",
          miras: "",
        },
      ]

      this.$emit('alteraLimpar', false)
    }
  },
  data() {
    return {
      cerametria: [
        {
          olhoDireito: "",
          olhoEsquerdo: "",
          miras: "",
        },
      ],
    };
  },

  methods: {
    enviarCerametria() {
      this.$store.commit("CERAMETRIA", this.cerametria);
    },
  },
};
</script>

<style>
</style>