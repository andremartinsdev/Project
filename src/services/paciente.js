import { http } from './config'



export default {
    save: (paciente) => {
        const dados = {
            data:{
                ...paciente
            }
        }
        return http.post("paciente/", dados)
    },

    edit: (paciente, uuid) => {
        const dados = {
            data:{
                ...paciente
            }
        }
        return http.put(`paciente/${uuid}`, dados)
    },

    delete: (uuid) => {
        return http.delete(`paciente/${uuid}`)
    },

    nextPage: (page) => {
        return http.get(`paciente/pagination/page?page=${page}`)
    },

    previousPage: (page) => {
        return http.get(`paciente/pagination/page?page=${page}`)
    },

    list: () => {
        return http.get(`paciente/pagination/page`)
    },

    read: (uuid) => {
        return http.get(`paciente/${uuid}`)
    },

    readAll: () => {
        return http.get(`paciente/read/all`)
    },

    readParams: (type, data) => {
        if(type === "cpf"){
            return http.get(`paciente/readCpf/${data}`)
        }else if (type === "nome"){
            return http.get(`paciente/readName/${data}`)
        }

    }
}