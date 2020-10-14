<template>
  <div class="col-md-12">
    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.OD" class="form-control"></b-input>
          </td>
          <td>AV</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.AV_OD" class="form-control"></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.OE" class="form-control"></b-input>
          </td>
          <td>AV</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.AV_OE" class="form-control"></b-input>
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
      retinoscopia:{
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },

  methods:{
    enviarRetinoscopia(){
      this.$store.commit("RETINOSCOPIA", this.retinoscopia)
    }
  }
};
</script>

<style>
</style>