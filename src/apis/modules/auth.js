import Api from '../../apis';

export default {
    login() {
        return Api().post('api/Auth/login');
    },
    register() {
        return Api().post('api/Auth/register');
    }
}