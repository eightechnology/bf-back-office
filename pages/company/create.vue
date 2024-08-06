<template>
    <div>
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
        </a>
        <h5 class="mb-3 text-center">Créer votre structure</h5>

        <form @submit.prevent="onSaveCompany" enctype="multipart/form-data">
            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Nom de la structure <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:lock" class="fea icon-sm icons" color="black" />
                        <input name="name" id="name" type="text" class="form-control ps-5"
                            v-model="companyForm.name" placeholder="Nom de la structure" required>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Téléphone <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:phone" class="fea icon-sm icons" color="black" />
                        <input name="phone" id="phone" type="tel" class="form-control ps-5"
                            v-model="companyForm.phone" placeholder="Téléphone" required>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Email <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <!-- <Icon name="uil:" class="fea icon-sm icons" color="black" /> -->
                        <input name="email" id="email" type="email" class="form-control ps-5"
                            v-model="companyForm.email" placeholder="Email" required>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Adresse <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:location" class="fea icon-sm icons" color="black" />
                        <input name="address" id="address" type="text" class="form-control ps-5"
                            v-model="companyForm.address" placeholder="Adresse" required>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="mb-3">
                    <label class="form-label mb-0">Logo <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                        <Icon name="uil:image" class="fea icon-sm icons" color="black" />
                        <input name="image" id="image" type="file" class="form-control ps-5"
                        @change="updloadLogo" placeholder="Logo" required>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary w-100" type="submit" :disabled="loading">
                <span v-if="!loading">Créer</span>
                <div class="text-center" v-else>
                    <div class="spinner-border" role="status"></div>
                </div>
            </button>
        </form>


    </div>
</template>

<script setup>
// import useCompany from '~/services/company';

definePageMeta({
    layout: "auth",
    middleware: "auth"
})

const companyForm = reactive({
    name: "",
    phone: "",
    address: "",
    logo: "",
    email: "",
    country: "GN"
});

// const { loading, formData, onCreateCompany } = useCompany();

const updloadLogo = (e) => {
    companyForm.logo = e.target.files[0];
}

const onSaveCompany = async () => {
    console.log(companyForm)
    let dataForm = new FormData();
    dataForm.append('name', companyForm.name);
    dataForm.append('phone', companyForm.phone);
    dataForm.append('address', companyForm.address);
    dataForm.append('logo', companyForm.logo);
    dataForm.append('email', companyForm.email);
    dataForm.append('country', companyForm.country);
    formData.value = dataForm;
    // await onCreateCompany();
}
</script>