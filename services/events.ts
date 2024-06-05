import axios from 'axios';
import { useRouter } from 'vue-router';
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

export default function useEvents() {
    const loading = ref(false);
    const formData = ref(null);
    const errorMessage = ref("");
    const login_token = ref("");
    const showError = ref(false);
    const userId = ref(null);
    const user = ref(null);
    const errors = ref(null);
    const isValid = ref(false);
    const router = useRouter();
    const successMessage = ref(null);
    const showMessage = ref(false);
    const events = ref([]);


    const onGetEventsList = async () => {
        try {
            loading.value = true;
            let response = await axios.get("/api/agencies/tab/events")
            if (response.status === 200) {
                loading.value = false;
                events.value = response.data.data;
                console.log(events.value)
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

    const onGetEventDetail = async () => {
        try {
            loading.value = true;
            let response = await axios.get("/api/agencies/tab/events")
            if (response.status === 200) {
                loading.value = false;
                events.value = response.data.data;
                console.log(events.value)
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

    const onCreateEvent = async () => {
        try {
            loading.value = true;
            // let resp = await axios.get('/sanctum/csrf-cookie').then(async res => {
            let response = await axios.post('/api/agencies/eight/events', formData.value, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 201) {
                loading.value = false;
            }
            console.log(response)
            // });
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
        events,
        onGetEventsList,
        onCreateEvent,
    };
}