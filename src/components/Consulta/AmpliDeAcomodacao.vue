<template>
  <div class="col-md-12">
    <label for="input-with-list" class="mr-2">Técnica : Sheard 40 cm</label>

    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.OD"
              class="form-control"
            ></b-input>
          </td>
          <td>Nível</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.NIVEL_OD"
              class="form-control"
            ></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.OE"
              class="form-control"
            ></b-input>
          </td>
          <td>Nível</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.NIVEL_OE"
              class="form-control"
            ></b-input>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-5">
      <b-button variant="primary" class="mr-5">Salvar</b-button>
      <b-button variant="primary">Limpar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    amplitudeProps: {
      type: Object,
    },
  },
  watch: {
    amplitudeProps() {
      if (Object.keys(this.amplitudeProps).length != 0) {
        this.ampliDeAcomodacao = { ...this.amplitudeProps };
        this.enviarAmpliDeAcomodacao();
      }
    },
    Limpar() {
      this.ampliDeAcomodacao = {
        OD: "",
        NIVEL_OD: "",
        OE: "",
        NIVEL_OE: "",
      };
      this.$emit('alteraLimpar', false)
      this.$store.commit("AMPLITUDE_ACOMODACAO", {});
    },
  },
  data() {
    return {
      ampliDeAcomodacao: {
        OD: "",
        NIVEL_OD: "",
        OE: "",
        NIVEL_OE: "",
      },
    };
  },
  methods: {
    enviarAmpliDeAcomodacao() {
      this.$store.commit("AMPLITUDE_ACOMODACAO", this.ampliDeAcomodacao);
    },
  },
};
</script>

<style>
</style>