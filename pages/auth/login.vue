<template>
    <div>
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
        </a>
        <h5 class="mb-3 text-center">Rejoignez nous</h5>
        
        <form @submit.prevent="onLogin">
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
                                                placeholder="Email " v-model="loginForm.email">
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
                                            <input type="tel" class="form-control" id="phone" placeholder="Téléphone">
                                            <div class="invalid-feedback">
                                                Le numéro de téléphone est obligatoire
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-md-12 mt-4">
                            <div class="mb-1">
                                <label class="form-label mb-0">Code de confirmation <span
                                        class="text-danger">*</span></label>
                                <div class="form-icon position-relative">
                                    <i class="fas fa-lock fea icon-sm icons"></i>
                                    <input name="name" id="name" type="text" class="form-control ps-5"
                                        v-model="loginForm.login_code" placeholder="Code de confirmation" required>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            <button class="btn btn-primary w-100 mt-3" type="submit">Connexion</button>

            <div class="col-12 text-center mt-3">
                <p class="mb-0 mt-3"><small class="text-dark me-2">Vous n'avez pas de compte ?</small>
                    <NuxtLink to="/auth/register" class="text-dark fw-bold">S'inscrire</NuxtLink>
                </p>
            </div>

            <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>
        </form>


    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
})

const router = useRouter()

const loginForm = reactive({
    email: "",
    phone: "623419147",
    name: "Amar Diallo",
    country: "GN",
    choice: "email",
    login_token: "",
    login_code: ""
})

const handleLogin = async () => {
    await useFetch('http://localhost:8000/sanctum/csrf-cookie') 
} 

// onMounted(async () => {
//     const { data } = await useFetch('http://localhost:8000/api/categories', "POST",)
//     console.log(data.value)
// })

const onLogin = async () => {
    await $fetch('http://localhost:8000/sanctum/csrf-cookie', {
        credentials: "include"
    });

    const token = useCookie('XSRF-TOKEN');

    const { data: myData } = await $fetch('http://localhost:8000/user', {
        credentials: "include",
        watch: false,
        headers: {
            'X-XSRF-TOKEN': token.value
        }
    });

    // const { data: myData } = await $fetch('http://localhost:8000/register', {
    //     credentials: "include",
    //     method: 'POST',
    //     body: loginForm,
    //     watch: false,
    //     headers: {
    //         'X-XSRF-TOKEN': token.value
    //     }
    // });

    console.log(myData)
}
</script>