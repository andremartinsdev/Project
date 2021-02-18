import { http } from './config'


export default {
    login : () => {
        return http.get("/")
    },

    logar : (cpfcnpj, senha) =>{
        return http.post('/Logar', {cpfcnpj, senha})
    }
}