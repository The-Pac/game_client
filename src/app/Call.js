import axios from "axios";


export const Call = axios.create({
    baseURL: "http://localhost:4006/",
    headers: {
        'Accept': '*/*',
        'Content-Type' : 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
    }
})

