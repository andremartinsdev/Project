<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr>
              <td>OD</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.OD" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.AV_OD" size="sm" class="form-control" /></td>
            </tr>
            <tr>
              <td>OE</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.OE" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.AV_OE" size="sm" class="form-control" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      adicao:{
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },

  methods:{
    enviarAdicao(){
      this.$store.commit("ADICAO", this.adicao)
    }
  }
};
</script>

<style>
</style>