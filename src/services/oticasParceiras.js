import {http} from './config'

export default {
    save: (data) => {
        console.log(data)
        return http.post('/OticasParceiras', {...data})
    },

    read: () =>{
        return http.get('/OticasParceiras/read')
    }
}