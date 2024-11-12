<template>
    <div class="upload mb-[50px]">
        <img :src="url" alt="image" class="w-[300px] h-[150px] rounded-[10px] mb-[20px] cursor-pointer" @click="clearInput" v-if="url"> 
        <div class="upload__container w-full h-[400px] border-[2px] flex flex-col justify-center items-center border-bg-blue border-dashed border-spacing-[5px] rounded-[20px] relative">
            <input type="file" class="upload__image-input absolute w-full h-full opacity-0 z-[2]" @input="getImage($event)">
            <span class="block">
                <Upload />
            </span>
            <h2 class="upload__title text-[24px] font-bold text-text-blue">Загрузить изображение</h2>
            <p class="upload__text">Поддерживаемые файлы: PNG/JGP/JPEG/WEBP</p>
        </div>
    </div>
</template>

<script>
import Upload from '../icons/Upload.vue';

export default {
    data: () => ({
        filePath: '',
        url: ''
    }),

    props: {
        modelValue: {
            type: File,
            default: null
        }
    },

    methods: {
        getImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.filePath = file.name;
                this.url = URL.createObjectURL(file);

                this.$emit('update:modelValue', file);
            }
        },

        clearInput () {
            this.filePath = '';
            this.url = '';

            this.$emit('update:modelValue', null);
        }
    },

    components: {
        Upload
    }
}
</script>
