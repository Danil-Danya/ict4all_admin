<template>
    <form action="" class="form flex justify-center w-full">
        <div class="form__container w-[70%]">
            <Loading v-if="loading"/>
            <CreateInput
                v-for="(field, key) in fields"
                :key="key"
                :label="field.label"
                :placeholder="field.placeholder"
                :type="field.type"
                v-model="field.text"
            />
            <CreateTextArea 
                :label="biography.label" 
                :placeholder="biography.placeholder" 
                :max-size="biography.maxSize"
            />
            <UploadImage v-model="uploadedImage"/>
            <Button @click.prevent="createMentor"
                :text="'Загрузить ментора на сервер'" 
            />
        </div>
    </form>
</template>

<script>
import CreateInput from '../ui/CreateInput.vue';
import CreateTextArea from '../ui/CreateTextArea.vue';
import Button from '../ui/Button.vue';
import UploadImage from '../ui/UploadImage.vue';
import Loading from '../ui/Loading.vue';

import { createMentor } from '@/api/api';

export default {
    data: () => ({
        fields: {
            firstName: {
                text: '',
                label: 'Имя преподователя',
                placeholder: 'Альберт',
                type: 'text'
            },
            lastName: {
                text: '',
                label: 'Фамилия ментора',
                placeholder: 'Лебедев',
                type: 'text'
            },
            email: {
                text: '',
                label: 'Почта ментора',
                placeholder: 'example.user@mail.com',
                type: 'text'
            },
            speciality: {
                text: '',
                label: 'Специальность ментора',
                placeholder: 'Frontend development',
                type: 'text'
            },
            experience: {
                text: '',
                label: 'Опыт ментора',
                placeholder: '5',
                type: 'number'
            },
            instagram: {
                text: '',
                label: 'Instagram ментора',
                placeholder: 'https://www.instagram.com/_user/profilecard/?link',
                type: 'text'
            },
            github: {
                text: '',
                label: 'Github ментора',
                placeholder: 'https://github.com/user_profile',
                type: 'text'
            },
            linkedin: {
                text: '',
                label: 'Linkedin ментора',
                placeholder: 'https://www.linkedin.com/in/name-surname-999999/',
                type: 'text'
            },
        },

        biography: {
            text: '',
            label: 'Биография ментора',
            placeholder: 'Краткая биография ментора',
            maxSize: 50,
            type: 'text'
        },

        uploadedImage: null,
        loading: false
    }),

    methods: {
        async createMentor () {
            this.loading = true;
            
            const formData = new FormData();
            
            formData.append('first_name', this.fields.firstName.text);
            formData.append('last_name', this.fields.lastName.text);
            formData.append('email', this.fields.email.text);
            formData.append('speciality', this.fields.speciality.text);
            formData.append('experience', this.fields.experience.text);
            formData.append('instagram', this.fields.instagram.text);
            formData.append('github', this.fields.github.text);
            formData.append('linkedin', this.fields.linkedin.text);
            formData.append('biography', this.biography.text);
            formData.append('image', this.uploadedImage);

            const createdMentor = await createMentor(formData);
            
            if (createdMentor.status === 200) {
                this.loading = false;
                location.reload();
            }
        }
    },

    components: {
        CreateInput,
        CreateTextArea,
        UploadImage,
        Button,
        Loading
    }
};
</script>
