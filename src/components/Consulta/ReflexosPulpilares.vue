<template>
  <div>
       <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fotomotor</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OD.FOTOMOTOR" size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OE.FOTOMOTOR" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Consensual</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OD.CONSENSUAL" size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OE.CONSENSUAL" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>

          <td>Acomodativo</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OD.ACOMODATIVO" size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  @change="enviarReflexosPulpilares" v-model="reflexosPulpilares.OE.ACOMODATIVO" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>
        
            
         
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
 data(){
   return{
     reflexosPulpilares:{
       OD:{
         FOTOMOTOR:'',
         CONSENSUAL: '',
         ACOMODATIVO: ''
       },
        OE:{
         FOTOMOTOR:'',
         CONSENSUAL: '',
         ACOMODATIVO: ''
       },
     }
   }
 },
 methods: {
   enviarReflexosPulpilares(){
     this.$store.commit("REFLEXO_PULPILAR", this.reflexosPulpilares)
   }
 }
}
</script>

<style>

</style>