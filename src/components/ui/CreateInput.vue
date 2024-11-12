<template>
    <div class="input__container mb-[30px]">
        <label class="label text-[25px] text-text-blue mb-[10px] block">{{ label }}</label>
        <input @input="$emit('update:modelValue', $event.target.value)"
                :placeholder="placeholder" :type="type ? type : 'text'" 
                class="input block border-bg-blue border-[1px] w-full
                       p-[20px_30px] rounded-[16px] text-[20px] text-text-blue
                       focus:outline-bg-blue focus:outline-[3px] placeholder:text-blue-400"
        >
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },

        placeholder: {
            type: String,
            required: true
        },

        label: {
            type: String,
            required: true
        },

        modelValue: {
            type: String,
            default: ''
        }
    }
}

</script>