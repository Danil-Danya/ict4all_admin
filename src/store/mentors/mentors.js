import { getMentors, } from '@/api/api.js';

export default {
    state: {
        mentors: [],
        //user: {}
    },

    actions: {
        async fetchMentors(context, params) {
            const response = await getMentors(params);
            const mentorData = response.data;

            context.commit('setMentors', mentorData);
        },

        // async fetchUser(context, id) {
        //     const response = await getOneUser(id);
        //     const userData = response;

        //     context.commit('setUser', userData);
        // }
    },

    mutations: {
        setMentors(state, mentors) {
            state.mentors = mentors;
        },

        // setUser(state, user) {
        //     state.user = user;
        // }
    },

    getters: {
        getMentors(state) {
            return state.mentors;
        },

        // getUser(state) {
        //     return state.user;
        // }
    }
}
