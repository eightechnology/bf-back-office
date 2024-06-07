<template>
    <div>
        <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-0">Génération de billets (1)</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                <button class="btn btn-danger mx-2" @click="goBackEvent()">
                    <i class="fa-solid fa-arrow-left"></i>
                    retour
                </button>
                <button class="btn btn-primary" @click="openModal()">
                    <i class="fas fa-plus"></i>
                    Ajouter
                </button>
            </nav>
        </div>

        <div class="row">
            <div class="col-12 mt-4">
                <div class="table-responsive shadow rounded">
                    <table class="table table-center bg-white mb-0">
                        <thead>
                            <tr>
                                <th class="border-bottom p-3">Tickets</th>
                                <th class="border-bottom p-3" style="min-width: 220px;">Libellé</th>
                                <th class="text-center border-bottom p-3" style="min-width: 200px;">Quantité</th>
                                <th class="text-center border-bottom p-3">Généré ?</th>
                                <th class="text-center border-bottom p-3" style="min-width: 150px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Start -->
                            <tr>
                                <th class="p-3">VIP</th>
                                <td class="p-3">
                                    Billet Nord
                                </td>
                                <td class="text-center p-3">200</td>
                                <td class="text-center p-3"><span class="badge bg-danger"> Non </span></td>
                                <td class="text-end p-3">
                                    <a href="#" class="btn btn-sm btn-primary mx-1"><i class="fa-solid fa-download"></i>
                                        Générer</a>
                                    <a href="#" class="btn btn-sm btn-secondary mx-1"><i
                                            class="fa-solid fa-pen-to-square"></i> Editer</a>
                                </td>
                            </tr>
                            <tr>
                                <th class="p-3">Pelouse</th>
                                <td class="p-3">
                                    Billet Sub
                                </td>
                                <td class="text-center p-3">400</td>
                                <td class="text-center p-3 text-pirmary"><span class="badge bg-success"> Oui </span>
                                </td>
                                <td class="text-end p-3">
                                    <a href="#" class="btn btn-sm btn-primary mx-1"><i class="fa-solid fa-download"></i>
                                        Générer</a>
                                    <a href="#" class="btn btn-sm btn-secondary mx-1"><i
                                            class="fa-solid fa-pen-to-square"></i> Editer</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <TicketModal />
        </div>
    </div>
</template>
<script setup>
const router = useRouter();
var myModal = ref(null);

onMounted(() => {
    myModal.value = new bootstrap.Modal(document.getElementById('staticBackdrop'), options);
})

const goBackEvent = () => {
    router.back();
}

function openModal() {
    myModal.value.show()
}

function onClose() {
    myModal.value.hide();
}
</script>