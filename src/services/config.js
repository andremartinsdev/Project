import axios from 'axios'
const http = axios
    .create({
        baseURL: 'http://147.182.248.150:3002', //'https://optserver.winfit.com.br' ,,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    })

http.interceptors.request.use((value) => {
    value.headers = {
        ...value.headers,
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
    return value
})

export { http }

