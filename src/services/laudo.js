import { http } from './config'

export default {
    save : (data) =>{
        return http.post('/Laudo', {...data})
    },

    read : (dataInicial, dataFinal, idPaciente) => {
        return http.get(`/Laudo/readDate/${idPaciente}/${dataInicial}/${dataFinal}/page`)
    }, 

    update: (uuid, data) => {
        return http.put(`/Laudo/${uuid}`, data)
    }, 

    readDate: (dataInicial, dataFinal) => {
        return http.get(`/Laudo/readDate/${dataInicial}/${dataFinal}`)
    },

    readUuid: (uuid) =>{
        return http.get(`/Laudo/readUuid/${uuid}`)
    },

    delete: (uuid) =>{
        return http.delete(`/Laudo/${uuid}`)
    }
}