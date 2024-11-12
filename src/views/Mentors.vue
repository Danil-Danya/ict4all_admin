<template>
    <div class="user__container">
        <Table :thead="thead" :delete="delete" :content="mentors" />
        <router-link to="/mentors-create" class="bg-bg-blue p-[10px_20px] text-white text-[18px]
                                    mt-[30px] inline-block rounded-[10px] border-[1px] duration-300
                                    border-bg-blue hover:bg-white hover:text-text-blue"
        >
            Добавить преподователя
        </router-link>
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Имя', 'Фамилия', 'Почта', 'Опыт', 'Специальность',],
        mentors: [],
        delete: {
            link: 'mentors',
            title: 'ментора',
            text: 'ментора'
        }
    }),

    computed: {
        ...mapGetters(['getMentors'])
    },

    methods: {
        ...mapActions(['fetchMentors'])
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchMentors({ page: 1, limit: 10 });
        console.log(this.getMentors);
        
        
        this.mentors = this.getMentors.rows.map(mentor => ({
            id: mentor.id,                                      
            firstName: mentor.first_name,
            lastName: mentor.last_name,
            email: mentor.first_name,
            experience: mentor.experience + ' лет',
            speciality: mentor.speciality
        }));
    }
}
</script>
