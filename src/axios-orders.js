import axios from "axios";

const instance = axios.create({
    baseURL: 'https://asr-burger-builder.firebaseio.com/'
})
export default instance