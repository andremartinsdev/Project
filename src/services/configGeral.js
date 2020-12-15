import {http} from './config'

export default {
    save: (data) => {
        const dados = {
            ...data
        }
        return http.post('/FormaPagamento', dados)
    }
}