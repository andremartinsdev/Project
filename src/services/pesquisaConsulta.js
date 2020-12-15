import { http } from './config'
export default function Pesquisa(type, params){
    const {idPaciente, dataInicial, dataFinal} = params
    if(type === "ficha_clinica"){
        return http.get(`fichaClinica/read/${idPaciente}/${dataInicial}/${dataFinal}`)
    }else if(type === "prescricao_oculos") {
        return http.get(`/prescricao/oculos/read/${idPaciente}/${dataInicial}/${dataFinal}`)
    }else if(type === "prescricao_lente") {
        return http.get(`/prescricao/lente/read/${idPaciente}/${dataInicial}/${dataFinal}`)
    }
}