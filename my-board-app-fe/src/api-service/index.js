import axios from "axios";

const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYm5lcnZpdmlhbkBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6IlVTRVIiLCJpYXQiOjE3MTQ2NzgwMDksImV4cCI6MTcxNDc2NDQwOX0.z956tV4JM6cBW7XnYLN_i_FAG3qvvXUIXN6aKI2_slk";
const REACT_APP_BACKEND_HOST= "http://localhost:8081/api/v1";
console.log('backend host is ', REACT_APP_BACKEND_HOST);
const ApiQuery = axios.create({
    baseURL: REACT_APP_BACKEND_HOST,
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});
export default ApiQuery;