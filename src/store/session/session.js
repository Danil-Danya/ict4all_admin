import { getAllSessions, getOneSession } from '@/api/api.js';

export default {
    state: {
        sessions: [],
        session: {}
    },

    actions: {
        async fetchSessions(context, params) {
            const response = await getAllSessions(params);           
            const sessionsData = response.data;

            context.commit('setSessions', sessionsData);
        },

        async fetchSession(context, id) {
            const response = await getOneSession(id);
            const sessionData = response;

            context.commit('setSession', sessionData);
        }
    },

    mutations: {
        setSessions(state, sessions) {
            state.sessions = sessions;
        },

        setSession(state, session) {
            state.session = session;
        }
    },

    getters: {
        getSessions(state) {
            return state.sessions;
        },

        getSession(state) {
            return state.session;
        }
    }
}
