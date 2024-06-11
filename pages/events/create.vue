<template>
    <div>
        <!-- <h1>Ajouter un événement</h1> -->
        <div class="alert bg-soft-primary fw-medium text-center" role="alert"> <i
                class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span
                class="text-danger">*</span>) sont obligatoires </div>

        <form @submit.prevent="onSaveEvent" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Planification du contenu</h5>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control " :class="v$.title.$error ? 'invalid' : ''"
                                        id="title" placeholder="Titre de l'événement" @input="v$.title.$touch()"
                                        v-model="eventForm.title">
                                    <div v-if="v$.title.$error" class="text-danger">
                                        <p>Le titre est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6" v-if="categories">
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

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Téléphone (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Numéro de téléphone"
                                        :class="v$.phone.$error ? 'invalid' : ''" @input="v$.phone.$touch()"
                                        v-model="eventForm.phone">
                                    <div class="text-danger" v-if="v$.phone.$error">
                                        {{ v$.phone.$errors[0].$message }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
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

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date début (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" v-model="eventForm.starts_at" id="date"
                                        placeholder="Date début" :class="v$.starts_at.$error ? 'invalid' : ''"
                                        @input="v$.starts_at.$touch()">
                                    <div v-if="v$.starts_at.$error" class="text-danger">
                                        <p>La date début est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date fin (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" id="date" v-model="eventForm.ends_at"
                                        placeholder="Date fin" :class="v$.ends_at.$error ? 'invalid' : ''"
                                        @input="v$.ends_at.$touch()">
                                    <div v-if="v$.ends_at.$error" class="text-danger">
                                        <p>La date fin est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="time" class="form-label">Heure début (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="time" class="form-control" id="time" placeholder="Heure début">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="time" class="form-label">Heure fin (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="time" class="form-control" id="time" placeholder="Heure fin">
                                </div>
                            </div> -->

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="image" class="form-label">Photo de couverture (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="file" class="form-control" id="image" placeholder="Photo de couverture"
                                        @change="updloadImage">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="link" class="form-label">Lien youtube</label>
                                    <input type="text" class="form-control" id="link" placeholder="Lien youtube"
                                        v-model="eventForm.desc_video">
                                    <div v-if="v$.description.$error" class="text-danger">
                                        <p>La déscription est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" v-model="eventForm.type">
                                        <label class="form-check-label" for="flexRadioDefault1">Gratuit</label>
                                    </div>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" v-model="eventForm.type">
                                        <label class="form-check-label" for="flexRadioDefault2">Payant</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6">
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
import useEvents from '~/services/events';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
// import { useCategoryStore } from '~/stores/category';

const eventStore = useEventStore();

const eventForm = reactive({
    title: "",
    phone: "",
    type: "payant",
    address: "",
    description: "",
    starts_at: "",
    ends_at: "",
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
const { loading, formData, onCreateEvent, onGetEventsList } = useEvents();

onMounted(async () => {
    await categoryStore.fetchCategories();
    await onGetEventsList();
})

const updloadImage = (e) => {
    eventForm.image = e.target.files[0];
}

const onSaveEvent = async () => {
    let dataForm = new FormData();
    dataForm.append('title', eventForm.title);
    dataForm.append('phone', eventForm.phone);
    dataForm.append('type', eventForm.type);
    dataForm.append('address', eventForm.address);
    dataForm.append('description', eventForm.description);
    dataForm.append('starts_at', eventForm.starts_at);
    dataForm.append('ends_at', eventForm.ends_at);
    dataForm.append('image', eventForm.image);
    // dataForm.append('plan', eventForm.plan);
    // dataForm.append('desc_video', eventForm.desc_video);
    dataForm.append('exit_allowed', eventForm.exit_allowed);
    dataForm.append('category', eventForm.category);
    dataForm.append('country', eventForm.country);
    dataForm.append('is_public', eventForm.is_public);
    formData.value = dataForm;
    await eventStore.onCreateEvent(formData.value);
    //  eventStore.onCreateEvent(formData.value)
}

</script>
<style scoped>
.invalid {
    border-color: #e43f52 !important
}
</style>