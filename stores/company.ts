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
        isSend: false,
        company: {},
        compagnies: [],

    }),

    getters: {
        getCompagnies(state) { return state.compagnies },
        getCompany(state) { return state.company; },
        getIsSend(state) { return state.isSend; },
        getLoading(state) { return state.loading; },
    },

    actions: {
        async fetchCompagnies() {
            try {
                this.loading = true;
                let response = await axios.get('/api/agencies/companies');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.compagnies = response.data.data;
                }
            } catch (error) {
                this.loading = false;

            }
        },

        async fetchSelectedCompany(slug: string) {
            try {
                this.loading = true;
                let response = await axios.get('/api/companies/' + slug);
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.company = response.data.data;
                }
            } catch (error) {
                this.loading = false;

            }
        },


        async onCreateCompangy(formData: any) {
            try {
                this.loading = true;
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
        },

        async onSendMail(formData: any) {
            try {
                this.loading = true;
                this.isSend = false
                let response = await axios.post('/contact-admin', formData);
                if (response.status === 201) {
                    this.loading = false;
                    this.isSend = true;
                    const { $swal } = useNuxtApp();
                    $swal.fire({
                        title: "Bravo!",
                        text: "Merci de nous avoir contacté, notre équipe vous répondra dès que possible.",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loading = false;
                this.isSend = false
            }
        }
    }
})