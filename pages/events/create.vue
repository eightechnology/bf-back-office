<template>
    <div>
        <!-- <h1>Ajouter un événement</h1> -->
        <div class="alert bg-soft-primary fw-medium" role="alert"> <i class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span class="text-danger">*</span>) sont obligatoires  </div>

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card border-0 rounded shadow p-4">
                    <h5 class="mb-0">Planification du contenu</h5>
                    <form>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre (<span class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="title" placeholder="Titre de l'événement">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Catégorie (<span
                                            class="text-danger">*</span>)</label>
                                    <select class="form-select form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Téléphone (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Numéro de téléphone">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="address" class="form-label">Lieu de l'événement (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control" id="address" placeholder="Lieu de l'événement">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date début (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date début">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="date" class="form-label">Date fin (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date fin">
                                </div>
                            </div>

                            <div class="col-lg-6">
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
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="image" class="form-label">Photo de couverture (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="file" class="form-control" id="image" placeholder="Photo de couverture">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="link" class="form-label">Lien youtube</label>
                                    <input type="text" class="form-control" id="link" placeholder="Lien youtube">
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>

            <div class="col-md-6 col-lg-6">
                <div class="card border-0 rounded shadow p-4">
                    <h5 class="mb-0">Rédaction du contenu</h5>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <div class="form-icon position-relative">
                                <textarea name="comments" id="comments" rows="10" class="form-control ps-3"
                                    placeholder="Description :"></textarea>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="mb-0 mt-4 text-end">
                    <button class="btn btn-primary">Enregistrer dans le brouillon</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>