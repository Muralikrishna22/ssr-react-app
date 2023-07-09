import axios from "axios"
export const setAxiosDefaults = () => {
    axios.defaults.baseURL = process.env.API_URL || 'https://fakestoreapi.com'
    axios.defaults.headers['Content-Type'] = 'application/json'
}