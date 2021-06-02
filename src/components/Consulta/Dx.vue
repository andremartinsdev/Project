<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="c_dx_ref">Refrativo</label>
          <b-input type="text" @change="enviarDx" v-model="dx.REFRATIVO" size="sm" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="c_dx_mot">Motor</label>
          <b-input type="text" @change="enviarDx" v-model="dx.MOTOR" size="sm" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="c_dx_ocu">Ocular</label>
          <b-input type="text" @change="enviarDx" v-model="dx.OCULAR" size="sm" class="form-control" />
        </div>
      </div>
      <div class="col-md-12">
        <h5>Conduta</h5>
        <div class="form-group">
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cond_lc"
              id="c_dx_cond_lc"
              value="1"
              v-model="dx.CONDUTA.LC"
              @change="enviarDx"
            />
            <label for="c_dx_cond_lc" class="ml-2">LC</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cond_rx"
              id="c_dx_cond_rx"
              value="1"
              v-model="dx.CONDUTA.RX"
              @change="enviarDx"
            />
            <label for="c_dx_cond_rx" class="ml-2">RX</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cond_enc"
              id="c_dx_cond_enc"
              value="1"
              v-model="dx.CONDUTA.ENCAMINHAMENTO"
              @change="enviarDx"
            />
            <label for="c_dx_cond_enc" class="ml-2">Encaminhamento</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cond_ple"
              id="c_dx_cond_ple"
              value="1"
              v-model="dx.CONDUTA.PLEOPTICA"
              @change="enviarDx"
            />
            <label for="c_dx_cond_ple" class="ml-2">Pleóptica</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cond_ort"
              id="c_dx_cond_ort"
              value="1"
              v-model="dx.CONDUTA.ORTOPTICA"
              @change="enviarDx"
            />
            <label for="c_dx_cond_ort" class="ml-2">Ortóptica</label>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <h5>Controle</h5>
        <div class="form-group">
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cont_1_sem"
              id="c_dx_cont_1_sem"
              value="1"
              v-model="dx.CONTROLE.SEMANA1"
              @change="enviarDx"
            />
            <label for="c_dx_cont_1_sem" class="ml-2">1 Semana</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cont_1_mes"
              id="c_dx_cont_1_mes"
              value="1"
              v-model="dx.CONTROLE.MES1"
              @change="enviarDx"
            />
            <label for="c_dx_cont_1_mes" class="ml-2">1 Mês</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cont_6_mes"
              id="c_dx_cont_6_mes"
              value="1"
              v-model="dx.CONTROLE.MES6"
              @change="enviarDx"
            />
            <label for="c_dx_cont_6_mes" class="ml-2">6 Meses</label>
          </div>
          <div class="checkbox checkbox-success checkbox-inline">
            <input
              type="checkbox"
              name="dx_cont_1_ano"
              id="c_dx_cont_1_ano"
              value="1"
              v-model="dx.CONTROLE.ANO1"
              @change="enviarDx"
            />
            <label for="c_dx_cont_1_ano" class="ml-2">1 Ano</label>
          </div>
        </div>
        <div class="form-group">
          <label for="c_dx_cont_obs">Obs.</label>
          <textarea
            name="dx_cont_obs"
            id="c_dx_cont_obs"
            class="form-control"
            v-model="dx.OBS"
            @change="enviarDx"
          ></textarea>
        </div>
      </div>
    </div>
    
     <div class="mt-2 p-4" style="display: flex; justify-content: flex-end">
      <b-button
        size="sm"
        class="mr-3"
        variant="primary"
        @click="createPDF(false)"
      >
        Imprimir <b-icon-printer-fill class="ml-3"></b-icon-printer-fill
      ></b-button>
      <b-link href="#foo" @click="createPDF(true)"
        >Download PDF <b-icon-download></b-icon-download>
      </b-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },
  props:{
    Limpar:{
      type: Boolean
    },
    dxProps:{
      type: Object
    }
  },

  watch:{
    dxProps(){
      if(Object.keys(this.dxProps).length != 0){
      this.dx = this.dxProps
      this.enviarDx();
      }
    },
    Limpar(){
      this.dx = {
        REFRATIVO:'',
        MOTOR:'',
        OCULAR:'',
        CONDUTA:{
          LC:'',
          RX:'',
          ENCAMINHAMENTO:'',
          PLEOPTICA:'',
          ORTOPTICA:'',
        },
        CONTROLE:{
          SEMANA1:'',
          MES1:'',
          MES6:'',
          ANO1:''
        },
        OBS:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("DX", {})
    }
  },

  data(){
    return{
      dx:{
        REFRATIVO:'',
        MOTOR:'',
        OCULAR:'',
        CONDUTA:{
          LC:'',
          RX:'',
          ENCAMINHAMENTO:'',
          PLEOPTICA:'',
          ORTOPTICA:'',
        },
        CONTROLE:{
          SEMANA1:'',
          MES1:'',
          MES6:'',
          ANO1:''
        },
        OBS:''
      }
    }
  },
  methods:{
    enviarDx(){
      this.$store.commit("DX", this.dx)
    }
  }
};
</script>

<style>
</style>