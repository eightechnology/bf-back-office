<template>
    <div>
        <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-0">Nous contactez</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                    <li class="breadcrumb-item text-capitalize">
                        <NuxtLink to="/">Billetfacile</NuxtLink>
                    </li>
                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Contactez-nous</li>
                </ul>
            </nav>
        </div>

        <div class="row">
            <div class="col-md-5 col-lg-4 order-md-last mt-4">
                <div class="card rounded shadow p-4 border-0">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h5 mb-0">Nos informations</span>
                    </div>
                    <ul class="list-group mb-3 border">
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-location-dot text-primary"></i> Nongo,
                                    Conakry, Guinée</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-phone text-primary"></i> (+224) 626 17
                                    17 10</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-phone text-primary"></i> (+224) 661 17
                                    17 10</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-envelope text-primary"></i>
                                    contact@billetfacile.com</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-md-7 col-lg-8 mt-4">
                <div class="card rounded shadow p-4 border-0">
                    <h4 class="mb-3">Discutons un peu</h4>
                    <div class="alert alert-success" role="alert" v-if="isSend">
                        <h4 class="alert-heading">Bravo !</h4>
                        <p>Merci de nous avoir contacté, notre équipe vous répondra dès que possible.</p>
                    </div>
                    <form @submit.prevent="onSubmitContact">
                        <div class="row g-3">
                            <div class="col-md-12 col-lg-12 col-12">
                                <label for="firstName" class="form-label">Nom complet (<span
                                        class="text-danger">*</span>)</label>
                                <input type="text" class="form-control" id="firstName" placeholder="Nom complet"
                                    v-model="contactForm.nom" :class="v$.nom.$error ? 'is-invalid' : ''"
                                    @input="v$.nom.$touch()">
                                <div v-if="v$.nom.$error" class="text-danger">
                                    <p>Le nom est obligatoire</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="phone" class="form-label">Téléphone (<span
                                        class="text-danger">*</span>)</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text bg-light text-muted border"
                                        :class="v$.telephone.$error ? 'border-danger' : ''">224</span>
                                    <input type="tel" class="form-control" id="phone" placeholder="Téléphone"
                                        maxlength="9" :class="v$.telephone.$error ? 'is-invalid' : ''"
                                        @input="v$.telephone.$touch()" v-model="contactForm.telephone">
                                </div>
                                <div class="text-danger" v-if="v$.telephone.$error">
                                    {{ v$.telephone.$errors[0].$message }}
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="email" class="form-label">Email (<span class="text-danger">*</span>)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com"
                                    :class="v$.email.$error ? 'is-invalid' : ''" @input="v$.email.$touch()"
                                    v-model="contactForm.email">
                                <div class="text-danger" v-if="v$.email.$error">
                                    {{ v$.email.$errors[0].$message }}
                                </div>
                            </div>

                            <div class="col-12">
                                <label class="form-label">Message</label>
                                <div class="form-icon position-relative">
                                    <textarea name="comments" id="comments" rows="7" class="form-control ps-3"
                                        placeholder="Message :" v-model="contactForm.msg"
                                        :class="v$.msg.$error ? 'is-invalid' : ''" @input="v$.msg.$touch()">>
                                </textarea>
                                </div>
                                <div v-if="v$.msg.$error" class="text-danger">
                                    <p>Le message est obligatoire</p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-0 mt-4 text-center">
                            <button class="w-50 btn btn-primary mt-3" type="submit" :disabled="loading || v$.$invalid">
                                <span v-if="!loading">Envoyer</span>
                                <div class="text-center" v-else>
                                    <div class="spinner-border" role="status"></div>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { required, minLength, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const companyStore = useCompagnyStore();
const loading = computed(() => companyStore.getLoading);
const isSend = computed(() => companyStore.getIsSend);


const contactForm = reactive({
    nom: "",
    telephone: "",
    email: "",
    msg: ""
});

const rules = computed(() => {
    return {
        nom: { required },
        email: { required: helpers.withMessage("L'addresse mail est obligatoire", required), email: helpers.withMessage("L'email n'est pas valide", email) },
        telephone: { required: helpers.withMessage("Le téléphone est obligatoire", required), minLength: helpers.withMessage("Le numéro n'est pas valide", minLength(9)) },
        msg: { required }
    }
});

const v$ = useVuelidate(rules, contactForm);

const onSubmitContact = async () => {
    console.log(contactForm);
    await companyStore.onSendMail(contactForm);
}

</script>