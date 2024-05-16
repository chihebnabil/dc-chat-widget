<template>
    <div class="chatbox">
        <ChatBoxContainer v-show="showChatBox" :background-color="backgroundColor" />
        
        <button @click="showChatBox = !showChatBox" :style="{
            backgroundColor: props.theme,
            width: props.btnSize,
            height: props.btnSize
        }" class="chatbox__button">
            <XIcon v-if="showChatBox" />
            <ChatIcon v-if="!showChatBox" />
        </button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ChatIcon from './icons/ChatIcon.vue';
import ChatBoxContainer from './ChatBoxContainer.ce.vue';
import XIcon from './icons/XIcon.vue';

const showChatBox = ref(false)
import store from './store'

onMounted(() => {
    store.workplaceId = props.workplaceId
    store.title = props.title
    store.subtitle = props.subtitle
    store.theme = props.theme
    store.actions = parseActions(props.actions)
    store.fontFamily = props.fontFamily
})

const parseActions = (actions) => {
    try {
        if (typeof actions === 'string') {
            return JSON.parse(actions);
        }
        if (Array.isArray(actions)) {
            return actions;
        }
    } catch (error) {
        return []
    }
    return [];
}

const props = defineProps({
    workplaceId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: 'Chat'
    },
    subtitle: {
        type: String,
        default: 'Chat with us'
    },
    btnSize: {
        type: String,
        default: '50px'
    },
    theme: {
        type: String,
        default: '#4CAF50'
    },
    actions: {
        type: Array,
        default: () => []
    },
    fontFamily: {
        type: String,
        default: 'Arial, Helvetica, sans-serif'
    },
})
</script>
<style>
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 10px;
}

.chatbox {
    position: fixed;
    bottom: 10px;
    right: 10px;
}

.chatbox__button {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
}

.chatbox__container {
    position: absolute;
    bottom: calc(100% + 5px);
    right: 0px;
    min-width: 380px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 1px 1px 100px 2px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    max-height: 600px;
}

.chatbox__container_header {
    height: 50px;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
}

.chatbox__container_content {
    flex: 1;
    overflow-y: scroll;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.chatbox__container_footer {
    height: 50px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}

.chatbox__container_footer input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
}

.chatbox__container_footer button {
    height: 100%;
    border: none;
    background-color: white;
    border-radius: 5px;
    min-width: 50px;
    cursor: pointer;
}

.message__box {
    display: flex;
    gap: 2px;
    flex-direction: row;
    padding: 17px 20px;
    background: rgba(0, 0, 0, 0.03);

}

.message__box.assistant {
    justify-content: flex-end;
    flex-direction: row-reverse;
}

.message__box.assistant {
    background-color: lightcyan;
}

.message__box.assistant>.message__content {
    flex-direction: row-reverse;
    color: black;
}

.message__content {
    display: flex;
    color: #666;
    width: 100%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
    margin: 0px;
    min-height: 10px;
}

.loading__state_btn {
    cursor: not-allowed;
    background-color: #ccc;
}

.loading__state_btn:before {
    content: '';
    display: inline-block;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    border-top-color: #a3a3a3;
    animation: spin 1s ease-in-out infinite;
    margin-right: 5px;
    width: 15px;
    height: 15px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.chat_actions {
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
}

.chat_action {
    padding: 5px 5px;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    border: 0.5px solid;
    font-size: 14px;
}
</style>