import { http } from './config'



export default{
    save: (TIPOCONSULTA, DATA) =>{
       return http.post(`${TIPOCONSULTA}/Save`, DATA)
    }

}