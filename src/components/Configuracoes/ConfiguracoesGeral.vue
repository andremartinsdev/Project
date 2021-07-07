<template>
  <div>
    <Sidebar />
    <b-card class="m-2">
      <h3 class="text-center mb-3">Configurações</h3>
      <div class="col-sm-12" style="display: flex;">
        <div class="col-sm-6 divDragg">
          <h6 class="text-center mt-3 mb-4">Ordenar Ficha Clínica</h6>
          <dragg @ordemFicha="setOrdemFicha($event)"/>
        </div>
        <div class="col-sm-6">
          <h6 class="text-center mt-3 mb-4">Configurar Moldura para Relatório</h6>

          <b-card
            class="col-sm-12 text-center cardMoldura"
            sub-title="Tipo de Moldura para Impressão"
          >
            <div class="divImgMoldura p-2">
              <div class="flexColun text-center">
                <b-img
                  thumbnail
                  fluid
                  :src="molduraVisualizada"
                  v-bind="mainProps"
                  alt="Image 1"
                ></b-img>
                <small>Rodapé</small>
              </div>
              <div class="flexColun text-center">
                <b-img
                  thumbnail
                  fluid
                  :src="molduraVisualizada"
                  v-bind="mainProps"
                  class="imgRotate"
                  alt="Image 1"
                ></b-img>
                <small>Topo</small>
              </div>
            </div>
            <b-form-select
              size="sm"
              :options="moulduras"
              @change="selecionarMoldura"
              v-model="molduraSelect"
              class="mt-3"
            ></b-form-select>
          </b-card>
        </div>
      </div>
      <b-button @click="save" block class="mt-3 mb-3" variant="primary">salvar</b-button>
    </b-card>
  </div>
</template>

<script>
import moldura from "../../assets/moldura.png";
import Sidebar from "../SidebarNavbar.vue";
import Config from "../../services/configGeral"
import dragg from "../../components/Consulta/dragg.vue";
export default {
  components: {
    dragg,
    Sidebar,
  },

  data() {
    return {
      molduraVisualizada:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAA1BMVEX+/v7IGnAoAAAASElEQVR4nO3BgQAAAADDoPlTX+EAVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcBsWxAAHcrYvnAAAAAElFTkSuQmCC",
      moldura,
      molduraSelect: "semMoldura",
      moulduras: [
        { text: "Sem Moldura", value: "semMoldura" },
        { text: "Padrão", value: "padrao" },
      ],
      mainProps: { width: 122, height: 5 },
      ordemFicha: []
    };
  },
  created() {
    this.selecionarMoldura();
  },
  methods: {
    setOrdemFicha(ficha){
      this.ordemFicha = ficha
      console.log(this.ordemFicha)
    },
    async save(){
    const result = await Config.save({molduraRelatorio: this.molduraSelect, ordemFixaClinica: this.ordemFicha})
    console.log(result)
    },
    selecionarMoldura() {
      console.log("entroooou");
      if (this.molduraSelect === "padrao") {
        this.molduraVisualizada = this.moldura;
        return;
      }
      this.molduraVisualizada =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAA1BMVEX+/v7IGnAoAAAASElEQVR4nO3BgQAAAADDoPlTX+EAVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcBsWxAAHcrYvnAAAAAElFTkSuQmCC";
    },
  },
};
</script>

<style>
.cardMoldura {
  height: 300px;
}
.flexColun {
  color: #666;
  display: flex;
  flex-direction: column;
}
.divImgMoldura {
  display: flex;
  justify-content: space-between;
}
.imgRotate {
  transform: rotate(180deg);
} 

.divDragg{
  max-height: 500px;
  overflow-y: scroll;
}

.divDragg::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

.divDragg::-webkit-scrollbar-track {
  background: #ffffff; /* color of the tracking area */
}

.divDragg::-webkit-scrollbar-thumb {
  background-color: rgb(178, 178, 184); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid rgb(255, 255, 255); /* creates padding around scroll thumb */
}
</style>