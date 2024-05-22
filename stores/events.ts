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
        events: [],
        compangySlug: sessionStorage.getItem('companySlug')
    }),

    getters: {
        getEventDetail(state) { return state.eventDetail; },
        getEventList(state) { return state.events; }
    },

    actions: {
        async fetchEvents() {
            try {
                this.loading = true;
                let response = await axios.get("/api/agencies/" + this.compangySlug + "/events/");
                if (response.status === 200) {
                    this.loading = false;
                    this.events = response.data.data
                    console.log(response.data.data)
                }
            } catch (error) {
                this.loading = false;
            }
        },

        async fetchEventDetail(slug: string) {
            try {
                this.loading = true;
                let response = await axios.get("/api/agencies/" + this.compangySlug + "/events/" + slug)
                if (response.status === 200) {
                    this.loading = false;
                    this.eventDetail = response.data.data
                    console.log(response.data.data)
                }
            } catch (error) {
                this.loading = false;
            }
        },

        async onCreateEvent(formData: any) {
            try {
                this.loading = true;
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/api/agencies/' + this.compangySlug + '/events', formData);
                    if (response.status === 201) {
                        this.loading = false;
                    }
                    console.log(response)
                });
            } catch (error: any) {
                this.loading = false;
            }
        }
        
    }
})