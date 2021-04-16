import {http} from './config'

export default {
    save: (data) => {
        
        return http.post('/FormaDePagamento', {...data})
    },

    read: () =>{
        return http.get('/FormaDePagamento/read')
    },

    delete: (uuid) =>{
        return http.delete(`/FormaDePagamento/${uuid}`)
    },

    update: (uuid, data) =>{
        return http.put(`/FormaDePagamento/${uuid}`, {...data})
    }, 

    findById: (uuid) =>{
        return http.get(`/FormaDePagamento/${uuid}`)  
    }
}