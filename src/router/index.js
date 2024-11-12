import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        layout: 'login',
        auth: 'false',
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
      meta: {
        layout: 'table',
        page: 'пользователей',
        auth: 'true',
      }
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: () => import('../views/Mentors.vue'),
      meta: {
        layout: 'table',
        page: 'преподователей',
        auth: 'true',
      }
    },
    {
      path: '/courses-categories',
      name: 'courses-categories',
      component: () => import('../views/CoursesCategories.vue'),
      meta: {
        layout: 'table',
        page: 'категорий курсов',
        auth: 'true',
      }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue'),
      meta: {
        layout: 'table',
        page: 'курсов',
        auth: 'false',
      }
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/CoursesVideos.vue'),
      meta: {
        layout: 'table',
        page: 'видео',
        auth: 'false',
      }
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('../views/Sessions.vue'),
      meta: {
        layout: 'table',
        page: 'сессий',
        auth: 'false',
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/Transactions.vue'),
      meta: {
        layout: 'table',
        page: 'транзакций',
        auth: 'false',
      }
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue'),
      meta: {
        layout: 'table',
        page: '',
        auth: 'false',
      }
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('../views/Requests.vue'),
      meta: {
        layout: 'table',
        page: 'запросов',
        auth: 'false',
      }
    },
    {
      path: '/mentors-create',
      name: 'mentors_create',
      component: () => import('../views/MentorsCreate.vue'),
      meta: {
        layout: 'create',
        page: 'преподавателя',
        auth: 'false',
      }
    },
    {
      path: '/courses-create',
      name: 'courses_create',
      component: () => import('../views/CourseCreate.vue'),
      meta: {
        layout: 'table',
        page: 'курс',
        auth: 'false',
      }
    },
    {
      path: '/videos-create',
      name: 'videos-create',
      component: () => import('../views/Requests.vue'),
      meta: {
        layout: 'table',
        page: 'запросов',
        auth: 'false',
      }
    },
  ]
})

export default router
