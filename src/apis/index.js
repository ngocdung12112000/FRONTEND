import request from "axios";

export default () => {
    return request.create({
        baseURL: "http://localhost:44366/" //process.env.VUE_APP_API,
    });
};