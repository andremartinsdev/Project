import { http } from './config'


export default {
    save: (receita) => {
      
        return http.post('/Receita', { ...receita })
    },

    readAll: () =>{
        return http.get('/Receita/readAll')
    },

    read: (uuid) => {
        return http.get(`Receita/read/${uuid}`)
    },

    delete: (uuid) => {
        return http.delete(`/Receita/${uuid}`)
    },

    update: (receita) => {
       
        return http.put(`Receita/${receita.uuid}`, {...receita})    
    },

    readDate: (dataInicial, dataFinal) =>{
      return http.get(`Receita/readDate/${dataInicial}/${dataFinal}`)
    },

    readDateFormaPagamento: (dataInicial, dataFinal, idFormaPagamento) => {
      return http.get(`Receita/readDateFormaPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
    }
}