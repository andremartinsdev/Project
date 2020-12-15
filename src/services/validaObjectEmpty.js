
export default function ValidaObjEmpty(obj){
    for (var property in obj){
        if(Object.keys(obj[property]).length != 0){
             return true
        }
      } 
      return false  
}