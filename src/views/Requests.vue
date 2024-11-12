<template>
    <div class="user__container">
        <Table :thead="thead" :delete="delete" :content="requests" />
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Имя', 'Телефон', 'Дата', 'Время'],
        requests: [],
        delete: {
            link: 'request',
            title: 'запроса',
            text: 'запроса'
        }
    }),

    computed: {
        ...mapGetters(['getRequests'])
    },

    methods: {
        ...mapActions(['fetchRequests']),
        formatDateTime(dateString) {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('ru-RU');
            const formattedTime = date.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });
            return { formattedDate, formattedTime };
        }
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchRequests();

        this.requests = this.getRequests.rows.map(request => {
            const { formattedDate, formattedTime } = this.formatDateTime(request.createdAt);
            return {
                id: request.id,
                name: request.name || 'Не указано',
                phone: request.phone,
                date: formattedDate,
                time: formattedTime
            };
        });
    }
}
</script>
