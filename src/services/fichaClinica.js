import { http } from './config'


export default {
  save: (dadosFicha, json_fichaClinica) => {
    const dados = {
      data: {
        ...dadosFicha
      },
      json_fichaClinica
    }
    return http.post('/fichaClinica', dados)
  },

  read: (uuid) => {
    return http.get(`/fichaClinica/${uuid}`)
  },

  update: (json_fichaClinica, uuid) => {
    return http.put(`/fichaClinica/${uuid}`, {data:{json_fichaClinica}})
  },

  delete: (uuid) => {
    return http.delete(`/fichaClinica/${uuid}`)
  }

}