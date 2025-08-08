import axios from "axios"

const api = axios.create({
    baseURL : "https://hrick-mern-thinkboard.onrender.com/api/"
})

export default api;