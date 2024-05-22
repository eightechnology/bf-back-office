import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter } from 'vue-router';
axios.defaults.baseURL = "http://localhost:8000"
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

export const useCompagnyStore = defineStore('compagny', {
    state: () => ({
        loading: false,
        compagnies: []
    }),

    getters: {
        getCompagnies(state) {
            return state.compagnies
        }
    },

    actions: {
        async fetchCompagnies() {
            try {
                this.loading = true;
                let response = await axios.get('/api/gencies/companies');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.compagnies = response.data.data;
                }
            } catch (error) {
                this.loading = false;

            }
        },

        async onCreateCompangy(formData: any) {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/api/agencies/companies', formData);
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