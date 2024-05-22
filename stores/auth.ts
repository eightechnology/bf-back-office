import { defineStore } from 'pinia';
import axios from 'axios';
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

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false,
        showConfirmCode: false,
        login_token: "",

    }),

    getters: {
        getLoginToken(state) { return state.login_token; },
        getLoading(state) { return state.loading; },
        getShowConfirmCode(state) { return state.showConfirmCode; },
    },

    actions: {
        async onLogin(formData: any) {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/w-login', formData);
                    if (response.status === 200) {
                        this.loading = false;
                        this.showConfirmCode = true;
                        this.login_token = response.data.login_token
                        
                    }
                });
            } catch (error: any) {
                this.loading = false;
            }
        },

        async onRegister(formData: any) {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/register', formData);
                    if (response.status === 201) {
                        this.loading = false;
                        this.showConfirmCode = true;
                        this.login_token = response.data.login_token
                    }
                });
            } catch (error: any) {
                this.loading = false;
            }
        },

        async onConfirmAuth(formData: any) {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/w-login-confirm', formData);
                    if (response.status === 200) {
                        this.loading = false;
                        this.login_token = response.data.login_token;
                        this.showConfirmCode = false;
                        sessionStorage.setItem('token', response.data.token);
                    }
                });
            } catch (error: any) {
                this.loading = false;
            }
        },

        async onLogout() {
            try {
                this.loading
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/logout');
                    if (response.status === 201) {
                        this.loading = false;
                        localStorage.removeItem('_token')
                        location.reload()
                    }
                });
            } catch (error: any) {
                this.loading = false;
            }
        },
    }
})