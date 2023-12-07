import axios from "axios";

export const api_key = '7c17b3369a7164400d6369917c2ce505';

export const api = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
})