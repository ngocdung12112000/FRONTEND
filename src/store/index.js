/* eslint-disable prettier/prettier */
import {createStore} from 'vuex';
import AuthStore from "./modules/auth";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
        AUTH: AuthStore
    },
    plugins: [createPersistedState()],
})

export default store;

