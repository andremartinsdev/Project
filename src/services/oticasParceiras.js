import {http} from './config'

export default {
    save: (data) => {
        return http.post('/OticasParceiras', {...data})
    },

    read: () =>{
        return http.get('/OticasParceiras/read')
    },

    delete: (uuid) =>{
        return http.delete(`/OticasParceiras/${uuid}`)
    },

    findById: (uuid) =>{
        return http.get(`/OticasParceiras/${uuid}`)
    },

    update: (uuid, data) =>{
        return http.put(`/OticasParceiras/${uuid}`, {...data})
    }
}