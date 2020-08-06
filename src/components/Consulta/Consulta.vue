<template>
<div>
<SideNav/>

  <b-container fluid class="consulta">
    <div>
      <b-jumbotron>
        <div>
          <label>Paciente</label>
          <b-form-select size="sm"></b-form-select>
        </div>
      </b-jumbotron>
    </div>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Prescrição para Óculos" active>
            <b-card class="prescricao">
            <PrescricaoOculos/>
            </b-card>
          </b-tab>
          <b-tab title="Prescrição para Lente de Contato">
             <b-card class="prescricao">
            <PrescricaoLente/>
            </b-card>
          </b-tab>
          <b-tab title="Laudo">
            <b-card class="prescricao">
            <Editor/>
            </b-card>
          </b-tab>
          <b-tab title="Atestado">
            <b-card class="prescricao">
            <Editor/>
            </b-card>
          </b-tab>
          <b-tab title="Declaração">
            <b-card class="prescricao">
            <Editor/>
            </b-card>
          </b-tab>
          <b-tab title="Encaminhamento">
            <b-card class="prescricao">
            <Editor/>
            </b-card>
          </b-tab>
          <b-tab title="Ficha Clínica">
            <b-card class="fichaClinica">
                <Accordion/>
                
            </b-card>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
  </div>
</template>

<script>
import Accordion from './Accordion'
import PrescricaoOculos from './PrescricaoOculos'
import PrescricaoLente from './PrescricaoLente'
import SideNav from '../SidebarNavbar'
import Editor from '../editor_text/editor'

export default {
    components: {
        Accordion,
        PrescricaoOculos,
        PrescricaoLente,
        SideNav,
        Editor
    },
  data() {
    return {
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
         { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape"},
        { text: "Grape", value: "grape"},

      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");



.consulta{
    margin-top: 100px;
    font-family: 'Monda', sans-serif;
}
.check{
    display: flex;
    flex-wrap: wrap;
}
</style>