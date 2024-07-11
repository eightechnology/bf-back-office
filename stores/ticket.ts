import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = useRuntimeConfig().public.vueAppDevUrl;
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

const { $locally, $swal } = useNuxtApp();

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
        getTickets(state) { return state.tickets; },
    },

    actions: {
        async fetchTickets() {
            try {
                this.loading = true;
                let response = await axios.get('/api/agencies/' + this.compangySlug + '/events/' + this.eventSlug + '/tickets/' + this.dateEventSlug + '/list');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.tickets = response.data.data;
                    
                }
            } catch (error) {
                this.loading = false;

            }
        },

        async onCreateTicket(formData: any) {
            try {
                this.loading
                let response = await axios.post('/api/agencies/' + this.compangySlug + '/events/' + this.eventSlug + '/tickets/', formData);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response);
                }
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