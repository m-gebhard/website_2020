import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {
        selectedFilter: 0,
    },
    mutations: {
        SET_SELECTED_FILTER(state, filter) {
            state.selectedFilter = filter;
        }
    },
    actions:   {
        setSelectedFilter({ commit }, filter) {
            commit('SET_SELECTED_FILTER', filter);
        }
    },
    getters:   {
        getSelectedFilter: state => state.selectedFilter,
    },
});
