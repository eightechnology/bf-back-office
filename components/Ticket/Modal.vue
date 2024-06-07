<template>
    <div class="modal-dialog modal-l modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Générer des billets</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="p-2 box-shadow">
                            <form>
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label for="category" class="form-label">Catégorie ticket</label>
                                        <select name="category" id="category" class="form-select form-control">
                                            <option value="vip">Vip</option>
                                            <option value="vip">Pelouse</option>
                                            <option value="vip">Balcon</option>
                                        </select>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label for="quantity" class="form-label">Nombre de places</label>
                                        <input type="number" class="form-control" id="quantity" placeholder="Nombre de places">
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label for="libelle" class="form-label">Libellé</label>
                                        <input type="text" class="form-control" id="libelle" placeholder="Libellé">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary">Générer</button>
                    </div>
                </div>
            </div>
</template>
<script setup>

</script>