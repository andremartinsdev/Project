<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">S/C</th>
          <th scope="col">C/C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OR</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.SC.OR"  size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.CC.OR" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Luz</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.SC.LUZ" size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.CC.LUZ" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Filtro</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.SC.FILTRO" size="sm"></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input @change="enviarPpc" v-model="ppc.CC.FILTRO" size="sm"></b-input>
            </b-input-group>
          </td>
        </tr>
      </tbody>
    </table>
    
   
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
    ppcProps: {
      type: Object
    }
  },

  watch:{
    ppcProps(){
      if(Object.keys(this.ppcProps).length != 0){
        this.ppc = this.ppcProps
        this.enviarPpc();
      }
    },
    Limpar(){
      this.ppc = {
        SC:{
          OR:'',
          LUZ: '',
          FILTRO: ''
        },
        CC:{
          OR:'',
          LUZ: '',
          FILTRO: ''
        }
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("PPC", {})
    }
  },
  data(){
    return{
      ppc: {
        SC:{
          OR:'',
          LUZ: '',
          FILTRO: ''
        },
        CC:{
          OR:'',
          LUZ: '',
          FILTRO: ''
        }
      }
    }
  },

  methods: {
    enviarPpc(){
      this.$store.commit("PPC", this.ppc)
    }
  }
};
</script>

<style>
</style>