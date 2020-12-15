import {http} from './config'

export default {
    save: (data) => {
        const dados = {
            data:{
            ...data
        }
        }
        return http.post('/FormaDePagamento', dados)
    },

    read: () =>{
        return http.get('/FormaDePagamento/read')
    }
}