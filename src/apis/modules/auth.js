/* eslint-disable prettier/prettier */
import Api from '../../apis';
import request from "axios";

export default {
    login(credentials) {
        // console.log(Api());
        return request.post(`https://localhost:5001/api/Auth/login`, credentials)
                .then((response) => {
                    // console.log(response);
                    return response;
                }).catch((error) => {
                    console.log(error);
                });
        // return Api().post('api/Auth/login', credentials);
    },
    register() {
        return Api().post('api/Auth/register');
    }
}