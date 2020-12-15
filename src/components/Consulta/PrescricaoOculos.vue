<template>
  <div class="containerPrescri">
    <b-form inline>
      <b-input hidden v-model="prescricaoOculos.uuid"></b-input>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
        v-model="prescricaoOculos.od_esferico"
      ></b-input>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoOculos.od_cilindrico"
        placeholder="CIL"
      ></b-input>
      <b-input-group size="sm" prepend="°" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          placeholder="EIXO"
          v-model="prescricaoOculos.od_eixo"
        ></b-input>
      </b-input-group>

      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
        v-model="prescricaoOculos.od_av"
      ></b-input>
    </b-form>

    <b-form inline class="mt-4">
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
        v-model="prescricaoOculos.oe_esferico"
      ></b-input>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="CIL"
        v-model="prescricaoOculos.oe_cilindrico"
      ></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          v-model="prescricaoOculos.oe_eixo"
          size="sm"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        v-model="prescricaoOculos.oe_av"
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
      ></b-input>
    </b-form>
    <b-form inline class="mt-5">
      <label for="input-with-list" class="mr-3">ADIÇÃO :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ADIÇÃO"
        type="number"
        size="sm"
        v-model="prescricaoOculos.adicao"
      ></b-input>
    </b-form>

    <div class="mt-3 ml-2">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-4 mb-2">
      <label>Observação</label>
      <b-form-textarea
        class="mt-2"
        id="textarea-rows"
        placeholder="Favor medir DNP com pupilômetro.
Retorno com 01 Ano"
        rows="4"
        v-model="prescricaoOculos.observacao"
      ></b-form-textarea>
    </div>
    <b-button class="mr-3" pill variant="primary" @click="savePrescricao"
      >Salvar</b-button
    >
    <b-button pill @click="cancelar">Cancelar</b-button>
  </div>
</template>

<script>
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescricaoOculos";
import AgendaService from "../../services/agenda";
import { mapState } from "vuex";
import { DateTime } from "luxon";

export default {
  props: {
    PrescricaoProps: {
      type: Object,
    },
  },

  watch: {
    PrescricaoProps() {
      this.prescricaoOculos = this.PrescricaoProps;
    },
  },
  data() {
    return {
      idConsulta: -1,
      uuidConsulta: "",
      consulta: "",
      dadosConsulta: {
        idPaciente: this.idPaciente,
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        titulo: "Prescrição Óculos",
      },
      prescricaoOculos: {
        idConsulta: "",
        uuid: "",
        idPaciente: "",
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        adicao: "",
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
      this.prescricaoOculos = {
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
        adicao: "",
        observacao: "",
      };
    },

    savePrescricao() {
      if (this.prescricaoOculos.uuid === "") {
        ConsultaService.save(this.dadosConsulta)
          .then((result) => {
            if (result.status === 201) {
              this.idConsulta = result.data.result.idConsulta[0];
              this.uuidConsulta = result.data.result.uuid;
              this.prescricaoOculos.idConsulta =
                result.data.result.idConsulta[0];
              this.prescricaoOculos.idPaciente = this.idPaciente;

              PrescricaoService.save(this.prescricaoOculos)
                .then((result) => {
                  if (result.status === 201) {
                    if (this.idConsulta === -1) {
                      this.showAlert("error", "Algo de errado ocorreu");
                    } else {
                      AgendaService.update(this.uuidAgendamento, {
                        atendido: true,
                        idConsulta: this.idConsulta,
                      })
                        .then((result) => {
                          if (result.status === 201) {
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
                .catch(() => {
                  this.showAlert(
                    "error",
                    "Ocorreu um erro ao Salvar a Prescrição"
                  );
                });
            } else {
              this.showAlert("error", "Ocorreu um erro ao salvar a Consulta");
            }
          })
          .catch(() => {
            this.showAlert(
              "error",
              "Erro ao salvar a consulta, verifique se todos os campos estão preenchidos corretamente"
            );
          });
      } else {
        PrescricaoService.update(
          this.prescricaoOculos,
          this.prescricaoOculos.uuid
        )
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Prescrição Atualizada com Sucesso");
            } else {
              this.showAlert("error", "Algo de errado ocorreu");
            }
          })
          .catch(() => {
            this.showAlert("error", "Algo de errado ocorreu ");
          });
      }
    },
  },
};
</script>

<style>
</style>