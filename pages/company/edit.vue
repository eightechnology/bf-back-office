<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card border-0 rounded shadow p-4">
                    <h3 class="mb-3">Modifier votre structure</h3>
                    <form enctype="multipart/form-data">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label mb-0">Nom de la structure <span
                                            class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <Icon name="uil:lock" class="fea icon-sm icons" color="black" />
                                        <input name="name" id="name" type="text" class="form-control ps-5"
                                            placeholder="Nom de la structure" required>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label mb-0">Téléphone <span class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <Icon name="uil:phone" class="fea icon-sm icons" color="black" />
                                        <input name="phone" id="phone" type="tel" class="form-control ps-5"
                                            placeholder="Téléphone" required>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label mb-0">Email <span class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <!-- <Icon name="uil:" class="fea icon-sm icons" color="black" /> -->
                                        <input name="email" id="email" type="email" class="form-control ps-5"
                                            placeholder="Email" required>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label mb-0">Adresse <span class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <Icon name="uil:location" class="fea icon-sm icons" color="black" />
                                        <input name="address" id="address" type="text" class="form-control ps-5"
                                            placeholder="Adresse" required>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label mb-0">Logo <span class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <Icon name="uil:image" class="fea icon-sm icons" color="black" />
                                        <input name="image" id="image" type="file" class="form-control ps-5"
                                            placeholder="Logo" required>
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-primary w-100 mb-3" type="submit"> Modifier
                                <!-- <span v-if="!loading">Créer</span>
                                <div class="text-center" v-else>
                                    <div class="spinner-border" role="status"></div>
                                </div> -->
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 rounded shadow p-4">
                    <h3 class="mb-3">Information de la structure</h3>
                    <div class="text-center">
                        <img src="/images/logobf.png" class="avatar avatar-large rounded-circle">
                    </div>
                    <table class="table p-4 rounded shadow">
                        <tbody>
                            <tr>
                                <td>NOM</td>
                                <td class="text-muted text-end">name</td>
                            </tr>

                            <tr>
                                <td>E-MAIL</td>
                                <td class="text-muted text-end">BOnjour</td>
                            </tr>

                            <tr>
                                <td>ADRESSE</td>
                                <td class="text-muted text-end">BOnjour</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mb-0 mt-4 text-end">
                        <button class="btn btn-danger" @click="onGoBack()"><i
                                class="fa-solid fa-arrow-left mx-2"></i>Retour</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import useCompany from '~/services/company';

// const companyForm = reactive({
//     name: "",
//     phone: "",
//     address: "",
//     logo: "",
//     email: "",
//     country: "GN"
// });

// const { loading, formData, onCreateCompany } = useCompany();

const updloadLogo = (e) => {
    companyForm.logo = e.target.files[0];
}

// const onSaveCompany = async () => {
//     console.log(companyForm)
//     let dataForm = new FormData();
//     dataForm.append('name', companyForm.name);
//     dataForm.append('phone', companyForm.phone);
//     dataForm.append('address', companyForm.address);
//     dataForm.append('logo', companyForm.logo);
//     dataForm.append('email', companyForm.email);
//     dataForm.append('country', companyForm.country);
//     formData.value = dataForm;
//     await onCreateCompany();
// }
</script>