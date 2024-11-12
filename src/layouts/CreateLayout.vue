<template>
    <section class="content flex w-full min-h-[100vh]">
        <Sidebar />    
    
        <section class="table w-container ml-[300px] mb-[50px]">
            <div class="table__container container w-[95%] m-[0_auto] mt-[50px]">
                <h1 class="table__page font-black text-[40px] text-text-blue text-center">Создать {{ $route.meta.page }}</h1>
                <div class="table__content bg-white w-full p-[50px] rounded-[20px]">
                    <RouterView />
                </div>
            </div>
        </section>
    </section>
</template>

<script>

import Sidebar from '@/components/layouts/Sidebar.vue';

export default {
    components: {
        Sidebar
    }
}

</script>