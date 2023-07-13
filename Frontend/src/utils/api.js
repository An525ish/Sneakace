import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL

const options = {
    withCredentials: true,
}

export const postApi = async (url, data) => {
    return await axios.post(BASE_URL + url, data, options)
}

export const fetchApi = async (url) => {
    return await axios.get(BASE_URL + url, options)
}