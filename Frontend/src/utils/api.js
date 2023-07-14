import axios from 'axios'
// require('dotenv').config();


const BASE_URL = "http://localhost:8080";

const options = {
    withCredentials: true,
}

export const postApi = async (url, data) => {
    console.log(BASE_URL+url,"url",data,"data");
    return await axios.post(BASE_URL + url, data, options)
}

export const fetchApi = async (url) => {
    return await axios.get(BASE_URL + url, options)
}

export const patchApi=async(url,data)=>{
    return await axios.patch(BASE_URL + url,data, options)
}
