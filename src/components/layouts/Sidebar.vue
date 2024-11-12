<template>
    <section class="sidebar bg-bg-blue w-[300px] h-svh fixed left-0 top-0">
        <div class="sidebar__header h-[150px] 
                    flex items-center justify-center 
                    relative after:content-[''] 
                    after:absolute after:bg-white
                    after:bottom-0 after:left-0
                    after:w-full after:h-[1px] after:block"
        >
            <div class="sidebar__logo">
                <img src="@/assets/images/logo.svg" alt="Logo" class="sidebar__logo-img">
            </div>
        </div>
        <div class="sidebar__body">
            <ul class="sidebar__list mt-[20px]">
                <li v-for="link in sidebarContentList" :key="link">
                    <router-link :to="link.path" class="sidebar__link block flex 
                                gap-[10px] p-[10px_] m-[0_30px] text-white relative
                                after:content-[''] after:block after:bg-white
                                after:absolute after:bottom-0 after:left-0
                                after:w-0 after:h-[1px] hover:after:w-full after:duration-300"
                    >
                        <span class="sidebar__link-icon">
                            <Component :is="link.icon" />
                        </span>
                        <p class="sidebar__text">{{ link.text }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>


<script>
import Users from '../icons/Users.vue';
import Mentors from '../icons/Mentors.vue';
import CoursesCategories from '../icons/CoursesCategories.vue';
import Courses from '../icons/Courses.vue';
import CoursesVideos from '../icons/CoursesVideos.vue';
import Events from '../icons/Events.vue';
import Sessions from '../icons/Sessions.vue';
import Transactions from '../icons/Transactions.vue';
import Requests from '../icons/Requests.vue';
import Logout from '../icons/Logout.vue';

export default {
    data: () => ({
        sidebarContentList: [
            { icon: Users, path: '/users', text: 'Пользователи' },
            { icon: Mentors, path: '/mentors', text: 'Преподователи' },
            { icon: CoursesCategories, path: '/courses-categories', text: 'Категории курсов' },
            { icon: Courses, path: '/courses', text: 'Курсы' },
            { icon: CoursesVideos, path: '/courses/videos', text: 'Видео' },
            { icon: Events, path: '/events', text: 'События' },
            { icon: Sessions, path: '/sessions', text: 'Сессии' },
            { icon: Transactions, path: '/transactions', text: 'Транзакции' },
            { icon: Requests, path: '/requests', text: 'Запросы' },
            { icon: Logout, path: '/logout', text: 'Выход' }
        ]
    }),
    components: {
        Users,
        Mentors,
        CoursesCategories,
        Courses,
        CoursesVideos,
        Events,
        Sessions,
        Transactions,
        Requests,
        Logout
    },
}
</script>
