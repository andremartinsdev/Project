import { http } from './config'


export default {
    save: (consulta) =>{
      return http.post('/Consulta/Save', consulta)
    },
    readFicha: (idFichaClinica) => {
      return http.get(`Consulta/ReadFicha/${idFichaClinica}`)
  }
}