<template>
    <div>
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="60">
        </a>
        <h5 class="mb-3 text-center">Lancez-vous</h5>

        <div v-if="showError">
            <ToolsError :errorMessage="errorMessage" />
        </div>

        <form @submit.prevent="register">

            <div class="row">
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

            <div class="row mb-3">
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
                                                :class="v$.email.$error ? 'is-invalid' : ''" placeholder="Email "
                                                v-model="registerForm.email" :readonly="showConfirmCode"
                                                @input="v$.email.$touch()">
                                            <div class="text-danger" v-if="v$.email.$error">
                                                {{ v$.email.$errors[0].$message }}
                                            </div>
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
                                            <select class="bg-light custom" v-model="registerForm.country">
                                                <template v-if="countries">
                                                    <template v-for="(country, index) in countries" :key="index">
                                                        <option :value="country.code">{{ country.calling_code }}
                                                        </option>
                                                    </template>
                                                </template>
                                            </select>
                                            <input type="tel" class="form-control" id="phone" placeholder="Téléphone"
                                                :class="v$.phone.$error ? 'is-invalid' : ''"
                                                v-model="registerForm.phone" maxlength="9" :readonly="showConfirmCode"
                                                @input="v$.phone.$touch()">
                                        </div>
                                        <div class="text-danger" v-if="v$.phone.$error">
                                            {{ v$.phone.$errors[0].$message }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="form-floating mb-3">
                <div class="mb-3">
                    <label class="form-label">Nom complet <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-user fea icon-sm icons">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input name="name" id="name" type="text" class="form-control ps-5" placeholder="Nom complet :"
                            v-model="registerForm.name" :readonly="showConfirmCode" @input="v$.name.$touch()"
                            :class="v$.name.$error ? 'is-invalid' : ''">
                        <div v-if="v$.name.$error" class="text-danger">
                            <p>Le nom est obligatoire</p>
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="!showConfirmCode">
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                        @input="v$.isAccepted.$touch()" v-model="registerForm.isAccepted" required
                        :class="v$.isAccepted.$error ? 'is-invalid' : ''">
                    <label class="form-check-label" for="flexCheckDefault">Accepter les <a href="#"
                            class="text-primary">conditions
                            d'utilisations</a></label>
                    <div v-if="v$.isAccepted.$error" class="text-danger">
                        <p>Vous devez accepter les conditions</p>
                    </div>
                </div>

                <button class="btn btn-primary w-100" type="submit" :disabled="loading || v$.$invalid">
                    <span v-if="!loading">Inscrivez-vous</span>
                    <div class="text-center" v-else>
                        <div class="spinner-border" role="status"></div>
                    </div>
                </button>

                <div class="col-12 text-center mt-3">
                    <p class="mb-0 mt-3"><small class="text-dark me-2">Avez-vous déjà un compte ?</small>
                        <NuxtLink to="/auth/login" class="text-dark fw-bold">Se connecter</NuxtLink>
                    </p>
                </div>
            </div>
        </form>
        <!-- Confirmer le code  -->
        <form v-if="showConfirmCode" @submit.prevent="confirmRegister">
            <div class="col-md-12">
                <div class="my-3">
                    <label class="form-label mb-1">Code de confirmation <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:lock" class="fea icon-sm icons" color="black" />
                        <input name="name" id="name" type="text" class="form-control ps-5" :class="c$.login_code.$error ? 'is-invalid' : ''"
                            v-model="registerForm.login_code" placeholder="Code de confirmation" @input="c$.login_code.$touch()" required>
                        <div class="text-danger" v-if="c$.login_code.$error">
                            {{ c$.login_code.$errors[0].$message }}
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary w-100" type="submit" :disabled="loading || c$.$invalid">
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
    layout: "auth"
});

import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers, requiredIf } from '@vuelidate/validators'

const authStore = useAuthStore();
const companyStore = useCompagnyStore();

const login_token = computed(() => authStore.getLoginToken);
const loading = computed(() => authStore.getLoading);
const showConfirmCode = computed(() => authStore.getShowConfirmCode);
const companies = computed(() => companyStore.getCompagnies);
const showError = computed(() => authStore.getShowError);
const errorMessage = computed(() => authStore.getErrorMessage);

const registerForm = reactive({
    name: "",
    choice: "email",
    email: "",
    phone: "",
    country: "GN",
    login_token: "",
    login_code: "",
    isAccepted: false
});

const rules = computed(() => (
    {
        name: { required },
        phone: { requiredIf: helpers.withMessage("Le téléphone est obligatoire.", requiredIf(registerForm.email == "")), minLength: helpers.withMessage("Le numéro invalide.", minLength(9)) },
        email: { requiredIf: helpers.withMessage("L'email est obligatoire.", requiredIf(registerForm.phone == "")), email: helpers.withMessage("L'email n'est pas correcte.", email) },
        isAccepted: { requiredIf: helpers.withMessage("Vous devez accepter les conditions", requiredIf(registerForm.isAccepted == false)) },
    }
));

const newRules = computed(() => (
    {
        login_code: { required: helpers.withMessage("Le code est obligatoire", required), minLength: helpers.withMessage("Le code doit comporter 4 chiffres", minLength(4)) }
    }
))
const v$ = useVuelidate(rules, registerForm);
const c$ = useVuelidate(newRules, registerForm);

const countries = ref([]);

onMounted(async () => {
    const { data: countriesData, pending } = await $fetch('http://localhost:8000/api/countries');
    countries.value = countriesData;
    console.log(countriesData, pending)
})

const register = async () => {
    const dataPosted = reactive({
        name: registerForm.name,
        isAccepted: registerForm.isAccepted,
    })

    if (registerForm.choice == 'email') {
        dataPosted.email = registerForm.email;
        dataPosted.choice = registerForm.choice;
    }
    if (registerForm.choice == 'phone') {
        dataPosted.phone = registerForm.phone;
        dataPosted.choice = registerForm.choice;
        dataPosted.country = registerForm.country;
    }

    await authStore.onRegister(dataPosted);
}

const confirmRegister = async () => {
    const dataPosted = reactive({
        name: registerForm.name,
        isAccepted: registerForm.isAccepted,
        login_token: login_token.value,
        login_code: registerForm.login_code
    })

    if (registerForm.choice == 'email') {
        dataPosted.email = registerForm.email;
        dataPosted.choice = registerForm.choice;
    }
    if (registerForm.choice == 'phone') {
        dataPosted.phone = registerForm.phone;
        dataPosted.choice = registerForm.choice;
        dataPosted.country = registerForm.country;
    }

    await authStore.onConfirmAuth(dataPosted);
}



</script>