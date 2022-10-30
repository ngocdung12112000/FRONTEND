/* eslint-disable prettier/prettier */
import AuthServices from '../../apis/modules/auth';

const state = {
    appName: 'ALO',
    userId: '123',
}

const getters = {
    appName: state => state.appName,
    userId: state => state.userId,
    isAuthenticated: state => !!state.userId, 
}

const mutations = {
    setUser(state, userid){
        state.userId = userid;
    },
    LogOut(state){
        state.userId = null
    },
}

const actions = {
    async login({commit}, credentials) {
        try {
            const response = await AuthServices.login(credentials);
            commit('setUser', response.data.user_id);
            return response;
        } catch (error) {
            console.log(error.response);
        }
    },
    logout ({commit}) {
        commit('LogOut')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}