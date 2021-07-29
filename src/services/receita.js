import { http } from './config'


export default {
  save: (receita) => {

    return http.post('/Receita', { ...receita })
  },

  readAll: () => {
    return http.get('/Receita/readAll')
  },

  read: (uuid) => {
    return http.get(`Receita/read/${uuid}`)
  },

  delete: (uuid) => {
    return http.delete(`/Receita/${uuid}`)
  },
  readValorReceita: (dataInicial, dataFinal) => {
    return http.get(`Receita/readValorReceita/${dataInicial}/${dataFinal}`)
  },

  update: (receita) => {

    return http.put(`Receita/${receita.uuid}`, { ...receita })
  },

  readDate: (dataInicial, dataFinal) => {
    return http.get(`Receita/readDate/${dataInicial}/${dataFinal}`)
  },

  readDatePagas: (dataInicial, dataFinal, pago) => {
    return http.get(`Receita/readDatePagas/${dataInicial}/${dataFinal}/${pago}`)
  },

  readDateFormaPagamento: (dataInicial, dataFinal, idFormaPagamento) => {
    return http.get(`Receita/readDateFormaPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}`)
  },

  readDatePagasPagamento: (dataInicial, dataFinal, idFormaPagamento, pago) => {
    return http.get(`Receita/readDatePagasPagamento/${dataInicial}/${dataFinal}/${idFormaPagamento}/${pago}`)
  },
  readDateAll: (dataInicial, dataFinal) => {
    return http.get(`Receita/readDateAll/${dataInicial}/${dataFinal}`)
  },
}