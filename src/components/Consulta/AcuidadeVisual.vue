<template>
  <div class="prescriUltimoExame">
    <label>Tipo de OptoTipo: Snellen</label>
    <b-card
      border-variant="info"
      header="S/C"
      header-bg-variant="info"
      header-text-variant="white"
      align="center"
    >
      <b-form inline>
        <label for="input-with-list" class="mr-2">OD :</label>
        <b-input size="sm" class="mb-2 mr-sm-2 mb-sm-0" placeholder="VL" v-model="acuidade[0].sc.olhoDireito.vl"  @change="enviarAcuidade"></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP" v-model="acuidade[0].sc.olhoDireito.vp"  @change="enviarAcuidade"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH" v-model="acuidade[0].sc.olhoDireito.ph"  @change="enviarAcuidade"></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">OE :</label>
        <b-input
         
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].sc.olhoEsquerto.vl"
           @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP" v-model="acuidade[0].sc.olhoEsquerto.vp"  @change="enviarAcuidade"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH" v-model="acuidade[0].sc.olhoEsquerto.ph"  @change="enviarAcuidade"></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">AO :</label>
        <b-input
         
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].sc.ao.vl"
           @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP" v-model="acuidade[0].sc.ao.vp"  @change="enviarAcuidade"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH" v-model="acuidade[0].sc.ao.ph"  @change="enviarAcuidade"></b-input>
        </b-input-group>
      </b-form>
    </b-card>

    <b-card
      border-variant="info"
      header="C/C"
      header-bg-variant="info"
      header-text-variant="white"
      align="center"
      class="mt-3"
    >
      <b-form inline>
        <label for="input-with-list" class="mr-2">OD :</label>

        <b-input
         
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.olhoDireito.vl"
           @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP" v-model="acuidade[0].cc.olhoDireito.vp"  @change="enviarAcuidade"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH" v-model="acuidade[0].cc.olhoDireito.ph"  @change="enviarAcuidade"></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">OE :</label>
        <b-input
         
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.olhoEsquerto.ph"
           @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP"  @change="enviarAcuidade" v-model="acuidade[0].cc.olhoEsquerto.vp"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH"  @change="enviarAcuidade" v-model="acuidade[0].cc.olhoEsquerto.ph"></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">AO :</label>
        <b-input
         
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.ao.vl"
           @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input  size="sm" placeholder="VP"  @change="enviarAcuidade" v-model="acuidade[0].cc.ao.vp"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input size="sm"  placeholder="PH" @change="enviarAcuidade" v-model="acuidade[0].cc.ao.ph"></b-input>
        </b-input-group>
      </b-form>
    </b-card>
    
     <div class="mt-5">
  <b-button  variant="primary" class="mr-5">Salvar</b-button>
  <b-button  variant="primary">Limpar</b-button>
</div>
  </div>
</template>

<script>
export default {
  props:{
    Limpar: {
      type: Boolean
    },
    acuidadeProps: {
      type: [Object, Array]
    },
    Visualizar:{
      type: Boolean
    }
  },
  data() {
    return {
      acuidade: [
        {
          sc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },

          cc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },
        },
      ],
    };
  },

watch:{
  acuidadeProps(){
    /*console.log(this.acuidadeProps)
     if(Object.keys(this.acuidadeProps).length != 0){
       this.acuidade = [this.acuidadeProps]
       this.enviarAcuidade();
       console.log(this.acuidade)
     }else{
       console.log("teeeeeeeeeeeeeeeeeeee")
     }*/

      this.acuidade = [this.acuidadeProps]
      if(Object.keys(this.acuidade[0]).length === 0){
       this.acuidade =  [
        {
          sc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },

          cc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },
        },
      ]
      }
       this.enviarAcuidade();
  },
Visualizar(){
  console.log("entrrrrou acuidade")
},

  Limpar(){
    this.acuidade =  [
        {
          sc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },

          cc: {
            olhoDireito: {
              vl:'',
              vp:'',
              ph:'',
            },
            olhoEsquerto: {
              vl:'',
              vp:'',
              ph:'',
            },
             ao: {
              vl:'',
              vp:'',
              ph:'',
            },
          },
        },
      ]
      this.$emit('alteraLimpar', false)
      this.$store.commit("ACUIDADE", this.acuidade)
  }

  
},
  methods:{
    enviarAcuidade(){
      console.log(this.acuidade)
      this.$store.commit("ACUIDADE", this.acuidade)
    }
  }
  
};
</script>

<style>
.prescriUltimoExame {
  margin: 50px;
}
</style>