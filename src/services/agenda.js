import { http } from './config'


export default {
    save: (data) => {
        const dados = {
            data: {
              ...data
            },
          }

        return http.post('/Agenda/', dados)
    },
    read: () => {
        return http.get(`/Agenda/`)
    },

    readParams: (uuid) => {
        return http.get(`/Agenda/read/${uuid}`)
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
    
    delete: (uuid) => {
        return http.delete(`/Agenda/${uuid}`)
    }, 

    update: (uuid, data) => {
        const dados = {
            data: {
              ...data
            },
          }
        return http.put(`/Agenda/${uuid}`, dados)
    },

    readDatePaciente: (dataInicial, dataFinal, idPaciente) => {
        return http.get(`/Agenda/readDatePaciente/${dataInicial}/${dataFinal}/${idPaciente}`)
    },

    readDateInner: (data) => {
        return http.get(`/Agenda/readDateInner/${data}`)
    },

    readDateAgendamentoFinalizado: (dataInicial, dataFinal) => {
        return http.get(`/Agenda/readDate/Agendamento/Finalizado/${dataInicial}/${dataFinal}`)
    },
}