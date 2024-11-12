<template>
    <div class="course__container">
        <Table :thead="thead" :delete="delete" :content="courses" />
        <router-link to="/course-create" class="bg-bg-blue p-[10px_20px] text-white text-[18px]
                                    mt-[30px] inline-block rounded-[10px] border-[1px] duration-300
                                    border-bg-blue hover:bg-white hover:text-text-blue"
        >
            Добавить курс
        </router-link>
    </div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        thead: ['id', 'Название курса', 'Имя ментора', 'Цена', 'Количество занятий'],
        courses: [],
        delete: {
            link: 'course',
            title: 'курса',
            text: 'курса'
        }
    }),

    computed: {
        ...mapGetters(['getCourses'])
    },

    methods: {
        ...mapActions(['fetchCourses']),
    },

    components: {
        Table
    },

    async mounted() {
        await this.fetchCourses({ include: 'videos' });
        console.log(this.getCourses);
        

        this.courses = this.getCourses.rows.map(course => {
            return {
                id: course.id,
                name: course.name || 'Не указано',
                mentor: course.mentor,
                price: course.price,
                lessons: course.videos.length
            };
        });
    }
}
</script>


