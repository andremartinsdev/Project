import { http } from './config'


export default {
  save: (dadosFicha, json_fichaClinica) => {
    const dados = {
      
        ...dadosFicha
      ,
      json_fichaClinica
    }
    return http.post('/fichaClinica', {...dados})
  },

  read: (uuid) => {
    return http.get(`/fichaClinica/${uuid}`)
  },

  readPagination: (idPaciente,dataInicial,dataFinal,page) => {
    return http.get(`fichaClinica/readPagination/${idPaciente}/${dataInicial}/${dataFinal}/page?page=${page}`)

  },

  update: (json_fichaClinica, uuid) => {
    return http.put(`/fichaClinica/${uuid}`, {data:{json_fichaClinica}})
  },

  delete: (uuid) => {
    return http.delete(`/fichaClinica/${uuid}`)
  }

}