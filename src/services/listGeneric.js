import { http } from './config'


export default {
    list: (idPaciente, dataInicial, dataFinal) => {
      return http.get(`/AllConsultas/ReadAllConsulta/${idPaciente}/${dataInicial}/${dataFinal}`)
    },
    read: (idConsulta) => {
      return http.get(`/Consulta/Read/${idConsulta}`)
    }
}