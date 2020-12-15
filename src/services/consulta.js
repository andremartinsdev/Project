import { http } from './config'


export default {
  save: (consulta) => {
    const dados = {
      data: {
        ...consulta
      }
    }
    return http.post('/consulta', dados)
  },

  update: (consulta, uuid) => {
    const dados = {
      data: {
        ...consulta
      }
    }
    return http.put(`/${uuid}`, dados)
  },

  readToday: (data) => {
    return http.get(`/consulta/readToday/${data}`)
  }

}