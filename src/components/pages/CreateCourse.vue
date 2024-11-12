<template>
    <form action="" class="form flex justify-center w-full">
        <div class="form__container w-[70%]">
            <CreateInput
                v-for="(field, key) in fields"
                :key="key"
                :label="field.label"
                :placeholder="field.placeholder"
                :type="field.type"
                v-model="field.text"
            />

            <CreateSelect v-for="(option, index) in options" :key="option" :option-list="options[index]"/>

            <UploadImage />

            <Button 
                :text="'Загрузить курс на сервер'" 
            />
        </div>
    </form>
</template>

<script>
import CreateInput from '../ui/CreateInput.vue';
import CreateTextArea from '../ui/CreateTextArea.vue';
import Button from '../ui/Button.vue';
import UploadImage from '../ui/UploadImage.vue';
import CreateSelect from '../ui/CreateSelect.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        options: {
            mentors: [],
            categories: []
        },

        params: {
            limit: 100,
            page: 1
        },

        fields: {
            firstName: {
                text: '',
                label: 'Название курса',
                placeholder: 'Express Backend',
                type: 'text'
            },

            price: {
                text: '',
                label: 'Цена курса',
                placeholder: 790000,
                type: 'number'
            },
            

            fullPrice: {
                text: '',
                label: 'Завышенное название курса',
                placeholder: 1200000,
                type: 'text'
            },
        },
    }),

    computed: {
        ...mapGetters([
            'getMentors', 
            'getCategories'
        ])
    },

    methods: {
        ...mapActions([
            'fetchMentors', 
            'fetchCategories'
        ]),

        async createCourse () {

        }
    },

    components: {
        CreateInput,
        CreateTextArea,
        UploadImage,
        Button,
        CreateSelect
    },

    async mounted () {
        await this.fetchMentors(this.params);
        await this.fetchCategories(this.params);

        this.options.mentors = this.getMentors.rows.map(mentor => {
            return {
                text: `${mentor.first_name} ${mentor.last_name}`,
                value: `${mentor.first_name} ${mentor.last_name}`
            }
        })

        this.options.categories = this.getCategories.rows.map(category => {
            return {
                text: category.category_name,
                value: category.category_name
            }
        })
    }
};
</script>
