/* eslint-disable prettier/prettier */
import AuthServices from '../../apis/modules/auth';

const state = {
    appName: '',
    userId: '',
    userImg: '',
    currentLessonId: 1,
    userLogin: {},
    userRank: 0,
}

const getters = {
    appName: state => state.appName,
    userId: state => state.userId,
    userImg: state => state.userImg,
    isAuthenticated: state => !!state.userId, 
    currentLessonId: state => state.currentLessonId,
    userLogin: state => state.userLogin,
    userRank: state => state.userRank,
}

const mutations = {
    setUser(state, userid){
        state.userId = userid;
    },
    setUserImg(state, img){
        state.userImg = img;
    },
    setUserRank(state, rank){
        state.userRank = rank;
    },
    setUserLessonId(state, lessonId){
        state.currentLessonId = lessonId;
    },
    LogOut(state){
        state.userId = null;
        state.userImg = '';
        state.currentLessonId = 1
    },
    setUserLogin(state, userLogin){
        state.userLogin = userLogin;
    }
}

const actions = {
    async login({commit}, credentials) {
        try {
            const response = await AuthServices.login(credentials);
            commit('setUser', response.data.user_id);
            commit('setUserImg', response.data.image);
            commit('setUserLessonId', response.data.current_lesson_id);
            commit('setUserLogin', response.data);
            return response;
        } catch (error) {
            console.log(error.response);
        }
    },
    setavatar ({commit}, img) {
        commit('setUserImg', img);
    },
    setranking ({commit}, rank) {
        commit('setUserRank', rank);
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