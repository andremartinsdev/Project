import {http} from './config'

export default {
    save: (data) => {
       
        return http.post('/Procedimento', {...data})
    },

    readAll: () => {
        return http.get(`/Procedimento/readAll`)
    },

    read: (uuid) => {
        return http.get(`/Procedimento/read/${uuid}`)
    },

    delete: (uuid) => {
        return http.delete(`/Procedimento/${uuid}`)
    },

    update: (data, uuid) => {
        
        return http.put(`/Procedimento/${uuid}`, {...data})
    }
}

