import axios from "axios";

//json-server --watch db.json
export const api = axios.create({
    baseURL:'https://json-devshop.vercel.app/products'
})