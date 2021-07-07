<template>
  <div class="containerRelatorio">
    <Sidebar/>
    <div class="containerTabs">
      <b-card class="tabsCont" no-body>
        <b-tabs card>
          <b-tab title="Atendidos Hoje" active>
            <h5 class="text-center mb-4">Atendidos Hoje</h5>

            <b-card class="cardTable">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nome Paciente</th>
                    <th scope="col">Data Consulta</th>
                    <th scope="col">Horário</th>
                    <th scope="col">Procedimento</th>
                    <th scope="col">Forma de Pagamento</th>
                    <th scope="col">Valor Consulta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="consulta in this.consultasDeHoje"
                    :key="consulta.idConsulta"
                  >
                    <td>{{ consulta.nomePaciente }}</td>
                    <td>{{ consulta.data }}</td>
                    <td>{{ consulta.horario }}</td>
                    <td>{{ consulta.text }}</td>
                    <td>{{ consulta.descricao }}</td>
                    <td>
                      {{
                        consulta.valorConsulta.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </b-tab>

            
          <b-tab title="Aniversariantes">
            <h5 class="text-center mb-4">Aniversáriantes do Mês</h5>

            <b-card class="cardTable">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nome Paciente</th>
                    <th scope="col">Data de Aniversário</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="aniversariante in this.aniversarianteDoMes"
                    :key="aniversariante.idPaciente"
                  >
                    <td>{{ aniversariante.nomePaciente }}</td>
                    <td>{{ aniversariante.dataNascimento }}</td>
                    <td>{{ aniversariante.telefone }}</td>
                    <td>{{ aniversariante.email }}</td>
                  </tr>
                </tbody>
              </table>
            </b-card>
            <b-button
        size="sm"
        class="mr-3 mt-4"
        variant="primary"
        @click="gerarRelatorioAniversario"
      >
        Imprimir <b-icon-printer-fill class="ml-3"></b-icon-printer-fill
      ></b-button>
          </b-tab>
          <b-tab title="Consultas Vencidas">
            <b-card class="mt-3 cardTable">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nome Paciente</th>
                    <th scope="col">Data Consulta</th>
                    <th scope="col">Data de Vencimento</th>
                    <th scope="col">Procedimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="consulta in consultasVencidas[0]"
                    :key="consulta.idAgendamento"
                  >
                    <th>{{ consulta.nomePaciente }}</th>
                    <td>{{ consulta.data }}</td>
                    <td>{{ consulta.dataVencimento }}</td>
                    <td>{{ consulta.procedimento }}</td>
                  </tr>
                </tbody>
              </table>
            </b-card>

            
          </b-tab>
        </b-tabs>
      </b-card>
      <ModalFormaPagamento @reloadForma="readFormaPagamento" />
    </div>
  </div>
</template>

<script>
//import SidebarNavbar from "../SidebarNavbar";
import OticasParceirasServices from "../../services/oticasParceiras";
import DespesaService from "../../services/despesas";
import FormaDePagamentoService from "../../services/formaDePagamento";
import PacienteService from "../../services/paciente";
import AgendaService from "../../services/agenda";
import ReceitaService from "../../services/receita";
import moment from "moment";
import ModalFormaPagamento from '../../components/Agenda/ModalFormaPagamento'
// import Chart from '../../components/Chart/Chart'
import impressao from '../Relatorios/impressaoRelatorio/impressao'
import Sidebar from '../../components/SidebarNavbar.vue'
export default {
  data() {
    return {
      despesaPaga: "",
      tabIndexDespesa: 0,
      tabIndexReceita: 0,
      consultasVencidas: [],
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
      despesa: {
        uuid: "",
        descricaoDespesa: "",
        data: "",
        idFormaPagamento: null,
        despesaPaga: false,
        valor: 0,
        observacao: "",
      },

      receitaData: {
        uuid: "",
        descricaoReceita: "",
        data: "",
        idFormaPagamento: null,
        receitaPaga: false,
        valor: 0,
        observacao: "",
      },

      receitas: [],
      despesas: [],
      dataInicial: "",
      dataFinal: "",
      aniversarianteDoMes: [],
      valorReceita: 0,
      valorReceber: 0,
      valorDespesa: 0,
      formaDePagamentoSelect: null,
      atendimentos: [],
      formaDePagamento: [],
      oticasParceiras: [],
      nomePaciente: "",
      dataNascimento: "",
      valorConsulta: "00,00",
      procedimento: "",
      horario: "",
      consultasDeHoje: [],
    };
  },
  components: {
    //SidebarNavbar,
    // Chart,
    ModalFormaPagamento,
    Sidebar
  },
  created() {
    this.readFormaPagamento();
    this.readOticaParceira();
    this.readConsultaToday();
    this.aniversariantes();
    this.readDespesas();
    this.readReceita();
    this.consultaVencida();
  },
  methods: {
    testeData() {
    },
    // resetModalReceita() {
    //   this.receitaData = {
    //     uuid: "",
    //     descricaoReceita: "",
    //     data: "",
    //     idFormaPagamento: null,
    //     receitaPaga: false,
    //     valor: 0,
    //     observacao: "",
    //   };
    // },
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    compararHora(a, b) {
      return parseInt(a.horario) - parseInt(b.horario);
    },
    testeForma2() {
    },

    teste() {
    },
    detalhesConsulta(uuid, nomePaciente, dataNascimento, valorConsulta) {
      AgendaService.readParams(uuid).then((result) => {
        this.nomePaciente = nomePaciente;
        this.horario = result.data.agendamento.horario;
        this.dataNascimento = dataNascimento;
        this.valorConsulta = valorConsulta.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        this.procedimento = result.data.agendamento.procedimento;
      });
      this.$bvModal.show("modalDespesa");
    },
    readConsultaToday() {
      AgendaService.readDateAgendamentoFinalizado(
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ).then((result) => {
        this.consultasDeHoje = result.data.agendamentos;
        this.consultasDeHoje.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.consultasDeHoje.sort(this.compararHora);
      });
    },

    formaPagamento(descricao, idFormaPagamento) {
      return {
        text: descricao,
        value: idFormaPagamento,
      };
    },

    oticaParceira(nome, idOticaParceira) {
      return {
        text: nome,
        value: idOticaParceira,
      };
    },



    readFormaPagamento() {
     
     this.formaDePagamento = []
      FormaDePagamentoService.read().then((result) => {
        result.data.formasPagamento.map((el) => {
          this.formaDePagamento.push(
            this.formaPagamento(el.descricao, el.uuid)
          );
        });
      });
    },

    resetModalDespesa() {
      this.despesa = {
        uuid: "",
        descricaoDespesa: "",
        data: "",
        idFormaPagamento: null,
        despesaPaga: false,
        valor: 0,
        observacao: "",
      };
    },

    handleOkReceita(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveReceita();
    },

    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveDespesa();
    },

    readOticaParceira() {
      OticasParceirasServices.read().then((result) => {
        result.data.oticaParceira.map((el) => {
          this.oticasParceiras.push(
            this.oticaParceira(el.nome, el.idOticaParceira)
          );
        });
      });
    },

    testeForma() {
    },

    // gerarRelatorio() {
    //   if (this.dataInicial === "" || this.dataFinal === "") {
    //     this.showAlert("info", "Por favor Informe o Período inicial e Final");
    //     return;
    //   }
    //   if (
    //     this.formaDePagamentoSelect != null &&
    //     this.dataInicial != "" &&
    //     this.dataFinal != ""
    //   ) {
    //     this.receitaFormaPagamento();
    //     this.receberFormaPagamento();
    //     this.readValorDespesaFormaPagamento();
    //     this.readValorReceitaFormaPagamento();
    //   } else if (this.dataInicial != "" && this.dataFinal != "") {
    //     this.readValorDespesa();
    //     this.readReceitaData();
    //     this.receber();
    //     this.receita();
    //   }
    // },

    receber() {
      this.valorReceber = 0;
      AgendaService.readDateRelatorioReceber(
        this.dataInicial,
        this.dataFinal
      ).then((result) => {
        result.data.consultaReceber.map((el) => {
          this.valorReceber += el.valorConsulta;
        });
      });
    },


    gerarRelatorioAniversario(){
      impressao.gerarPdfAniversariante(this.aniversarianteDoMes)
    },

    async aniversariantes() {
      try {
        var mes = parseInt(moment().format("DD/MM/YYYY").substring(3, 5));
        var dia = moment().format("DD/MM/YYYY").substring(0, 2);
        const aniversariante = await PacienteService.readAniversariante(
          mes,
          dia
        );
        aniversariante.data.forEach((element) => {
          element.dataNascimento = moment(element.dataNascimento).format(
            "DD/MM/YYYY"
          );
          this.aniversarianteDoMes.push(element);
        });
         
      } catch (error) {
        this.showAlert("error", "ocorreu um erro ao listar Aniversariantes");
      }

      // PacienteService.readAniversariante().then((result) => {
      //   result.data.result.map((el) => {
      //     if (
      //       moment(el.dataNascimento).format("DD/MM/YYYY").substring(3, 5) ==
      //       moment().format("DD/MM/YYYY").substring(3, 5)
      //     ) {
      //       this.aniversarianteDoMes.push(el);
      //     }
      //   });
      // });
    },

    receita() {
      this.valorReceita = 0;
      AgendaService.readDateRelatorioReceita(
        this.dataInicial,
        this.dataFinal
      ).then((result) => {
        this.atendimentos = result.data.consulta;
        this.atendimentos.map((el) => {
          el.dataPagamento = moment(el.dataPagamento).format("DD/MM/YYYY");
        });
        result.data.consulta.map((el) => {
          this.valorReceita += el.valorConsulta;
        });
      });
    },

    receberFormaPagamento() {
      this.valorReceber = 0;
    },

    receitaFormaPagamento() {
      this.valorReceita = 0;
      AgendaService.readDateRelatorioReceitaFormPag(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          if (result.status === 201) {
            this.atendimentos = result.data.consulta;
            this.atendimentos.map((el) => {
              el.dataPagamento = moment(el.dataPagamento).format("DD/MM/YYYY");
            });
            result.data.consulta.map((el) => {
              this.valorReceita += el.valorConsulta;
            });
          } else {
            this.showAlert("error", "Ops! erro no relatorio #1");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! erro no relatorio #1");
        });
    },

    // saveDespesa() {
    //   if (this.despesa.uuid === "") {
    //     if (
    //       this.despesa.descricao === "" ||
    //       this.despesa.data === "" ||
    //       this.despesa.valor === 0 ||
    //       this.despesa.idFormaPagamento === null
    //     ) {
    //       this.showAlert("info", "Por favor preescha todos os campos");
    //     } else {
    //       this.despesa.valor = this.despesa.valor.replace("R$", "");
    //       this.despesa.valor = this.despesa.valor.replace(".", "");
    //       this.despesa.valor = this.despesa.valor.replace(",", ".");
    //       delete this.despesa.uuid;
    //       DespesaService.save(this.despesa)
    //         .then((result) => {
    //           if (result.status === 201) {
    //             this.showAlert("success", "Despesa Cadastrada com Sucesso");
    //             this.readDespesas();
    //             this.resetModalDespesa();
    //           } else {
    //             this.showAlert(
    //               "error",
    //               "Ops! ocorreu algo de errado ao salvar "
    //             );
    //           }
    //         })
    //         .catch(() => {
    //           this.showAlert(
    //             "error",
    //             "Ops! ocorreu algo de errado ao salvar Despesa"
    //           );
    //         });
    //     }
    //   } else if (this.despesa.uuid && this.despesa.uuid.length === 36) {
    //     this.despesa.valor = this.despesa.valor.replace("R$", "");
    //     this.despesa.valor = this.despesa.valor.replace(".", "");
    //     this.despesa.valor = this.despesa.valor.replace(",", ".");
    //     DespesaService.update(this.despesa)
    //       .then((result) => {
    //         if (result.status === 201) {
    //           this.showAlert("success", "Registro Atualizado");
    //           this.readDespesas();
    //           this.resetModalDespesa();
    //         } else {
    //           this.showAlert(
    //             "error",
    //             "Ops! ocorreu um erro ao Atualizar Registro"
    //           );
    //         }
    //       })
    //       .catch(() => {
    //         this.showAlert(
    //           "error",
    //           "Ops!! ocorreu um erro ao Atualizar Registro"
    //         );
    //       });
    //   }
    // },

    openFormaPagamento(){
this.$bvModal.show("modal-lg-addFormaPagamento");
    },

    // readDespesas() {
    //   this.despesas = [];
    //   DespesaService.readAll()
    //     .then((result) => {
    //       if (result.status === 201) {
    //         this.despesas.push(result.data.despesas);
    //         this.despesas[0].map((el) => {
    //           el.data = moment(el.data).format("DD/MM/YYYY");
    //         });
    //       } else {
    //         this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
    //       }
    //     })
    //     .catch(() => {
    //       this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
    //     });
    // },

    // editarDespesa(uuid) {
    //   DespesaService.read(uuid)
    //     .then((result) => {
    //       if (result.status === 201) {
    //         this.despesa.uuid = result.data.despesa[0].uuid;
    //         this.despesa.descricaoDespesa =
    //           result.data.despesa[0].descricaoDespesa;
    //         this.despesa.data = moment(result.data.despesa[0].data).format(
    //           "YYYY-MM-DD"
    //         );
    //         this.despesa.idFormaPagamento =
    //           result.data.despesa[0].uuidFormaPagamento;
    //         this.despesa.valor = result.data.despesa[0].valor.toLocaleString(
    //           "pt-br",
    //           { style: "currency", currency: "BRL" }
    //         );
    //         this.despesa.observacao = result.data.despesa[0].observacao;
    //         this.despesa.despesaPaga =
    //           result.data.despesa[0].despesaPaga === 1 ? true : false;

    //         this.tabIndexDespesa = 0;
    //       } else {
    //         this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
    //       }
    //     })
    //     .catch(() => {
    //       this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
    //     });
    // },

    // excluirDespesa(uuid) {
    //   if (!uuid && uuid.length === 36) {
    //     this.showAlert("info", "Selecione um Registro");
    //   } else {
    //     DespesaService.delete(uuid)
    //       .then((result) => {
    //         if (result.status === 201) {
    //           this.showAlert("success", "Registro de deletado com Sucesso");
    //           this.readDespesas();
    //         } else {
    //           this.showAlert(
    //             "error",
    //             "Ops! ocorreu um erro ao excluir Despesa"
    //           );
    //         }
    //       })
    //       .catch(() => {
    //         this.showAlert("error", "Ops!! ocorreu um erro ao excluir Despesa");
    //       });
    //   }
    // },

    readValorDespesaFormaPagamento() {
      DespesaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorDespesa += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Despesas"
          );
        });
    },
    readValorDespesa() {
      this.valorDespesa = 0;
      DespesaService.readDate(this.dataInicial, this.dataFinal)
        .then((result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorDespesa += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Despesas"
          );
        });
    },

    resetModal() {
      this.formaDePagamentoSelect = null;
      this.despesa = {
        uuid: "",
        descricaoDespesa: "",
        data: "",
        idFormaPagamento: null,
        despesaPaga: false,
        valor: 0,
        observacao: "",
      };
    },

    //RECEITA ----------------------------------------

    // saveReceita() {
    //   if (this.receitaData.uuid === "") {
    //     this.receitaData.valor = this.receitaData.valor.replace("R$", "");
    //     this.receitaData.valor = this.receitaData.valor.replace(".", "");
    //     this.receitaData.valor = this.receitaData.valor.replace(",", ".");
    //     ReceitaService.save(this.receitaData)
    //       .then((result) => {
    //         if (result.status === 201) {
    //           this.showAlert("success", "Receita Cadastrada com Sucesso");
    //           this.readReceita();
    //           this.resetModalReceita();
    //         } else {
    //           this.showAlert(
    //             "error",
    //             "Ops! ocorreu um erro ao Cadastrar Receita"
    //           );
    //         }
    //       })
    //       .catch(() => {
    //         this.showAlert(
    //           "error",
    //           "Ops!! ocorreu um erro ao Cadastrar Receita"
    //         );
    //       });
    //   } else if (this.receitaData.uuid && this.receitaData.uuid.length === 36) {
    //     this.receitaData.valor = this.receitaData.valor.replace("R$", "");
    //     this.receitaData.valor = this.receitaData.valor.replace(".", "");
    //     this.receitaData.valor = this.receitaData.valor.replace(",", ".");
    //     ReceitaService.update(this.receitaData)
    //       .then((result) => {
    //         if (result.status === 201) {
    //           this.showAlert("success", "Registro Atualizado");
    //           this.readReceita();
    //           this.resetModalReceita();
    //         } else {
    //           this.showAlert(
    //             "error",
    //             "Ops! ocorreu um erro ao Atualizar Registro"
    //           );
    //         }
    //       })
    //       .catch(() => {
    //         this.showAlert(
    //           "error",
    //           "Ops!! ocorreu um erro ao Atualizar Registro"
    //         );
    //       });
    //   }
    // },

    readReceitaData() {
      ReceitaService.readDate(this.dataInicial, this.dataFinal).then(
        (result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorReceita += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        }
      );
    },

    readReceita() {
      this.receitas = [];
      ReceitaService.readAll()
        .then((result) => {
          if (result.status === 201) {
            this.receitas.push(result.data.receitas);
            this.receitas[0].map((el) => {
              el.data = moment(el.data).format("DD/MM/YYYY");
            });
          } else {
            this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
        });
    },

    editarReceita(uuid) {
      ReceitaService.read(uuid)
        .then((result) => {
          this.receitaData.uuid = result.data.receita[0].uuid;
          this.receitaData.descricaoReceita =
            result.data.receita[0].descricaoReceita;
          this.receitaData.data = moment(result.data.receita[0].data).format(
            "YYYY-MM-DD"
          );
          this.receitaData.valor = result.data.receita[0].valor.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          );
          this.receitaData.idFormaPagamento =
            result.data.receita[0].uuidFormaPagamento;
          this.receitaData.observacao = result.data.receita[0].observacao;
          this.receitaData.receitaPaga =
            result.data.receita[0].receitaPaga === 1 ? true : false;
          this.tabIndexReceita = 0;
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
        });
    },

    excluirReceita(uuid) {
      if (!uuid && uuid.length === 36) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        ReceitaService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro de deletado com Sucesso");
              this.readReceita();
            } else {
              this.showAlert(
                "error",
                "Ops! ocorreu um erro ao excluir Receita"
              );
            }
          })
          .catch(() => {
            this.showAlert("error", "Ops!! ocorreu um erro ao excluir Receita");
          });
      }
    },

    readValorReceitaFormaPagamento() {
      ReceitaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorReceita += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Receitas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Receitas"
          );
        });
    },

    //--------- consultas vencidas

    consultaVencida() {
      AgendaService.readDateVencimento(moment().format("YYYY-MM-DD")).then(
        (result) => {
          this.consultasVencidas.push(result.data.agendamentos);
          this.consultasVencidas[0].map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
            el.dataVencimento = moment(el.dataVencimento).format("DD/MM/YYYY");
          });
        }
      );
    },

    abrirmodalDespesa() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.cardTableDespesa {
  height: 400px;
  overflow: scroll;
}
.containerData {
}

.cardBtn{
  display: flex;
  
}

.flexDiv{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 700px) {
  
  .flexDiv button{
    margin-top: 5px;
  }
  .tabsCont {
    width: 100%;
  }
  .containerTabs {
    padding: 0px !important;
  }
  .containerRelatorio {
    width: 100%;
    height: 700px;
  }

  .cardTable {
    overflow-y: scroll;
  }

  .divData {
    overflow-y: scroll;
  }
}



.btnDetalher {
  justify-content: baseline;
}
.containerTabs {
  font-family: "Monda", sans-serif;
  margin-top: 10px;
  padding: 20px;
  height: 670px;
}

.divData {
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: flex-end;
}
</style>

