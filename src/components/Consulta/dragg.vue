<template>
  <div >
   

    <div class="conteinerdragg col-sm-12">

      <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button size="sm" block  variant="info"
                >{{element.name}}</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
             
            </b-collapse>
          </b-card>
        </div>
      </draggable>
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "Anamnese", id: 0 },
        { name: "Prescrição do Último Exame", id: 1 },
        { name: "Acuidade Visual", id: 2 },
        { name: "Cerametria", id: 3 },
        { name: "Biomicroscopia", id: 4 },
        { name: "Oftalmoscopia", id: 5 },
        { name: "Tonometria", id: 6 },
        { name: "Reflexos Pupilares", id: 7 },
        { name: "PPC", id: 8 },
        { name: "Avaliação Motora", id: 9 },
        { name: "Reservas Fusionais", id: 10 },
        { name: "Amplitude de Acomodação", id: 11 },
        { name: "Flexibilidade e Facilidade de Acomodação", id: 12 },
        { name: "Retinoscopia Estática", id: 13 },
        { name: "Forometria", id: 14 },
        { name: "Subjetivo", id: 15 },
        { name: "Afinamento", id: 16 },
        { name: "Teste Ambulatorial", id: 17 },
        { name: "Adição", id: 18 },
        { name: "Rx Final", id: 19 },
        { name: "DX", id: 20 }
      ],
      dragging: false,
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan " + id, id: id++ });
    },
    replace: function () {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    checkMove: function () {
    this.$emit("ordemFicha", this.list)
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}

.conteinerdragg{
    margin: 0 auto;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
