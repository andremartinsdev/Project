import { http } from './config'


export default {
    save: (despesa) => {
       console.log(despesa)
        return http.post('/Despesa', {...despesa})
    },

    readAll: () =>{
        return http.get('/Despesa/readAll')
    },

    read: (uuid) => {
        return http.get(`Despesa/read/${uuid}`)
    },

    delete: (uuid) => {
        return http.delete(`/Despesa/${uuid}`)
    },

    update: (despesa) => {
        console.log(despesa)
        return http.put(`Despesa/${despesa.uuid}`, {...despesa})    
    },

    readDate: (dataInicial, dataFinal) =>{
      return http.get(`Despesa/readDate/${dataInicial}/${dataFinal}`)
    },

    readDateFormaPagamento: (dataInicial, dataFinal, idFormaPagamento) => {
      return http.get(`Despesa/readDateFormaPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
    }

}