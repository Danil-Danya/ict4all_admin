import { getAllRequests, getOneRequest } from '@/api/api.js';

export default {
    state: {
        requests: [],
        request: {}
    },

    actions: {
        async fetchRequests(context, params) {
            const response = await getAllRequests(params);           
            const requestsData = response.data;

            context.commit('setRequests', requestsData);
        },

        async fetchRequest(context, id) {
            const response = await getOneRequest(id);
            const requestData = response;

            context.commit('setRequest', requestData);
        }
    },

    mutations: {
        setRequests(state, requests) {
            state.requests = requests;
        },

        setRequest(state, request) {
            state.request = request;
        }
    },

    getters: {
        getRequests(state) {
            return state.requests;
        },

        getRequest(state) {
            return state.request;
        }
    }
}
