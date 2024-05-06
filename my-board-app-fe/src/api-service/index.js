import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYm5lcnZpdmlhbkBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6IlVTRVIiLCJpYXQiOjE3MTQ0MTY4MjEsImV4cCI6MTcxNDUwMzIyMX0._Rw7T9_v9TWsKbCjkUkPZJ2qa6h_LyJbiu-FpfWubeQ";
const REACT_APP_BACKEND_HOST= "http://localhost:8080/api/v1";
console.log('backend host is ', REACT_APP_BACKEND_HOST);
const ApiQuery = axios.create({
    baseURL: REACT_APP_BACKEND_HOST,
    timeout: 5000,
    headers: {
        // Authorization: `Bearer ${token}`,
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});
export default ApiQuery;