import { defineCustomElement } from 'vue'
import Chatbox from './components/Chatbox.ce.vue'

const ChatboxElement = defineCustomElement(Chatbox)
customElements.define('dc-chat-widget', ChatboxElement)