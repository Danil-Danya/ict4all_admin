<template>
    <button class="button bg-bg-blue p-[10px_20px]
                 text-white text-[20px] rounded-[10px]
                 hover:bg-white hover:text-text-blue
                  border-bg-blue border-[1px] duration-300"
    >
        {{ text }}
    </button>
</template>

<script>

export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}

</script>