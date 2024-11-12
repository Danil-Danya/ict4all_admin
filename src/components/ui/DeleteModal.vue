<template>
    <div class="modal fixed bg-bg-modal w-full 
         backdrop-filter backdrop-blur-[2px] h-full 
         left-0 top-0 flex justify-center items-center"
    >
        <div class="modal__container bg-white p-[30px] w-[600px] rounded-[20px]">
            <div class="modal__content">
                <h2 class="modal__title text-[45px] font-bold text-text-blue">Удаление {{ content.title }}</h2>
                <span class="modal__line w-full h-[3px] bg-bg-blue block"></span>
                <p class="modal__text mt-[30px]">Вы действительно хотите удалить {{ content.text }}? После подтвержения позиция будет удаленна безвозвратно</p>
                <div class="modal__button-container mt-[30px] flex gap-[20px]">
                    <button class="modal__button bg-bg-blue 
                        border-bg-blue p-[5px_35px] text-white 
                        rounded-[10px] hover:bg-white hover:text-text-blue
                        border-[1px] duration-300" @click="toggleDelete"
                    >
                        Отмена
                    </button>
                    <button class="modal__button bg-bg-red 
                        border-bg-red p-[5px_35px] text-white 
                        rounded-[10px] hover:bg-white hover:text-text-red
                        border-[1px] duration-300" @click="deleteModel"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { api } from '@/api/api';

export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    },

    methods: {
        async deleteModel () {
            const { link, id } = this.content;

            const response = await api.delete(`${link}/${id}`);
            
            if (response) {
                location.reload();
            }
        },

        toggleDelete () {
            this.$emit('toggleDelete')
        }
    },

    mounted () {
        console.log(this.content);
        
    }
}

</script>