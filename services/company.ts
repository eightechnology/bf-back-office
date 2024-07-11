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
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default function useCompany() {
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
    const companies = ref([]);

    const onGetCompanyList = async () => {
        try {
            loading.value = true;
            let response = await axios.get("/api/agencies/companies")
            if (response.status === 200) {
                loading.value = false;
                companies.value = response.data.data;
                console.log(companies.value)
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

    const onCreateCompany = async () => {
        try {
            loading.value = true;
            let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
                let response = await axios.post('/api/agencies/companies', formData.value);
                if (response.status === 201) {
                    loading.value = false;
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
        companies,
        onGetCompanyList,
        onCreateCompany,
    };
}