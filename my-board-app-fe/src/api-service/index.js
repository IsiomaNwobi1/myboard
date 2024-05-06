import axios from "axios";

const token = localStorage.getItem('token');
const REACT_APP_BACKEND_HOST= "http://localhost:8080/api/v1";

console.log('Storage token is ', token);
const ApiQuery = axios.create({
    baseURL: REACT_APP_BACKEND_HOST,
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});
const ApiQueryWithoutToken  = axios.create({
    baseURL: REACT_APP_BACKEND_HOST,
    timeout: 5000,
    headers: {
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});
export {ApiQueryWithoutToken as default, ApiQuery};