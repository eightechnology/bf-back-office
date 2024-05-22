import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const useEventStore = defineStore('events', {
    state: () => ({
        loading: false,
        eventDetail: {},
        events: []
    }),

    getters: {
        getEventDetail(state) {
            return state.eventDetail
        }
    },

    actions: {
        async fetchEventDetail(slug: string) {
            try {
                this.loading = true;
                let response = await axios.get("/api/agencies/tab/events/" + slug)
                if (response.status === 200) {
                    this.loading = false;
                    this.eventDetail = response.data.data
                    console.log(response.data.data)
                }
            } catch (error) {

            }
        }
    }
})