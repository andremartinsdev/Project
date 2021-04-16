import { http } from './config'

export default {
    save : (data) =>{
        return http.post('/Laudo', {...data})
    },

    read : (dataInicial, dataFinal, idPaciente, page) => {
        return http.get(`/Laudo/readDate/${idPaciente}/${dataInicial}/${dataFinal}/page?page=${page}`)
    }
}