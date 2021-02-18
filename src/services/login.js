import { http } from './config'


export default {
    logar: (cpfcnpj, senha) => {
        return http.post('/Logar', { cpfcnpj, senha })
    }
}