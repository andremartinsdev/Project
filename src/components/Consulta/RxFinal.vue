<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-center">Esférico</th>
              <th class="text-center">Cilíndrico</th>
              <th class="text-center">Eixo</th>
              <th class="text-center">AV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OD</td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  v-model="rxFinal.OD.ESFERICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  max="0"
                  v-model="rxFinal.OD.CILINDRICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control"
                  step="5"
                  min="0"
                  max="360"
                  v-model="rxFinal.OD.EIXO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="1"
                  v-model="rxFinal.OD.AV"
                  @change="enviarRxFinal"
                />
              </td>
            </tr>
            <tr>
              <td>OE</td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  v-model="rxFinal.OE.ESFERICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  max="0"
                  v-model="rxFinal.OE.CILINDRICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control"
                  step="5"
                  min="0"
                  max="360"
                  v-model="rxFinal.OE.EIXO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="1"
                  v-model="rxFinal.OE.AV"
                  @change="enviarRxFinal"
                />
              </td>
            </tr>
            <tr>
              <td>Adição</td>
              <td colspan="2">
                <b-input type="text" v-model="rxFinal.ADICAO" @change="enviarRxFinal" size="sm" class="form-control" />
              </td>
              <td>AV. Perto</td>
              <td><b-input type="text" v-model="rxFinal.AV_PERTO" @change="enviarRxFinal" size="sm" class="form-control" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="c_rx_fin_tip_len">Tipo lente</label>
          <textarea
            name="rx_fin_tip_len"
            id="c_rx_fin_tip_len"
            class="form-control"
            v-model="rxFinal.TIPO_LENTE"
            @change="enviarRxFinal"
          ></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="c_rx_fin_tra">Tratamento</label>
          <textarea
            name="rx_fin_tra"
            id="c_rx_fin_tra"
            class="form-control"
            v-model="rxFinal.TRATAMENTO"
            @change="enviarRxFinal"
          ></textarea>
        </div>
      </div>
    </div>
    
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
    rxFinalProps: {
      type: Object
    }
  },
  watch:{
    rxFinalProps(){
      if(Object.keys(this.rxFinalProps).length != 0){
        this.rxFinal = this.rxFinalProps
        this.enviarRxFinal();
      }
    },
    Limpar(){
      this.rxFinal = {
        OD:{
          ESFERICO:'',
          CILINDRICO:'',
          EIXO:'',
          AV:''
        },
         OE:{
          ESFERICO:'',
          CILINDRICO:'',
          EIXO:'',
          AV:''
        },
        AV_PERTO:'',
        ADICAO:'',
        TIPO_LENTE:'',
        TRATAMENTO:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("RX_FINAL", {})
    }
  },
  data(){
    return{
      rxFinal:{
        OD:{
          ESFERICO:'',
          CILINDRICO:'',
          EIXO:'',
          AV:''
        },
         OE:{
          ESFERICO:'',
          CILINDRICO:'',
          EIXO:'',
          AV:''
        },
        AV_PERTO:'',
        ADICAO:'',
        TIPO_LENTE:'',
        TRATAMENTO:''
      }
    }
  },

  methods:{
    enviarRxFinal(){
      this.$store.commit("RX_FINAL", this.rxFinal)
    }
  }
};
</script>

<style>
</style>