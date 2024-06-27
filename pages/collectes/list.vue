<template>
    <div>
        <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-0">Liste des collectes de fonds</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                <button class="btn btn-primary" @click="addCollecte()">
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
                                <th class="border-bottom p-3">N°</th>
                                <th class="border-bottom p-3" style="min-width: 220px;">Titre</th>
                                <th class="text-center border-bottom p-3" style="min-width: 200px;">Date debut</th>
                                <th class="text-center border-bottom p-3">Montant sollicité</th>
                                <th class="text-center border-bottom p-3">Montant collecté</th>
                                <th class="text-center border-bottom p-3">Status</th>
                                <th class="text-center border-bottom p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="collectes">
                            <!-- Start -->
                            <tr v-for="(collecte, index) in collectes" :key="index">
                                <th class="p-3">{{ index + 1 }}</th>
                                <td class="p-3">
                                    <NuxtLink :to="'/collectes/' + collecte.slug">
                                        <div class="d-flex align-items-center">
                                            <img :src="collecte.image"
                                                class="avatar avatar-ex-small rounded-circle shadow" alt="">
                                            <span class="ms-2">{{ collecte.title }}</span>
                                        </div>
                                    </NuxtLink>
                                </td>
                                <td class="text-center p-3">{{ collecte.ends_at }}</td>
                                <td class="text-center p-3">{{ collecte.goal_amount }}</td>
                                <td class="text-center p-3">{{ collecte.collected_amount }}</td>
                                <td class="text-center p-3"><span class="badge text-bg-primary">Terminé</span></td>
                                <td class="text-end p-3">
                                    <NuxtLink :to="'/collectes/' + collecte.slug" class="btn btn-sm btn-primary">Ouvrir</NuxtLink>
                                    <!-- <a href="#" class="btn btn-sm btn-soft-primary ms-2"><i class="fas fa-eye"></i></a> -->
                                </td>
                            </tr>
                            <!-- End -->
                        </tbody>
                    </table>
                </div>
            </div><!--end col-->

            <div class="row text-center">
                <!-- PAGINATION START -->
                <div class="col-12 mt-4">
                    <div class="d-md-flex align-items-center text-center justify-content-between">
                        <span class="text-muted me-3">Affichage de 1 à 10 sur 50</span>
                        <ul class="pagination mb-0 justify-content-center mt-4 mt-sm-0">
                            <li class="page-item"><a class="page-link" href="javascript:void(0)"
                                    aria-label="Previous">Préc</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next">Suiv</a></li>
                        </ul>
                    </div>
                </div><!--end col-->
                <!-- PAGINATION END -->
            </div>
        </div>
    </div>
</template>
<script setup>
const router = useRouter();
const collecteStore = useCollecteStore();
const loading = computed(() => collecteStore.getLoading);
const collectes = computed(() => collecteStore.getCollectes);

const addCollecte = () => {
    router.push('/collectes/create');
}

onMounted(async () => {
    await collecteStore.fetchCollectes();
})
</script>