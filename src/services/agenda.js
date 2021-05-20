import { http } from './config'


export default {
    save: (data) => {
        

        return http.post('/Agenda/', {...data})
    },
    read: () => {
        return http.get(`/Agenda/`)
    },

    readParams: (uuid) => {
        return http.get(`/Agenda/read/${uuid}`)
    },

    readDataPagination: (dataInicial, dataFinal) => {
        return http.get(`Agenda/paginationAllAgenda/${dataInicial}/${dataFinal}/page`)
    },

    readDatePacienteNext(dataInicial, dataFinal, idPaciente){
        return http.get(`Agenda/readDatePaciente/${dataInicial}/${dataFinal}/${idPaciente}/page`)
    },

    readDataPaginationProximo: (dataInicial, dataFinal, page) => {
        return http.get(`Agenda/paginationAllAgenda/${dataInicial}/${dataFinal}/page?page=${page}`)
    },

    readAgendaJoinPaciente: (uuid) => {
        return http.get(`/Agenda/read/agenda/${uuid}`)
    },

    readDate: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/${dataInicial}/${dataFinal}`)
    },

    readDateRelatorio: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Relatorio/${dataInicial}/${dataFinal}`)
    },

    
    readDateRelatorioPagination: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Relatorio/${dataInicial}/${dataFinal}/page`)
    },

       
    readDateRelatorioPaginationNavigation: (dataInicial, dataFinal, page) => {
        return http.get(`/Agenda/readDate/Relatorio/${dataInicial}/${dataFinal}/page?page=${page}`)
    },

    readDateRelatorioReceita: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Relatorio/receita/${dataInicial}/${dataFinal}`)
    },

    readDateRelatorioReceitaFormPag: (dataInicial, dataFinal, idFormaPagamento) => {
        return http.get(`/Agenda/readDate/Relatorio/receita/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
    },

    readDateRelatorioReceber: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Relatorio/receber/${dataInicial}/${dataFinal}`)
    },

    readDateRelatorioReceberFormaPagamento: (dataInicial, dataFinal, idFormaPagamento) => {
        return http.get(`/Agenda/readDate/Relatorio/receber/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
    },
    
    delete: (uuid) => {
        return http.delete(`/Agenda/${uuid}`)
    }, 

    update: (uuid, data) => {
        
        return http.put(`/Agenda/${uuid}`, {...data})
    },
    updatePagmento(uuid, data){
        return http.put(`/Agenda/updatePagamento/${uuid}`, data)
    },
    updateIdConsultAtendido(uuid, data){
        return http.patch(`/Agenda/updateIdConsultAtendido/${uuid}`, {...data})
    },

    updateIdConsultAtendidoDtVencimento(uuid, data){
        return http.patch(`/Agenda/updateIdConsultAtendidoDtVencimento/${uuid}`, {...data})
    },

    readDatePaciente: (dataInicial, dataFinal, idPaciente) => {
        return http.get(`/Agenda/readDatePaciente/${dataInicial}/${dataFinal}/${idPaciente}/page`)
    },

    readDateInner: (data) => {
        return http.get(`/Agenda/readDateInner/${data}`)
    },

    readDateInnerPagination: (data) => {
        return http.get(`/Agenda/readDateInnerPagination/${data}/page`)
    },

    readDateInnerPaginationNavigation: (data, page) => {
        return http.get(`/Agenda/readDateInnerPagination/${data}/page?page=${page}`)
    },

    readDateAgendamentoFinalizado: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Agendamento/Finalizado/${dataInicial}/${dataFinal}`)
    },

    readDateAgendamentoFinalizadoPagination: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Agendamento/Finalizado/${dataInicial}/${dataFinal}/page`)
    },
    
    readDateAgendamentoFinalizadoPaginationNavigation: (dataInicial, dataFinal, page) => {
        return http.get(`/Agenda/readDate/Agendamento/Finalizado/${dataInicial}/${dataFinal}/page?page=${page}`)
    },
    

    readDateVencimento: (dataAtual) =>{
        return http.get(`/Agenda/readDateVencimento/${dataAtual}`)
    },

    readDateProximasConsultas: (dataAtual) => {
        return http.get(`/Agenda/readDateProximasConsultas/${dataAtual}`)
    }
}