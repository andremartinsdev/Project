<template>
  <div>
<label>Técnica: AutoRefratômetro</label>

      <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
          size="sm"
          v-model="cerametria[0].olhoDireito"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input id="inline-form-input-name"   size="sm" class="mb-2 mr-sm-2 mb-sm-0" v-model="cerametria[0].olhoEsquerdo" ></b-input>
      <b-input-group   size="sm" class="mb-2 mr-sm-2 mb-sm-0">
      <label for="input-with-list" class="mr-2">Miras :</label>
        <b-input   size="sm" id="inline-form-input-username" v-model="cerametria[0].miras"></b-input>
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
  }
}
</script>

<style>

</style>