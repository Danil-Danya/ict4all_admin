<template>
    <div class="input__container mb-[30px]">
        <label class="label text-[25px] text-text-blue mb-[10px] block">{{ label }}</label>
        <textarea
            :type="type"
            :placeholder="placeholder" 
            v-model="area"
            class="input block border-bg-blue border-[1px] w-full h-[300px]
                   p-[20px_30px] rounded-[16px] text-[20px] text-text-blue
                   focus:outline-bg-blue focus:outline-[3px] placeholder:text-blue-400"
        ></textarea>

        <p class="input__size text-text-blue" ref="size">{{ symbols }}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        symbols: '0/0 символов использованно',
        area: ''
    }),

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

        maxSize: {
            type: String
        }
    },

    methods: {
        countSymbolsAndValidate() {
            if (this.area.length >= this.maxSize) {
                this.area = this.area.slice(0, this.maxSize); 
                this.$refs.size.classList.add('text-text-red');
            }
            else {
                this.$refs.size.classList.remove('text-text-red');
            }
            this.symbols = `${this.area.length}/${this.maxSize} символов использованно`;
        },
    },

    watch: {
        area: {
            deep: true,
            handler () {
                this.countSymbolsAndValidate();
            }
        }
    }
}
</script>
