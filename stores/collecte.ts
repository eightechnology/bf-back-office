import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000";
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

export const useCollecteStore = defineStore('collecte', {
    state: () => ({
        loading: false,
        collecteDetail: {},
        collectes: [],
        selectedCollecte: {},
        compangySlug: sessionStorage.getItem('companySlug')
    }),

    getters: {
        getLoading(state) { return state.loading; },
        getCollectes(state) { return state.collectes; },
        getCollecteDetail(state) { return state.collecteDetail; },
    },

    actions: {
        async fetchCollectes() {
            try {
                this.loading = true;
                let response = await axios.get("/api/agencies/" + this.compangySlug + "/collectes");
                if (response.status === 200) {
                    this.loading = false;
                    this.collectes = response.data.data
                    console.log(response.data.data)
                }
            } catch (error) {
                this.loading = false;
            }
        },

        async onCreateCollecte(formData: any) {
            try {
                this.loading = true;
                let response = await axios.post('/api/agencies/' + this.compangySlug + '/collectes/', formData);
                if (response.status === 201) {
                    this.loading = false;
                }
                console.log(response)
            } catch (error: any) {
                this.loading = false;
            }
        },
    }
})