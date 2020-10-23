import { http } from './config'


export default {
    read: (idClinica) =>{
        return http.get(`Clinica/ReadClinica/${idClinica}`)
    }
}