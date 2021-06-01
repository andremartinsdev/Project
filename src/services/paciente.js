import { http } from './config'

export default {
    save: (paciente) => {
        return http.post("paciente/", {...paciente})
    },

    edit: (paciente, uuid) => {
        return http.put(`paciente/${uuid}`, {...paciente})
    },

    delete: (uuid) => {
        return http.delete(`paciente/${uuid}`)
    },

    nextPage: (page) => {
        return http.get(`paciente/pagination/page?page=${page}`)
    },

    previousPage: (page) => {
        return http.get(`paciente/pagination/page?page=${page}`)
    },

    listParams: (query) => {
        return http.get(`paciente/paginationParams/page?${query}`)
    },

    list: () => {
        return http.get(`paciente/pagination/page`)
    },

    read: (uuid) => {
        return http.get(`paciente/${uuid}`)
    },

    readAll: () => {
        return http.get(`paciente/read/all/names`)
    },

    readAniversariante: (mes, dia) => {
        return http.get(`paciente/anivessariantes/mes?day=${dia}&moth=${mes}`)
    },

    countPaciente: () =>{
        return http.get('paciente/pacientes/count')
    }
}