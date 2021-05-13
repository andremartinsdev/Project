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

    list: (query) => {
        return http.get(`paciente/pagination/page?${query}`)
    },

    read: (uuid) => {
        return http.get(`paciente/${uuid}`)
    },

    readAll: () => {
        return http.get(`paciente/read/all/names`)
    },
}