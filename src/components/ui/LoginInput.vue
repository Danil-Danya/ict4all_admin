<template>
    <div class="login__input-container mb-[20px]">
        <label class="login__input-label text-text-blue text-[18px] font-cursive"> {{ label }} </label>
        <input :type="isPassword ? 'password' : 'text'" 
            class="login__input block
            outline-none p-[10px_20px] 
            border-input w-full rounded-[20px] 
            text-text-blue" 
            v-model="inputValue"
        >
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: true
        },
        isPassword: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
}
</script>
