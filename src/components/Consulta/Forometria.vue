<template>
  <div class="col-md-12">
    <div class="form-group">
      <label for="c_foro_tec" class="col-md-1 control-label">Técnica</label>
      <div class="col-md-11">
        <b-input type="text" @change="enviarForometria" v-model="forometria.TECNICA" size="sm" class="form-control" />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">S/C</th>
          <th class="text-center">C/C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Longe</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.LONGE" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.LONGE" size="sm" class="form-control" /></td>
        </tr>
        <tr>
          <td>40 cm</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.CM40" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.CM40" size="sm" class="form-control" /></td>
        </tr>
        <tr>
          <td>20 cm</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.CM20" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.CM20" size="sm" class="form-control" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      forometria:{
        SC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        CC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        TECNICA:''
      }
    }
  },

  methods:{
    enviarForometria(){
      this.$store.commit("FOROMETRIA", this.forometria)
    }
  }
  
};
</script>

<style>
</style>