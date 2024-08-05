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



export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false,
        showConfirmCode: false,
        login_token: "",
        errorMessage: "",
        showError: false,
        showSuccess: false,
        errors: [],

    }),

    getters: {
        getLoginToken(state) { return state.login_token; },
        getLoading(state) { return state.loading; },
        getShowConfirmCode(state) { return state.showConfirmCode; },
        getShowSuccess(state) { return state.showSuccess; },
        getShowError(state) { return state.showError; },
        getErrorMessage(state) { return state.errorMessage; }
    },

    actions: {
        async onLogin(formData: any) {
            try {
                this.loading = true
                this.showError = false;
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/w-login', formData);
                    if (response.status === 200) {
                        console.log(axios.defaults.baseURL)
                        this.loading = false;
                        this.showConfirmCode = true;
                        this.login_token = response.data.login_token;
                        const { $swal } = useNuxtApp();
                        $swal.fire({
                            position: "top-end",
                            title: "Bravo!",
                            text: "On vous a envoyé un code de confirmation",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
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
                else {
                    this.errorMessage = 'Erreur de traitement, vueillez réessayer plus tard.';
                }
            }
        },

        async onRegister(formData: any) {
            
            try {
                this.loading = true
                this.showError = false;
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/register', formData);
                    if (response.status === 200) {
                        this.loading = false;
                        this.showConfirmCode = true;
                        this.login_token = response.data.login_token;
                        console.log(response);
                        const { $swal } = useNuxtApp();
                        $swal.fire({
                            position: "top-end",
                            title: "Bravo!",
                            text: "On vous a envoyé un code de confirmation",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
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
                else {
                    this.errorMessage = 'Erreur de traitement, vueillez réessayer plus tard.';
                }
            }
        },

        async onConfirmAuth(formData: any) {
            try {
                this.loading = true;
                this.showError = false;
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/w-login-confirm', formData);
                    if (response.status === 200) {
                        console.log(response)
                        this.loading = false;
                        this.login_token = response.data.login_token;
                        this.showConfirmCode = false;
                        const { $locally } = useNuxtApp();
                        $locally.setItem('token', response.data.token);
                        const router = useRouter();
                        const compaganyStore = useCompagnyStore();
                        await compaganyStore.fetchCompagnies().then(() => {
                            const companies: any = computed(() => compaganyStore.getCompagnies);
                            if (companies.value.length == 1) {
                                sessionStorage.setItem('companySlug', companies.value[0].slug);
                                location.assign('/');
                            } else if (companies.value.length > 1) {
                                router.push('/company/list');
                            }
                            
                            else if (companies.value.length == 0) {
                                router.push('/company/create');
                            }
                        })
                    }
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
                else {
                    this.errorMessage = 'Erreur de traitement, vueillez réessayer plus tard.';
                }
            }
        },

        async onLogout() {
            try {
                this.loading;
                this.showError = false;
                let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                    let response = await axios.post('/logout');
                    if (response.status === 201) {
                        this.loading = false;
                        sessionStorage.clear();
                        location.assign('/auth/login');
                    }
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
                else {
                    this.errorMessage = 'Erreur de traitement, vueillez réessayer plus tard.';
                }
            }
        },
    }
})