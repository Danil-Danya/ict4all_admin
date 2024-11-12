import { getAllUsers, getOneUser } from '@/api/api.js';

export default {
    state: {
        users: [],
        user: {}
    },

    actions: {
        async fetchUsers(context, params) {
            const response = await getAllUsers(params);
            const usersData = response.data;

            context.commit('setUsers', usersData);
        },

        async fetchUser(context, id) {
            const response = await getOneUser(id);
            const userData = response;

            context.commit('setUser', userData);
        }
    },

    mutations: {
        setUsers(state, users) {
            state.users = users;
        },

        setUser(state, user) {
            state.user = user;
        }
    },

    getters: {
        getUsers(state) {
            return state.users;
        },

        getUser(state) {
            return state.user;
        }
    }
}
