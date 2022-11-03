/* eslint-disable prettier/prettier */
import AuthServices from '../../apis/modules/auth';

const state = {
    appName: 'ALO',
    userId: '123',
    userImg: '',
    currentLessonId: 1,
}

const getters = {
    appName: state => state.appName,
    userId: state => state.userId,
    userImg: state => state.userImg,
    isAuthenticated: state => !!state.userId, 
    currentLessonId: state => state.currentLessonId
}

const mutations = {
    setUser(state, userid){
        state.userId = userid;
    },
    setUserImg(state, img){
        state.userImg = img;
    },
    setUserLessonId(state, lessonId){
        state.currentLessonId = lessonId;
    },
    LogOut(state){
        state.userId = null;
        state.userImg = '';
        state.currentLessonId = 1
    },
}

const actions = {
    async login({commit}, credentials) {
        try {
            const response = await AuthServices.login(credentials);
            commit('setUser', response.data.user_id);
            commit('setUserImg', response.data.image);
            commit('setUserLessonId', response.data.current_lesson_id);
            return response;
        } catch (error) {
            console.log(error.response);
        }
    },
    setavatar ({commit}, img) {
        commit('setUserImg', img);
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