<template>
    <div class="category__container">
        <Table :thead="thead" :delete="delete" :content="categories" />
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Название категории'],
        categories: [],
        delete: {
            link: 'category',
            title: 'категории',
            text: 'категории'
        }
    }),

    computed: {
        ...mapGetters(['getCategories'])
    },

    methods: {
        ...mapActions(['fetchCategories']),
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchCategories();
        console.log(this.getCategories);
        

        this.categories = this.getCategories.map(category => {
            return {
                id: category.id,
                name: category.category_name || 'Не указано'
            };
        });
    }
}
</script>

