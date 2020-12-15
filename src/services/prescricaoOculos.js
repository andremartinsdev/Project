import { http } from './config'


export default {
  save: (prescricao) => {
    const dados = {
      data: {
        ...prescricao
      }
    }
    if (dados.data.idPaciente === -1) {
      return "error"
    } else {
      return http.post('prescricao/oculos', dados)
    }
  },

  read: (uuid) => {
    return http.get(`prescricao/oculos/${uuid}`)
  },

  update: (prescricao, uuid) => {
    const dados = {
      data: {
        ...prescricao
      }
    }
    return http.put(`prescricao/oculos/${uuid}`, dados)
  },

  delete: (uuid) => {
    return http.delete(`prescricao/oculos/${uuid}`)
  }
}