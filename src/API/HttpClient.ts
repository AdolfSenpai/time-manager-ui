import axios from "axios";
import { HttpStatusCode } from "axios";

const httpClient = axios.create({
    withCredentials: true,
});

httpClient.interceptors.response.use((response) => response, (error) => {

    if (error.response) {

        const response = error.response;

        throw { data: response.data, status: response.status, statusText: response.statusText };
    }
    else if (error.request) {

        throw { data: "No response", status: HttpStatusCode.RequestTimeout, statusText: "" }
    }
    else {

        throw { data: error.message, status: 0, statusText: "" }
    }
})

export default httpClient;
