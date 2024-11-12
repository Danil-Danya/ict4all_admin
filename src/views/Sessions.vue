<template>
    <div class="session__container">
        <Table :thead="thead" :delete="delete" :content="sessions" />
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Имя учителя', 'Имя ученика', 'Дата начала', 'Название сессии'],
        sessions: [],
        delete: {
            link: 'session',
            title: 'сессии',
            text: 'сессии'
        }
    }),

    computed: {
        ...mapGetters(['getSessions']),
    },
    
    methods: {
        ...mapActions(['fetchSessions'])
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchSessions({ page: 1, limit: 10 });

        this.sessions = this.getSessions.rows.map(session => {
            return {
                id: session.id,
                mentor_name: session.mentor_name || 'Не указано',
                user_name: session.user_name || 'Не указано',
                start_date: session.start_date_and_time.split('T')[0],
                session_title: session.name || 'Не указано'
            };
        });
    }
}
</script>
