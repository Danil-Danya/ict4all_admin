import { getAllCategories, getOneCategory } from '@/api/api.js';

export default {
    state: {
        categories: [],
        category: {}
    },

    actions: {
        async fetchCategories(context, params) {
            const response = await getAllCategories(params);           
            const categoriesData = response.data;

            context.commit('setCategories', categoriesData);
        },

        async fetchCategory(context, id) {
            const response = await getOneCategory(id);
            const categoryData = response;

            context.commit('setCategory', categoryData);
        }
    },

    mutations: {
        setCategories(state, categories) {
            state.categories = categories;
        },

        setCategory(state, category) {
            state.category = category;
        }
    },

    getters: {
        getCategories(state) {
            return state.categories;
        },

        getCategory(state) {
            return state.category;
        }
    }
}
