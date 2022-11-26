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
    },
    setGem(state, gem){
        state.userLogin.gem += gem;
    },
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
    // eslint-disable-next-line no-unused-vars
    async register({commit}, credentials) {
        try {
            console.log("RESGISTER");
            const response = await AuthServices.register(credentials);
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
    setGem ({commit}, gem) {
        commit('setGem', gem);
    },
    logout ({commit}) {
        commit('LogOut')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}