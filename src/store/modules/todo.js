import {
    UPDATE_DESCRIPTION,
    CLEAR_DESCRIPTION
} from '../mutations.type';
import {
    CURRENT_DESCRIPTION
} from '../getters.type';

const state = {
    description: ''
}

const getters = {
    [CURRENT_DESCRIPTION](state) {
        return state.description;
    },

}

const actions = {

}

const mutations = {
    [UPDATE_DESCRIPTION](state, payload) {
        state.description = payload;
    },

    [CLEAR_DESCRIPTION](state) {
        state.description = "";
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}