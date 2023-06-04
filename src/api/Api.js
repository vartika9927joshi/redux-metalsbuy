import axios from "axios";


export const api = axios.create({
    baseURL: `https://metalsbuy-api.uatsparxit.com/api/v1`,
});

