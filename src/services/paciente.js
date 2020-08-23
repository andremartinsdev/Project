import { http } from './config'


export default {
    save: (paciente) => {
        return http.post("Paciente/Save", paciente)
    },

    edit: (paciente) => {
        return http.post(`Paciente/Update/${paciente.IDPACIENTE}`, paciente)
    },



}