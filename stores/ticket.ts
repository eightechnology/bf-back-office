import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use(
    (config) => {
        const { $locally } = useNuxtApp();
        const token = $locally.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const { $locally } = useNuxtApp();

export const useTicketStore = defineStore('ticket', {
    state: () => ({
        loading: false,
        tickets: [],
        dateEventSlug: "",
        eventSlug: "",
        endsAt: Date(),
        compangySlug: $locally.getItem('companySlug') 

    }),

    getters: {
        getLoading(state) { return state.loading; },
        getDateEventSlug(state) { return state.dateEventSlug; },
        getEndsAt(state) { return state.endsAt; },
    },

    actions: {
        async onCreateTicket(formData: any) {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/api/agencies/' + this.compangySlug + '/events/' + this.eventSlug + '/tickets', formData);
                    if (response.status === 200) {
                        this.loading = false;
                        console.log(response);
                    }
                });
            } catch (error: any) {
                this.loading = false;
            }
        },

        async checkDateEventSlug(eventDetail: any) {
            this.eventSlug = eventDetail.slug;
            this.endsAt = eventDetail.dates[0].ends_at;
            this.dateEventSlug = eventDetail.dates[0].slug;
        }


    }
})