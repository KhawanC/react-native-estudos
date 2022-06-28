import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: "http://192.168.0.100:8081/comercio-seguro"
})

export default AxiosInstance;