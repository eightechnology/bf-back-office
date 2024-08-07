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

export const useEventStore = defineStore('events', {
    state: () => ({
        loading: false,
        showError: false,
        errorMessage: "",
        eventDetail: {},
        selectedEvent: {},
        events: [],
        errors: [],
        compangySlug: sessionStorage.getItem('companySlug')
    }),

    getters: {
        getEventDetail(state) { return state.eventDetail; },
        getLoading(state) { return state.loading; },
        getEventList(state) { return state.events; },
        getSelectedEvent(state) { return state.selectedEvent; },
        getShowError(state) { return state.showError; },
        getErrorMessage(state) { return state.errorMessage; },
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
                    let response = await axios.post('/api/agencies/' + this.compangySlug + '/events/', formData);
                    if (response.status === 201) {
                        this.loading = false;
                    }
                    console.log(response)
                });
            } catch (error: any) {
                this.loading = false;
                this.showError = true;
                if (error.response.status == 401 || error.response.status == 403 || error.response.status === 422) {
                    this.errorMessage = error.response.data.message;
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    }
                }
                else if (error.response.status == 500) {
                    this.errorMessage = 'Erreur de traitement, vueillez réessayer plus tard.';
                }
            }
        },

        async onUpdateEvent(formData: any, slug: string) {
            try {
                this.loading = true;
                // let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/api/agencies/' + this.compangySlug + '/events/' + slug, formData);
                    if (response.status === 201) {
                        this.loading = false;
                    }
                    console.log(response)
                // });
            } catch (error: any) {
                this.loading = false;
            }
        },

        onSetEventValue(event: any) {
            this.selectedEvent = event;
        }



    }
})