<template>
    <div class="modal absolute bg-bg-modal w-full 
         backdrop-filter backdrop-blur-[2px] h-full 
         left-0 top-0 flex justify-center items-center"
    >
        <div class="modal__container bg-white p-[30px] w-[600px] rounded-[20px]">
            <div class="modal__content">
                <h2 class="modal__title text-[45px] font-bold text-text-blue">Просмотр запроса</h2>
                <span class="modal__line w-full h-[3px] bg-bg-blue block"></span>
                <p class="modal__text mt-[30px] text-[24px] font-bold text-text-blue">Имя: <span class="text-[18px] text-black font-normal"> {{ request.name }} </span></p>
                <p class="modal__text mt-[30px] text-[24px] font-bold text-text-blue">Телефон: <a :href="`tel:${request.phone}`" class="text-[18px] text-black font-normal underline">{{ request.phone }}</a></p>
                <p class="modal__text mt-[30px] text-[24px] font-bold text-text-blue">Сообщение: <p class="text-[18px] text-black font-normal">{{ request.message }}</p></p>
                <div class="modal__button-container mt-[30px] flex gap-[20px]">
                    <button class="modal__button bg-bg-blue 
                        border-bg-blue p-[5px_35px] text-white 
                        rounded-[10px] hover:bg-white hover:text-text-blue
                        border-[1px] duration-300" @click="toggleRequest"
                    >
                        Закрыть окно
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { api } from '@/api/api';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        request: {}
    }),

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    methods: {
        ...mapActions(['fetchRequest']),

        toggleRequest () {
            this.$emit('toggleRequest')
        }
    },

    computed: {
        ...mapGetters(['getRequest'])
    },

    async mounted () {
        await this.fetchRequest(this.id);
        this.request = this.getRequest.data
        
    }
}

</script>