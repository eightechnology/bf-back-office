<template>
    <div>
        <div class="alert bg-soft-primary fw-medium text-center" role="alert"> <i
                class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span
                class="text-danger">*</span>) sont obligatoires </div>

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <form enctype="multipart/form-data">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Ajouter un ticket</h5>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control " id="title"
                                        placeholder="Titre de l'événement">
                                    <!-- <div v-if="v$.title.$error" class="text-danger">
                                        <p>Le titre est obligatoire</p>
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Catégorie (<span
                                            class="text-danger">*</span>)</label>
                                    <select class="form-select form-control" aria-label="Séléctionner">
                                        <option value="">Séléctionner</option>
                                        <!-- <option v-for="(category, index) in categories" :value="category.slug">{{
                                            category.name }}</option> -->
                                    </select>
                                    <!-- <div v-if="v$.category.$error" class="text-danger">
                                        <p>Séléctionner une catégorie</p>
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Téléphone (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Numéro de téléphone">
                                    <!-- <div class="text-danger" v-if="v$.phone.$error">
                                        {{ v$.phone.$errors[0].$message }}
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="address" class="form-label">Lieu de l'événement (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="address"
                                        placeholder="Lieu de l'événement">
                                    <!-- <div v-if="v$.address.$error" class="text-danger">
                                        <p>Le lieu est obligatoire</p>
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date début (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date début">
                                    <!-- <div v-if="v$.starts_at.$error" class="text-danger">
                                        <p>La date début est obligatoire</p>
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date fin (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" id="date">
                                    <!-- <div v-if="v$.ends_at.$error" class="text-danger">
                                        <p>La date fin est obligatoire</p>
                                    </div> -->
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
                                    <input type="file" class="form-control" id="image"
                                        placeholder="Photo de couverture">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="link" class="form-label">Lien youtube</label>
                                    <input type="text" class="form-control" id="link" placeholder="Lien youtube">
                                </div>
                            </div>

                            <!-- <div class="col-lg-6">
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
                            </div> -->
                        </div>
                        <div class="mb-0 mt-4 text-end">
                            <button class="btn btn-primary" type="submit">
                                <span>Ajouter</span>
                                <!-- <div class="text-center" v-else>
                                    <div class="spinner-border" role="status"></div>
                                </div> -->
                            </button>
                        </div>
                    </div>

                </form>
            </div>

            <div class="col-md-6 col-lg-6">
                <div class="card border-0 rounded shadow p-4">
                    <h5 class="mb-3">Liste des tickets</h5>
                    <div class="invoice-table pb-4">
                        <div class="table-responsive bg-white shadow rounded">
                            <table class="table mb-0 table-center invoice-tb">
                                <thead class="bg-light">
                                    <tr>
                                        <th scope="col" class="border-bottom text-start">Type ticket</th>
                                        <th scope="col" class="border-bottom text-center">Ticket générés</th>
                                        <th scope="col" class="border-bottom text-center">T vendus</th>
                                        <th scope="col" class="border-bottom text-center">T restants</th>
                                        <th scope="col" class="border-bottom">Frais</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-start">1</th>
                                        <td class="text-center">0</td>
                                        <td class="text-center">0</td>
                                        <td class="text-center">0</td>
                                        <td class="text-end">0 GNF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>