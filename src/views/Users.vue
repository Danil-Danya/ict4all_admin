<template>
    <div class="user__container">
        <Table :thead="thead" :delete="delete" :content="users" />
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Имя', 'Фамилия', 'Почта', 'Страна', 'Город', 'Зарегистрирован'],
        users: [],
        delete: {
            link: 'users',
            title: 'пользователя',
            text: 'пользователя'
        }
    }),

    computed: {
        ...mapGetters(['getUsers'])
    },

    methods: {
        ...mapActions(['fetchUsers'])
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchUsers({ limit: 20 });
        
        this.users = this.getUsers.rows.map(user => ({
            id: user.id,                                      
            name: user.profile?.first_name || 'Не указано',   
            surName: user.profile?.last_name || 'Не указано',   
            email: user.email,                                 
            country: user.profile?.country || 'Не указано',    
            city: user.profile?.city || 'Не указан',           
            registration: new Date(user.createdAt).toLocaleDateString() 
        }));
    }
}
</script>

