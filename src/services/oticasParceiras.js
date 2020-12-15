import {http} from './config'

export default {
    save: (data) => {
        const dados = {
            data:{
            ...data
        }
        }
        return http.post('/OticasParceiras', dados)
    },

    read: () =>{
        return http.get('/OticasParceiras/read')
    }
}