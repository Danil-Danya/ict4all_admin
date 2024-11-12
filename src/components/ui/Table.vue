<template>
    <Transition name="delete">
        <DeleteModal :content="delete" @toggleDelete="toggleDelete" v-if="deleteModal"/>
    </Transition>
    <Transition name="delete">
        <RequestModal :id="requestId" @toggleRequest="toggleRequest" v-if="request"/>
    </Transition>
    <table class="table-auto border-collapse w-full">
        <thead>
            <tr class="border bg-bg-blue text-white h-[40px] outline-none border-none">
                <th v-for="(title, index) in thead" :key="title" 
                    :class="{
                        'rounded-tl-[20px]': index === 0,       
                    }"
                    class="outline-none border-none"
                >
                    {{ title }}
                </th>
                <th class="rounded-tr-[20px]">
                    Действие
                </th>
            </tr>
        </thead>
        <tbody v-if="content">
            <tr v-for="(column, index) in content" :key="index">
                <td class="border-[2px] border-bg-blue border-r-0 p-[20px_10px] text-center"
                    v-for="(value, keyIndex) in column" 
                    :key="keyIndex"
                >
                    {{ value }}
                </td>
                <td class="flex justify-center border-[1px] border-bg-blue p-[20px_10px] text-center">
                    <span class="table__icon cursor-pointer" @click="toggleDelete(column.id)">
                        <Delete />
                    </span>
                    <!-- <router-link to="">
                        <Edite />
                    </router-link> -->
                    <span class="table__icon cursor-pointer" 
                          @click="toggleRequest(column.id)" 
                          v-if="$route.name === 'requests'"
                    >
                        <Views />
                    </span>
                </td>    
            </tr>   
        </tbody>
    </table>
</template>

<script>

import request from '@/store/requests/request';
import Delete from '../icons/Delete.vue';
import Edite from '../icons/Edite.vue';
import Views from '../icons/Views.vue'; 

import DeleteModal from './DeleteModal.vue';
import RequestModal from './RequestModal.vue';

export default {
    data: () => ({
        deleteModal: false,
        request: false,
        requestId: 0,
        views: false
    }),

    props: {
        thead: {
            type: Array,
            required: true
        },

        content: {
            type: Array || Object,
            required: true
        },

        action: {
            type: Array
        },

        delete: {
            type: Object
        }
    },

    components: {
        DeleteModal,
        RequestModal,
        Delete,
        Views,
        Edite
    },

    methods: {
        toggleDelete (id) {
            this.delete.id = id;
            this.deleteModal = !this.deleteModal;
        },

        toggleRequest (id) {
            this.requestId = id;
            this.request = !this.request;
        }
    },

    mounted () {
        console.log(this.content); 
    }
}


</script>


<style>

/* we will explain what these classes do next! */
.delete-enter-active,
.delete-leave-active {
  transition: opacity 0.5s ease;
}

.delete-enter-from,
.delete-leave-to {
  opacity: 0;
}

</style>