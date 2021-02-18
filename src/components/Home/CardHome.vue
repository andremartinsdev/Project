<template>
  <b-row class="mt-5">
    <b-col cols="12">
      <b-card-group deck>
        <!-- CARD DE PACIENTES -->
        <b-card bg-variant="light" style="height:130px; border-radius: 20px;" class="text-center">
          <b-row>
            <b-col cols="6" class="mt-2">
              <b-icon-person-circle class="float-left ml-2" font-scale="3" variant="primary"></b-icon-person-circle>
            </b-col>
            <b-col cols="6">
              <div class="float-right mt-2">
                <h3>{{this.pacientesCadastrados}}</h3>
                <b-card-text class="small text-muted">Total de Pacientes</b-card-text>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="12">
              <b-card-text class="float-left h6">PACIENTES</b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
            </b-col>
          </b-row>
        </b-card>

        <!----------------------- E N D------------------- -->

         <!----------------------- CARD AGENDAMENTOS ------------------- -->

        <b-card bg-variant="light" style="height:130px; border-radius: 20px;" class="text-center">
          <b-row>
            <b-col cols="6" class="mt-2">
              <b-icon-calendar-fill class="float-left ml-2" font-scale="3" variant="primary"></b-icon-calendar-fill>
            </b-col>
            <b-col cols="6">
              <div class="float-right mt-2">
                <h3>{{this.agendamentosDia}}</h3>
                <b-card-text class="small text-muted">Agendamentos</b-card-text>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="12">
              <b-card-text class="float-left h6">AGENDAMENTOS (DIA)</b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
            </b-col>
          </b-row>
        </b-card>
         <!----------------------- E N D------------------- -->


         <!------------ CARD CONSULTA ------------------>
    <b-card bg-variant="light" style="height:130px; border-radius: 20px;" class="text-center">
          <b-row>
            <b-col cols="6" class="mt-2">
              <b-icon-eye-fill class="float-left ml-2" font-scale="3" variant="primary"></b-icon-eye-fill>
            </b-col>
            <b-col cols="6">
              <div class="float-right mt-2">
                <h3>{{this.consultas}}</h3>
                <b-card-text class="small text-muted">Consultas</b-card-text>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="12">
              <b-card-text class="float-left h6">CONSULTAS (DIA)</b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
            </b-col>
          </b-row>
        </b-card>


 <b-card bg-variant="light" style="height:130px; border-radius: 20px;" class="text-center">
          <b-row>
            <b-col cols="6" class="mt-2">
              <b-icon-graph-up class="float-left ml-2" font-scale="3" variant="primary"></b-icon-graph-up>
            </b-col>
            <b-col cols="6">
              <div class="float-right mt-2">
                <h3>{{this.consultasMes}}</h3>
                <b-card-text class="small text-muted">Consultas</b-card-text>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="12">
              <b-card-text class="float-left h6">TOTAL CONSULTAS (MÊS)</b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
            </b-col>
          </b-row>
        </b-card>

      </b-card-group>
    </b-col>
      
  </b-row>
</template>

<script>


export default {
 props:{
   pacientesCadastrados:{
     type: Number
   },
   agendamentosDia: {
     type: Number
   },
   consultas:{
     type: Number
   },
   consultasMes: {
     type: Number
   }
 }
};


</script>

<style>

.testea {
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

card{
  border-radius: 20px;
}

</style>