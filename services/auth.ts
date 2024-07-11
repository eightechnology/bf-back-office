import axios from 'axios';
import { useRouter } from 'vue-router';
axios.defaults.baseURL = useRuntimeConfig().public.vueAppDevUrl;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            // config.headers['Accept'] = 'application/json';
            // config.headers['Content-Type'] = 'application/json';
            // config.headers['Content-Type'] = 'multipart/form-data';
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


export default function useAuth() {
    const loading = ref(false);
    const formData = ref(null);
    const errorMessage = ref("");
    const login_token = ref("");
    const showError = ref(false);
    const userId = ref(null);
    const user = ref(null);
    const errors = ref(null);
    const isValid = ref(false);
    // const store = useStore();
    const router = useRouter();
    const successMessage = ref(null);
    const showMessage = ref(false);
    const tickets = ref([]);

    const onLogin = async () => {
        try {
            loading.value = true;
            let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                console.log(res)
                let response = await axios.post('/w-login', formData.value);
                if (response.status === 200) {
                    loading.value = false;
                    login_token.value = response.data.login_token;
                }
                console.log(response)
            });
        } catch (error: any) {
            loading.value = false;
            showError.value = true
            if (error.response.status === 401) {
                errorMessage.value = error.response.data.message;
            }
            else if (error.response.status === 403) {
                errorMessage.value = error.response.data.message;
            }
            else if (error.response.status === 422) {
                errorMessage.value = error.response.data.message;
                if (error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            }
            else {
                errorMessage.value = 'Erreur de traitement, vueillez réessayer plus tard.';
            }
        }
    };

    const onRegister = async () => {
        try {
            loading.value = true;
            let resp = await axios.get('/sanctum/csrf-cookie/').then(async res => {
                let response = await axios.post("/register", formData.value)
                if (response.status === 200) {
                    loading.value = false;
                    login_token.value = response.data.login_token;
                }
                console.log(response.data.login_token)
            })
        } catch (error: any) {
            loading.value = false
            showError.value = true
            if (error.response.status === 401) {
                errorMessage.value = error.response.data.message
            }
            else if (error.response.status === 422) {
                errorMessage.value = error.response.data.message;
                if (error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            }
            else {
                errorMessage.value = "Erreur de traitement, vueillez réessayer plus tard."
            }
        }
    };

    const onConfirmAuth = async (formData: any) => {
        try {
            loading.value = true;
            let response = await axios.post("/w-login-confirm", formData)
            if (response.status === 200) {
                loading.value = false;
                console.log(response.data)
                sessionStorage.setItem('token', response.data.token)
                router.push('/company/create')
            }
        } catch (error: any) {
            loading.value = false
            showError.value = true
            if (error.response.status === 401) {
                errorMessage.value = error.response.data.message
            }
            else if (error.response.status === 422) {
                errorMessage.value = error.response.data.message;
                if (error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            }
            else {
                errorMessage.value = "Erreur de traitement, vueillez réessayer plus tard."
            }
        }
    };

    const onGetAuthUser = async () => {
        try {
            loading.value = true;
            let response = await axios.get("/user")
            if (response.status === 200) {
                loading.value = false;
                user.value = response.data.user;
                // sessionStorage.setItem('userInfo', JSON.stringify(response.data.data.user))
            }
        } catch (error: any) {
            loading.value = false;
            showError.value = true
            if (error.response.status === 401) {
                errorMessage.value = error.response.data.message
            }
            else if (error.response.status === 422) {
                errorMessage.value = error.response.data.message;
                if (error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            }
            else {
                errorMessage.value = "Erreur de traitement, vueillez réessayer plus tard."
            }
        }
    }

    const onLogout = async () => {
        try {
            loading.value = true;
            let response = await axios.post("/logout")
            if (response.status === 204) {
                loading.value = false;
                localStorage.removeItem('_token')
                location.reload()
                // router.push('/login')
            }
        } catch (error: any) {
            loading.value = false
            showError.value = true
            if (error.response.status === 401) {
                errorMessage.value = error.response.data.message
            }
            else if (error.response.status === 422) {
                errorMessage.value = error.response.data.message;
                if (error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            }
            else {
                errorMessage.value = "Erreur de traitement, vueillez réessayer plus tard."
            }
        }
    }

    return {
        formData,
        loading,
        userId,
        user,
        errorMessage,
        showError,
        isValid,
        errors,
        showMessage,
        tickets,
        successMessage,
        login_token,
        onLogin,
        onRegister,
        onConfirmAuth,
        onLogout,
        onGetAuthUser,
    };
}