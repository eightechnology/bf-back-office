<template>
    <div style="margin: 30px 15px">
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
        </a>
        <h5 class="mb-3 text-center">Inscription Organisateur</h5>

        <div v-if="showError">
            <ToolsError :errorMessage="errorMessage" />
        </div>

        <form @submit.prevent="toLogin">
            <div class="row mb-2">
                <div class="col-lg-12">
                    <ul class="nav nav-pills nav-justified rounded" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link rounded active" id="pills-smart-tab" data-bs-toggle="pill"
                                href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="false">
                                <div class="text-center">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded" id="pills-cloud-tab" data-bs-toggle="pill" href="#pills-cloud"
                                role="tab" aria-controls="pills-cloud" aria-selected="false">
                                <div class="text-center">
                                    <h6 class="mb-0">Téléphone</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row pt-2 mb-3">
                <div class="col-12">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-smart" role="tabpanel"
                            aria-labelledby="pills-smart-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-1">
                                        <label class="form-label mb-0">Addresse email <span
                                                class="text-danger">*</span></label>
                                        <div class="form-icon position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-mail fea icon-sm icons">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                </path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            <input name="email" id="email" type="email" class="form-control ps-5"
                                                placeholder="Email " v-model="loginForm.email"
                                                :readonly="showConfirmCode">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-cloud" role="tabpanel" aria-labelledby="pills-cloud-tab">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-1">
                                        <label class="form-label mb-0">Téléphone <span
                                                class="text-danger">*</span></label>
                                        <div class="input-group input-group-merge has-validation">
                                            <select class="bg-light custom">
                                                <option value="">GN</option>
                                                <option value="">CI</option>
                                                <!-- <template v-for="(country, index) in countriesList" :key="index">
                                                <option :value="country.code">{{
                                                    country.calling_code }}</option>
                                            </template> -->
                                            </select>
                                            <input type="tel" class="form-control" id="phone" placeholder="Téléphone"
                                                v-model="loginForm.phone" :readonly="showConfirmCode">
                                            <div class="invalid-feedback">
                                                Le numéro de téléphone est obligatoire
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 text-center mt-3" v-if="!showConfirmCode">
                <button class="btn btn-primary w-100 mt-3" type="submit" :disabled="loading">
                    <span v-if="!loading">Connexion</span>
                    <div class="text-center" v-else>
                        <div class="spinner-border" role="status"></div>
                    </div>
                </button>
                <p class="mb-0 mt-3"><small class="text-dark me-2">Vous n'avez pas de compte ?</small>
                    <NuxtLink to="/auth/register" class="text-dark fw-bold">S'inscrire</NuxtLink>
                </p>
            </div>

        </form>

        <!-- Confirmer le code  -->
        <form v-if="showConfirmCode" @submit.prevent="confirmRegister">
            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Code de confirmation <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:lock" class="fea icon-sm icons" color="black" />
                        <input name="name" id="name" type="text" class="form-control ps-5"
                            v-model="loginForm.login_code" placeholder="Code de confirmation" required>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary w-100" type="submit" :disabled="loading">
                <span v-if="!loading">Confirmer</span>
                <div class="text-center" v-else>
                    <div class="spinner-border" role="status"></div>
                </div>
            </button>
        </form>

        <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const router = useRouter();
const companyStore = useCompagnyStore();
const companies = computed(() => companyStore.getCompagnies);
const authStore = useAuthStore();
const login_token = computed(() => authStore.getLoginToken);
const loading = computed(() => authStore.getLoading);
const showConfirmCode = computed(() => authStore.getShowConfirmCode);
const showError = computed(() => authStore.getShowError);
const errorMessage = computed(() => authStore.getErrorMessage);

const { data: categories, status } = await useFetch('/api/auth');


const loginForm = reactive({
    email: "",
    phone: "",
    name: "",
    country: "GN",
    choice: "email",
    login_token: "",
    login_code: ""
});


// const { data: categories, status } = await useFetch('/api/auth');

const toLogin = async () => {
    const dataPosted = reactive({
        name: loginForm.name,
        isAccepted: loginForm.isAccepted,
    });

    if (loginForm.choice == 'email') {
        dataPosted.email = loginForm.email;
        dataPosted.choice = loginForm.choice;
    }
    if (loginForm.choice == 'phone') {
        dataPosted.phone = loginForm.phone;
        dataPosted.choice = loginForm.choice;
        dataPosted.country = loginForm.country;
    }
    await authStore.onLogin(dataPosted)
}

const confirmRegister = async () => {
    const dataPosted = reactive({
        name: loginForm.name,
        isAccepted: loginForm.isAccepted,
        login_token: login_token.value,
        login_code: loginForm.login_code
    })

    if (loginForm.choice == 'email') {
        dataPosted.email = loginForm.email;
        dataPosted.choice = loginForm.choice;
    }
    if (loginForm.choice == 'phone') {
        dataPosted.phone = loginForm.phone;
        dataPosted.choice = loginForm.choice;
        dataPosted.country = loginForm.country;
    }

    await authStore.onConfirmAuth(dataPosted).then(async () => {
        await companyStore.fetchCompagnies().then(() => {
            if (companies.value.length == 1) {
                sessionStorage.setItem('companySlug', companies.value[0].slug);
                sessionStorage.setItem('compangy', JSON.stringify(companies.value[0]));
                location.assign('/');
            } else {
                router.push('/company/list');
            }
        });
    });
}
</script>