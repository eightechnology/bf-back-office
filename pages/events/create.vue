<template>
    <div>
        <!-- <h1>Ajouter un événement</h1> -->
        <!-- <div class="alert bg-soft-primary fw-medium text-center" role="alert"> <i
                class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span
                class="text-danger">*</span>) sont obligatoires </div> -->

        <div v-if="showError">
            <ToolsError :errorMessage="errorMessage" />
        </div>

        <form @submit.prevent="onSaveEvent" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-12">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Planification du contenu</h5>
                        <div class="row mt-4">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre (<span class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control " :class="v$.title.$error ? 'invalid' : ''"
                                        id="title" placeholder="Titre de l'événement" @input="v$.title.$touch()"
                                        v-model="eventForm.title">
                                    <div v-if="v$.title.$error" class="text-danger">
                                        <p>Le titre est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Catégorie (<span
                                            class="text-danger">*</span>)</label>
                                    <select class="form-select form-control"
                                        :class="v$.category.$error ? 'invalid' : ''" aria-label="Séléctionner"
                                        @change="v$.category.$touch()" v-model="eventForm.category">
                                        <option value="">Séléctionner</option>
                                        <option v-for="(category, index) in categories" :value="category.slug">{{
                                            category.name }}</option>
                                    </select>
                                    <div v-if="v$.category.$error" class="text-danger">
                                        <p>Séléctionner une catégorie</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Téléphone (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Numéro de téléphone"
                                        :class="v$.phone.$error ? 'invalid' : ''" @input="v$.phone.$touch()"
                                        v-model="eventForm.phone" maxlength="9">
                                    <div class="text-danger" v-if="v$.phone.$error">
                                        {{ v$.phone.$errors[0].$message }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="address" class="form-label">Lieu de l'événement (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="address"
                                        placeholder="Lieu de l'événement" :class="v$.address.$error ? 'invalid' : ''"
                                        @input="v$.address.$touch()" v-model="eventForm.address">
                                    <div v-if="v$.address.$error" class="text-danger">
                                        <p>Le lieu est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date début (<span
                                            class="text-danger">*</span>)</label>
                                    <VueDatePicker v-model="eventForm.starts_at" select-text="choisir"
                                        cancel-text="Femer" format="dd-MM-yyyy HH:mm" :format-locale="fr" />
                                    <div v-if="v$.starts_at.$error" class="text-danger">
                                        <p>La date début est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date fin (<span
                                            class="text-danger">*</span>)</label>
                                    <VueDatePicker v-model="eventForm.ends_at" select-text="choisir" cancel-text="Femer"
                                        format="dd/MM/yyyy HH:mm" :format-locale="fr" />
                                    <div v-if="v$.ends_at.$error" class="text-danger">
                                        <p>La date fin est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="image" class="form-label">Photo de couverture (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="file" class="form-control" id="image" placeholder="Photo de couverture"
                                        @change="updloadImage">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="link" class="form-label">Lien youtube</label>
                                    <input type="text" class="form-control" id="link" placeholder="Lien youtube"
                                        v-model="eventForm.desc_video">
                                    <div v-if="v$.description.$error" class="text-danger">
                                        <p>La déscription est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioType"
                                            id="flexRadioType" v-model="eventForm.type" value="gratuit">
                                        <label class="form-check-label" for="flexRadioType">Gratuit</label>
                                    </div>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioType"
                                            id="flexRadioType" v-model="eventForm.type" value="payant">
                                        <label class="form-check-label" for="flexRadioType">Payant</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioPublic"
                                            id="flexRadioPublic2" v-model="eventForm.is_public" value="vrai">
                                        <label class="form-check-label" for="flexRadioPublic2">Privé</label>
                                    </div>
                                </div> 

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioPublic"
                                            id="flexRadioPublic2" v-model="eventForm.is_public" value="faux">
                                        <label class="form-check-label" for="flexRadioPublic2">Public</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <h5 class="mb-2">Coordonnées Google Map</h5>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Latitude</label>
                                    <input type="text" class="form-control " id="title" placeholder="2128300002">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Longitude</label>
                                    <input type="text" class="form-control " id="title" placeholder="212830032">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-12">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Rédaction du contenu</h5>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <div class="form-icon position-relative">
                                <textarea name="comments" id="comments" rows="14" class="form-control ps-3"
                                    placeholder="Description :" v-model="eventForm.description"
                                    :class="v$.description.$error ? 'invalid' : ''" @input="v$.description.$touch()">
                                </textarea>
                            </div>
                            <div v-if="v$.description.$error" class="text-danger">
                                <p>La déscription est obligatoire</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-0 mt-4 text-end">
                        <button class="btn btn-primary" type="submit" :disabled="loading || v$.$invalid">
                            <span v-if="!loading">Enregistrer dans le brouillon</span>
                            <div class="text-center" v-else>
                                <div class="spinner-border" role="status"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { fr } from 'date-fns/locale'
import moment from 'moment';

const eventStore = useEventStore();
const loading = computed(() => eventStore.getLoading);
const showError = computed(() => eventStore.getShowError);
const errorMessage = computed(() => eventStore.getErrorMessage);

const eventForm = reactive({
    title: "",
    phone: "",
    type: "payant",
    address: "",
    description: "",
    starts_at: new Date(),
    ends_at: new Date(),
    image: "",
    plan: "",
    desc_video: "",
    exit_allowed: false,
    category: "",
    country: "GN",
    is_public: "true"
});

const rules = computed(() => (
    {
        title: { required },
        phone: { required: helpers.withMessage("Le téléphone est obligatoire.", required), minLength: helpers.withMessage("Le numéro invalide.", minLength(9)) },
        // type: { required },
        address: { required },
        description: { required },
        starts_at: { required },
        ends_at: { required },
        image: { required },
        category: { required },
        country: { required },
    }
));
const v$ = useVuelidate(rules, eventForm);

const categoryStore = useCategoryStore();
const categories = computed(() => categoryStore.getCategories);

onMounted(async () => {
    await categoryStore.fetchCategories();
})

const updloadImage = (e) => {
    eventForm.image = e.target.files[0];
}

const formatDate = (value) => {
    return moment(value).format("YYYY-MM-DD HH:mm")
}

const onSaveEvent = async () => {
    let dataForm = new FormData();
    dataForm.append('title', eventForm.title);
    dataForm.append('phone', eventForm.phone);
    dataForm.append('type', eventForm.type);
    dataForm.append('address', eventForm.address);
    dataForm.append('description', eventForm.description);
    dataForm.append('starts_at', formatDate(eventForm.starts_at));
    dataForm.append('ends_at', formatDate(eventForm.ends_at));
    dataForm.append('image', eventForm.image);
    // dataForm.append('plan', eventForm.plan);
    // dataForm.append('desc_video', eventForm.desc_video);
    dataForm.append('exit_allowed', eventForm.exit_allowed);
    dataForm.append('category', eventForm.category);
    dataForm.append('country', eventForm.country);
    dataForm.append('is_public', eventForm.is_public);

    await eventStore.onCreateEvent(dataForm);
}

</script>
<style scoped>
.invalid {
    border-color: #e43f52 !important
}
</style>