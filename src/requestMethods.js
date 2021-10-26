import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
