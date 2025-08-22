import {defineStore} from "pinia";
import axios from "axios";

export const useJsonStore = defineStore('jsonStore', {
    state: () => ({
        jsonData: null,
    }),
    actions: {
        async fetchJsonData() {
            const response = await axios.get('/inventory')
            return response.data
        }
    },
})