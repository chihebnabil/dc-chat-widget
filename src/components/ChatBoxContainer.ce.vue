<template>
    <div class="chatbox__container">
        <div :style="{ backgroundColor: store.theme, fontFamily: store.fontFamily }" class="chatbox__container_header">
            <span style="font-weight: bold;">{{ store.title }}</span>
            <span style="font-size: small;">{{ store.subtitle }}</span>
        </div>
        <div ref="contentContainer" :style="{ '--scrollbar-color': store.theme }" class="chatbox__container_content">
            <MessageBox v-for="message in store.messages" :content="message.content" :role="message.role ?? 'user'" />
            <div v-if="store.messages.length === 0" class="chat_actions">
                <span v-for="action in store.actions" class="chat_action" @click="sendMessage(action)"
                    :style="{ color: store.theme, fontFamily: store.fontFamily }">
                    {{ action }}
                </span>
            </div>
        </div>
        <div class="chatbox__container_footer">
            <input required v-model="userInput" type="text" v-on:keyup.enter="sendMessage"
                placeholder="Type a message..." />
            <button :class="{ 'loading__state_btn': store.loading }" @click="sendMessage">
                <SendIcon v-if="!store.loading" />
            </button>
        </div>
    </div>
</template>
<script setup>
import SendIcon from './icons/SendIcon.vue';
import MessageBox from './MessageBox.ce.vue';

import { ref, nextTick } from 'vue'
import store from './store'
const userInput = ref('')
let contentContainer = ref(null);
import socket from './socket'

socket.on('message:assistant:start', () => {
    store.messages.push({ content: '', role: 'assistant' })
})
socket.on('message:assistant:end', () => {
    store.loading = false
    nextTick(() => {
        contentContainer.value.scrollTop = contentContainer.value.scrollHeight
    })
})
socket.on('message:assistant', (msgChunk) => {
    store.messages[store.messages.length - 1].content += msgChunk
})

const sendMessage = async (eventOrMsg = null) => {
    try {
        store.loading = true
        let msg;
        if (eventOrMsg instanceof Event) {
            eventOrMsg.preventDefault();
            eventOrMsg.stopPropagation();
            msg = userInput.value;
        } else {
            msg = eventOrMsg;
        }

        if (msg) {
            userInput.value = msg
        }
        // prevent empty message
        if (!userInput.value) {
            return
        }

        store.messages.push({ content: userInput.value })
        socket.emit('message:guest', {
            message: userInput.value,
            workspace_id: store.workplaceId
        })

    } catch (e) {
        console.log(e)
    } finally {
        store.loading = false
    }
}
</script>