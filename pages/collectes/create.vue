<template>
    <div>
        <!-- <h1>Ajouter un événement</h1> -->
        <div class="alert bg-soft-primary fw-medium text-center" role="alert"> <i
                class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span
                class="text-danger">*</span>) sont obligatoires </div>

        <form @submit.prevent="onSaveCollecte" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Planification du contenu</h5>
                        <div class="row mt-4">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="title"
                                        placeholder="Titre de la collecte de fonds"
                                        :class="v$.title.$error ? 'is-invalid' : ''" @input="v$.title.$touch()"
                                        v-model="collecteForm.title">
                                    <div v-if="v$.title.$error" class="text-danger">
                                        <p>Le titre est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Catégorie (<span
                                            class="text-danger">*</span>)</label>
                                    <select class="form-select form-control" aria-label="Séléctionner"
                                        :class="v$.category.$error ? 'invalid' : ''" @change="v$.category.$touch()"
                                        v-model="collecteForm.category">
                                        <option value="">Séléctionner</option>
                                        <option v-for="(category, index) in categories" :key="index"
                                            :value="category.slug">{{ category.name }}</option>
                                    </select>
                                    <div v-if="v$.category.$error" class="text-danger">
                                        <p>Séléctionner une catégorie</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="user" class="form-label">Bénéficiaire (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="user" placeholder="Bénéficiaire"
                                        :class="v$.beneficiary.$error ? 'is-invalid' : ''"
                                        @input="v$.beneficiary.$touch()" v-model="collecteForm.beneficiary">
                                    <div v-if="v$.beneficiary.$error" class="text-danger">
                                        <p>Le bénéficiaire est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Montant sollicité GNF (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="number" class="form-control" id="title"
                                        placeholder="Titre de la collecte de fonds"
                                        :class="v$.goal_amount.$error ? 'is-invalid' : ''"
                                        @input="v$.goal_amount.$touch()" v-model="collecteForm.goal_amount">
                                    <div v-if="v$.goal_amount.$error" class="text-danger">
                                        <p>Le Montant est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date fin (<span
                                            class="text-danger">*</span>)</label>
                                    <VueDatePicker v-model="collecteForm.ends_at" select-text="choisir"
                                        cancel-text="Femer" format="dd/MM/yyyy HH:mm" :format-locale="fr" />
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
                                    <div v-if="v$.image.$error" class="text-danger">
                                        <p>L'image est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mb-3">
                                    <label for="link" class="form-label">Lien youtube</label>
                                    <input type="text" v-model="collecteForm.desc_video" class="form-control" id="link"
                                        placeholder="Lien youtube">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <label for="link" class="form-label">Lien youtube</label>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" v-model="collecteForm.is_public" value="false">
                                        <label class="form-check-label" for="flexRadioDefault1">privée</label>
                                    </div>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" v-model="collecteForm.is_public" value="true">
                                        <label class="form-check-label" for="flexRadioDefault2">publique</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Rédaction du contenu</h5>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <div class="form-icon position-relative">
                                <textarea name="comments" id="comments" rows="12" class="form-control ps-3"
                                    placeholder="Description :" v-model="collecteForm.description"
                                    :class="v$.description.$error ? 'is-invalid' : ''"
                                    @input="v$.description.$touch()"></textarea>
                            </div>
                            <div v-if="v$.description.$error" class="text-danger">
                                <p>La déscription est obligatoire</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-0 mt-4 text-end">
                        <button class="btn btn-primary" type="submit" :disabled="loading || v$.$invalid">
                            <span v-if="!loading">Enregistrer</span>
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

const categoryStore = useCategoryStore();
const collecteStore = useCollecteStore();

const categories = computed(() => categoryStore.getCollecteCategories);
const loading = computed(() => collecteStore.getLoading);

const collecteForm = reactive({
    title: "",
    beneficiary: "",
    goal_amount: "",
    description: "",
    ends_at: new Date(),
    is_public: true,
    country: "GN",
    category: "",
    image: "",
    desc_video: ""
});

const rules = computed(() => (
    {
        title: { required },
        beneficiary: { required },
        goal_amount: { required },
        description: { required },
        ends_at: { required },
        is_public: { required },
        category: { required },
        image: { required },
    }
));

const v$ = useVuelidate(rules, collecteForm);

const updloadImage = (e) => {
    collecteForm.image = e.target.files[0];
}

onMounted(async () => {
    await categoryStore.fetchCollecteCategories();
})

const onSaveCollecte = async () => {
    let dataForm = new FormData();
    dataForm.append('title', collecteForm.title);
    dataForm.append('beneficiary', collecteForm.beneficiary);
    dataForm.append('goal_amount', collecteForm.goal_amount);
    dataForm.append('description', collecteForm.description);
    dataForm.append('ends_at', collecteForm.ends_at);
    dataForm.append('is_public', collecteForm.is_public);
    dataForm.append('country', collecteForm.country);
    dataForm.append('image', collecteForm.image);
    dataForm.append('desc_video', collecteForm.desc_video);
    console.log(dataForm);
    await collecteStore.onCreateCollecte(dataForm);
}
</script>