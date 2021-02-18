import {http} from './config'

export default {
    save: (data) => {
        
        return http.post('/FormaDePagamento', {...data})
    },

    read: () =>{
        return http.get('/FormaDePagamento/read')
    }
}