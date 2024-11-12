<template>
    <div class="input__container mb-[30px]">
        <label class="label text-[25px] text-text-blue mb-[10px] block">{{ label }}</label>
        <select type="text" :placeholder="placeholder" 
                class="input block border-bg-blue border-[1px] w-full
                       p-[20px_30px] rounded-[16px] text-[20px] text-text-blue
                       focus:outline-bg-blue focus:outline-[3px] placeholder:text-blue-400"
        >
            <option v-for="option in optionList" :key="option" :value="option.value">
                {{ option.text }}
            </option> 
        </select>
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },

        optionList: {
            type: Array,
            required: true
        },

        label: {
            type: String,
            required: true
        }
    },
}

</script>