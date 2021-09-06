import axios from 'axios'
const http = axios
    .create({
        baseURL: 'http://67.207.83.66:3002', //'https://optserver.winfit.com.br' ,,
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

