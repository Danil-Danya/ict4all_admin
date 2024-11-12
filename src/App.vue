<template>
    <div class="application bg-gray-300">
        <div class="layout">
            <Component :is="layout" />
        </div>
    </div>
</template>

<script>

import CreateLayout from './layouts/CreateLayout.vue';
import TableLayout from './layouts/TableLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';

export default {
    computed: {
        layout () {
            return `${ this.$route.meta.layout || 'login' }-layout`
        }
    },

    components: {
        CreateLayout,
        TableLayout,
        LoginLayout
    }
}

</script>
