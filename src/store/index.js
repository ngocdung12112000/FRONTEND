import {createStore} from 'vuex';
// import Vue from 'vue';
// import Vuex from 'vuex';

import AuthStore from "./modules/auth";

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//         AUTH: AuthStore
//     }
// })

const store = createStore({
    modules: {
        AUTH: AuthStore
    }
})

export default store;

