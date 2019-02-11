import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    classDetail: {
        chapters: [],
    },
    lessonDetail: {
        test_questions: [],
    },
    bargainDetail: {},
};

export default {
	namespaced: true,
	state,
	actions,
    mutations,
    getters,
};
