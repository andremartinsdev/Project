import {http} from './config'

export default {
    save: (data) => {
        const dados = {
            data: {
                ...data
            }
        }
        return http.post('/Procedimento', dados)
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
        const dados = {
            data: {
              ...data
            }
          }
        return http.put(`/Procedimento/${uuid}`, dados)
    }
}

