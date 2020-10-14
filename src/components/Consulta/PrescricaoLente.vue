<template>
  <div class="containerPrescri">
    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
          size="sm"
      ></b-input>
      <b-input    size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="CIL"></b-input>
      <b-input-group prepend="°"   size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input   size="sm"  placeholder="EIXO"></b-input>
      </b-input-group>

      <b-input    size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="AV"></b-input>
    </b-form>

    <b-form inline class="mt-4">
      <label for="input-with-list"   size="sm" class="mr-2">OE :</label>
      <b-input
        
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
          size="sm"
      ></b-input>
      <label class="sr-only">Name</label>
      <b-input size="sm"  class="mb-2 mr-sm-2 mb-sm-0" placeholder="CIL"></b-input>
      <label class="sr-only">Name</label>

      <b-input-group prepend="°"   size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input   size="sm"  placeholder="EIXO"></b-input>
      </b-input-group>

      <b-input   size="sm"  class="mb-2 mr-sm-2 mb-sm-0" placeholder="AV"></b-input>
    </b-form>
    
    <div class="mt-3 ml-2">
      <label class="mr-3">LENTE :</label>
      <b-form-select   size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-4 mb-2">
      <label >Observação</label>
  <b-form-textarea
  class="mt-2"
    id="textarea-rows"
    placeholder="Favor medir DNP com pupilômetro.
Retorno com 01 Ano"
    rows="4"
  ></b-form-textarea>
</div>
 <b-button class="mr-3" pill variant="primary">Salvar</b-button>
 <b-button pill>Cancelar</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>