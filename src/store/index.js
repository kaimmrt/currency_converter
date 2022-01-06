import { createStore } from 'vuex';

const store = createStore({
    state: {
        currency_process_list: []
    },
    mutations: {
        setCurrencyProcessList(state, payload) {
            state.currency_process_list.unshift(payload);
        },
        deleteCurrencyProcessListItem(state, payload) {
            state.currency_process_list.splice(payload, 1);
        }

    },
    getters: {
        _getCurrencyProcessList: state => state.currency_process_list,
    }
})

export default store;