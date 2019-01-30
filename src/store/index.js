import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'

import home from './home';
import my from './my';

Vue.use(Vuex);

let modules = {
    home,
    my,
};

export default new Vuex.Store({
    state: {
        userInfo: {},
        phoneCode: '+86',
    },
    modules,
    actions,    // 根级别的 action
    mutations,  // 根级别的 mutations
    // 根级别的 getters
    getters: {
        getGroups(state) {
            return state.groups
        }
    }
})
