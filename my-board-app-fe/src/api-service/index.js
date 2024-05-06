import axios from "axios";

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvZ2hlbmVmZWppcm9nYmFqZUBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6IlVTRVIiLCJpYXQiOjE3MTQ2NzcxMzIsImV4cCI6MTcxNDc2MzUzMn0.J-fjadJcfbIZosTdAFBxKBNjlaPhs1yZtEvUK_m_aAn4G4lu3wPu7fOY2N_k7ZKaVK0PnQI44XRQ_lvMv2ZuQw";
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