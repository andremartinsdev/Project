import {http} from './config'

export default {
    save: (data) => {
       return http.post('/Configuracoes', data)
    },

    update: (uuid, data) => {
        return http.put(`/Configuracoes/${uuid}`, data)
    },

    read: () => {
        return http.get(`/Configuracoes/read`)
    }
}