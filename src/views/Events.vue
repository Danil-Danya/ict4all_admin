<template>
    <div class="event__container">
        <Table :thead="thead" :delete="delete" :content="events" />
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Название события', 'Количетво просмотров', 'Дата создания',],
        events: [],
        delete: {
            link: 'event',
            title: 'ивента',
            text: 'ивента'
        }
    }),

    computed: {
        ...mapGetters(['getEvents'])
    },

    methods: {
        ...mapActions(['fetchEvents']),
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchEvents({ page: 1, limit: 10 });
        console.log(this.getEvents);

        this.events = this.getEvents.rows.map(event => {
            return {
                id: event.id,
                name: event.title,
                views: event.views,
                date: event.createdAt.split('T')[0] 
            };
        });
    }
}
</script>
