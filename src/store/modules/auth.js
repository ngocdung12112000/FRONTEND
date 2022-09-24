import AuthServices from '../../apis/modules/auth';

const state = {
    appName: 'ALO'
}

const getters = {
    appName: state => state.appName
}

const mutations = {
    LOGGING() {
        console.log("mutation LOGGING");
    }
}

const actions = {
    async login({commit}, credentials) {
        try {
            const response = await AuthServices.login(credentials);
            console.log("response...");
            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}