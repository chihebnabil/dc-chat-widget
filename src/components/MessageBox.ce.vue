<template>
    <div class="message__box" :class="{ 'assistant': props.role == 'assistant' }">
        <div class="message__avatar"></div>
        <div class="message__content" :style="{fontFamily : store.fontFamily}">
            {{ props.content }}
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import store from './store'

const props = defineProps({
    role: {
        type: String,
        default: 'user'
    },
    content : {
        type: String,
        required: true
    }
})
</script>