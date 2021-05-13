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
      return http.post('prescricao/oculos', {...prescricao})
    }
  },

  read: (uuid) => {
    return http.get(`prescricao/oculos/${uuid}`)
  },

  update: (prescricao, uuid) => {
   
    return http.put(`prescricao/oculos/${uuid}`, {...prescricao})
  },

  delete: (uuid) => {
    return http.delete(`prescricao/oculos/${uuid}`)
  },

  readDatePaciente: (dataInicial, dataFinal, idPaciente) => {
    return http.get(`/prescricao/oculos/read/${idPaciente}/${dataInicial}/${dataFinal}`)
  },

  readDate: (dataInicial, dataFinal) => {
    return http.get(`/prescricao/oculos/readDate/${dataInicial}/${dataFinal}`)
  }

}