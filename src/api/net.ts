import axios from 'axios'

const net = axios.create({
    baseURL: "https://小熊.fun/api/",
    timeout: 2000,
})

export default net