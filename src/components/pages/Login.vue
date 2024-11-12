<template>
    <form class="login__form">
        <h1 class="login__title font-black text-[50px] mb-[50px] text-text-blue">Админ панель</h1>
        <div class="login__input-content">
            <LoginInput :label="loginData.label" v-model="loginData.field" />
            <LoginInput :label="passwordData.label" v-model="passwordData.field" :isPassword="true"/>
        </div>
        <p class="message text-red-600">{{ error }}</p>
        <button @click.prevent="login"
            class="login__button 
            p-[10px_30px] bg-bg-blue 
            text-white rounded-[10px] 
            hover:bg-white hover:text-text-blue
            border-input duration-300"
        >
            Войти
        </button>
    </form>
</template>

<script>
import LoginInput from '@/components/ui/LoginInput.vue';
import { login } from '@/api/api';

export default {
    data: () => ({
        loginData: {
            label: 'Логин',
            field: ''
        },
        passwordData: {
            label: 'Пароль',
            field: ''
        },
        error: null
    }),

    components: {
        LoginInput
    },

    methods: {
        async login () {
            const email = this.loginData.field;
            const password = this.passwordData.field;

            try {
                const response = await login({ email, password });
                
                if (response.status !== 200) {
                    this.error = response.response.data.message;
                    return;
                }

                localStorage.setItem('accessToken', response.data.accessTocken);
                localStorage.setItem('refreshToken', response.data.refreshTocken);

                if (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
                    this.$router.replace('/users');
                }
            } catch (error) {
                this.error = 'Ошибка входа';
            }
        }
    }
}
</script>
