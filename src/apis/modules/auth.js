/* eslint-disable prettier/prettier */
// import Api from '../../apis';
import request from "axios";
const baseURL = "https://ndzttt.com/";
// https://localhost:5001

export default {
    login(credentials) {
        // console.log(Api());
        return request.post(`${baseURL}api/Auth/login`, credentials)
                .then((response) => {
                    // console.log(response);
                    return response;
                }).catch((error) => {
                    console.log(error);
                });
        // return Api().post('api/Auth/login', credentials);
    },
    register(credentials) {
        return request.post(`${baseURL}api/Auth/Register`, credentials)
                .then((response) => {
                    // console.log(response);
                    return response;
                }).catch((error) => {
                    console.log(error);
                });
    }
}