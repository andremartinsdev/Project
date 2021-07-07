import {http} from './config'

export default {
    save: (data) => {
       return http.post('/Configuracoes', data)
    }
}