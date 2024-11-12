<template>
    <section class="loading fixed w-full h-full z-[999] top-0 left-0 bg-bg-modal backdrop-filter backdrop-blur-[2px]">
        <div class="loading__container flex justify-center items-center flex-col">
            <div class="flex justify-center items-center h-screen">
                <div class="relative inline-flex">
                    <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
            </div>
            <h2 class="title text-[24px] mt-[10px] text-white font-bold">Загрузка...</h2>
        </div>
    </section>
</template>