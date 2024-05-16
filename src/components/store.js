import {reactive} from 'vue';

export default {
    loading: reactive(false),
    messages: reactive([]),
    workplaceId: reactive(null),
    theme : reactive('#7f8c8d'),
    title : reactive('Chatbox'),
    subtitle : reactive('Subtitle'),
    actions : reactive([]),
    fontFamily : reactive('sans-serif'),
}