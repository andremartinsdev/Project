import axios from 'axios'

const http = axios
    .create({
        baseURL: 'http://localhost:3002/',
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

