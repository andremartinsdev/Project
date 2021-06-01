import { http } from './config'


export default {
    save: (despesa) => {
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
        return http.put(`Despesa/${despesa.uuid}`, {...despesa})    
    },

    readDate: (dataInicial, dataFinal) =>{
      return http.get(`Despesa/readDate/${dataInicial}/${dataFinal}`)
    },

    readDatePagas: (dataInicial, dataFinal, pago) =>{
        return http.get(`Despesa/readDatePagas/${dataInicial}/${dataFinal}/${pago}`)
      },

    readValorDespesa: (dataInicial, dataFinal) =>{
        return http.get(`Despesa/readValorDespesa/${dataInicial}/${dataFinal}`)
      },
      
    readDateFormaPagamento: (dataInicial, dataFinal, idFormaPagamento) => {
      return http.get(`Despesa/readDateFormaPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
    },

    readDatePagasPagamento: (dataInicial, dataFinal, idFormaPagamento, pago) => {
        console.log(pago, "aaaaa")
        return http.get(`Despesa/readDatePagasPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}/${pago}`)
      }

}