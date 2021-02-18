<template>
  <div class="containerPrescri">
    <b-form inline>
      <b-input v-model="prescricaoLente.uuid" hidden></b-input>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        v-model="prescricaoLente.od_esferico"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
      ></b-input>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.od_cilindrico"
        placeholder="CIL"
      ></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          v-model="prescricaoLente.od_eixo"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.od_av"
        placeholder="AV"
      ></b-input>
    </b-form>

    <b-form inline class="mt-4">
      <label for="input-with-list" size="sm" class="mr-2">OE :</label>
      <b-input
        v-model="prescricaoLente.oe_esferico"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
      ></b-input>
      <label class="sr-only">Name</label>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.oe_cilindrico"
        placeholder="CIL"
      ></b-input>
      <label class="sr-only">Name</label>

      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          v-model="prescricaoLente.oe_eixo"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        size="sm"
        v-model="prescricaoLente.oe_av"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
      ></b-input>
    </b-form>

    <div class="mt-3 ml-2">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-4 mb-2">
      <label>Observação</label>
      <b-form-textarea
        v-model="prescricaoLente.observacao"
        class="mt-2"
        id="textarea-rows"
        placeholder="Favor medir DNP com pupilômetro.
Retorno com 01 Ano"
        rows="4"
      ></b-form-textarea>
    </div>
    <b-button class="mr-3" pill variant="primary" @click="savePrescricao"
      >Salvar</b-button
    >
    <b-button @click="cancelar" pill>Cancelar</b-button>
  </div>
</template>

<script>
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescicaoLente";
import AgendaService from "../../services/agenda";

import { mapState } from "vuex";
import moment from 'moment'

export default {
  props: {
    PrescricaoLenteProps: {
      type: Object,
    },
  },
  watch: {
    PrescricaoLenteProps() {
      this.prescricaoLente = this.PrescricaoLenteProps;
    },
  },
  data() {
    return {
      idConsulta: -1,
      dadosConsulta: {
        idPaciente: this.idPaciente,
        data: moment().format("YYYY-MM-DD"),
        titulo: "Prescrição Lente",
      },
      prescricaoLente: {
        idConsulta: "",
        idPaciente: "",
        uuid: 0,
        data: moment().format("YYYY-MM-DD"),
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        observacao: "",
      },
    };
  },

  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      uuidAgendamento: (state) => state.uuidAgendamento,
    }),
  },
  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    cancelar() {
      this.prescricaoLente = {
        idConsulta: "",
        idPaciente: "",
        uuid: "",
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        observacao: "",
      };
    },

    savePrescricao() {
      if (this.prescricaoLente.uuid === 0) {
        ConsultaService.save(this.dadosConsulta)
          .then((result) => {
            if (result.status === 201) {
              this.idConsulta = result.data.result.idConsulta[0];
              this.uuidConsulta = result.data.result.uuid;
              this.prescricaoLente.idConsulta =
                result.data.result.idConsulta[0];
              this.prescricaoLente.idPaciente = this.idPaciente;

              PrescricaoService.save(this.prescricaoLente)
                .then((result) => {
                  console.log(result.data.uuid.idPrescricaoLente)

                  if (result.status === 201) {
                    this.prescricaoLente.uuid = result.data.uuid.uuid;
                    if(this.idConsulta === -1){
                      this.showAlert("error", "Algo de errado ocorreu")
                    }else{
                       AgendaService.updateIdConsultAtendido(this.uuidAgendamento, {
                      atendido: true,
                      idConsulta: this.idConsulta
                    })
                      .then((result) => {
                        if (result.status === 201) {
                          console.log(result)
                          this.showAlert(
                            "success",
                            "Prescrição Salva com Sucesso"
                          );
                        }
                      })
                      .catch(() => {
                        this.showAlert(
                          "error",
                          "Ocorreu um erro ao atualizar a status do agendamento"
                        );
                      });
                    }
                   
                  } else {
                    this.showAlert(
                      "error",
                      "Ocorreu um erro ao salvar a Prescrição"
                    );
                  }
                })
                .catch((error) => {
                  this.showAlert("error", error);
                });
            } else {
              this.showAlert("error", "Ocorreu um erro ao salvar a Consulta");
            }
          })
          .catch(() => {
            this.showAlert(
              "error",
              "Verifique se todos os Campos estão preenchidos corretamente"
            );
          });
      } else {
        PrescricaoService.update(
          this.prescricaoLente,
          this.prescricaoLente.uuid
        )
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Prescrição Atualizada com Sucesso");
            } else {
              this.showAlert("error", "Ocorreu um erro ao Atualizar registro");
            }
          })
          .catch(() => {
            this.showAlert("error", "Ocorreu um erro ao Atualizar registro");
          });
      }
    },
  },
};
</script>

<style>
</style>