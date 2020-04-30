import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {
        selectedFilter: 0,
        darkMode:       false,
        modals:         [],
    },
    mutations: {
        SET_SELECTED_FILTER(state, filter) {
            state.selectedFilter = filter;
        },
        SET_DARK_MODE(state, darkMode) {
            state.darkMode = darkMode;
        },
        ADD_MODAL_OPEN_STATE(state, { key, openState, payload }) {
            state.modals.push({
                key,
                openState,
                payload,
            });
        },
        UPDATE_MODAL_STATE(state, { key, openState, payload }) {
            const modalToUpdate     = state.modals.find((m) => m.key === key);
            modalToUpdate.openState = openState;
            modalToUpdate.payload   = payload;
        },
    },
    actions:   {
        setSelectedFilter({ commit }, filter) {
            commit('SET_SELECTED_FILTER', filter);
        },
        setDarkMode({ commit }, darkMode) {
            commit('SET_DARK_MODE', darkMode);
        },
        setModalOpenState({ commit, state }, options) {
            if (state.modals.find((m) => m.key === options.key)) {
                commit('UPDATE_MODAL_STATE', options);
            } else {
                commit('ADD_MODAL_OPEN_STATE', options);
            }
        },
    },
    getters:   {
        isDarkMode:        state => state.darkMode,
        getSelectedFilter: state => state.selectedFilter,
        getModal:          state => key => {
            return state.modals.find((m) => m.key === key);
        },
        getModalOpenState: state => key => {
            const obj = state.modals.find((m) => m.key === key);
            return obj ? obj.openState : false;
        },
        isAnyModalOpened:  state => state.modals.filter((_modal) => _modal.openState).length > 0,
    },
});
