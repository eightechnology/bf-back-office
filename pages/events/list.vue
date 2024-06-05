<template>
    <div>
        <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-0">Evénements non publier (1)</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                <button class="btn btn-primary">
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
                                <th class="text-center border-bottom p-3">Crée</th>
                                <th class="text-center border-bottom p-3" style="min-width: 150px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Start -->
                            <tr v-for="(t, index) in 1" :key="index">
                                <th class="p-3">{{ index + 1 }}</th>
                                <td class="p-3">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <img src="assets/images/client/01.jpg"
                                                class="avatar avatar-ex-small rounded-circle shadow" alt="">
                                            <span class="ms-2">Cérémonie d'ouverture du stade</span>
                                        </div>
                                    </a>
                                </td>
                                <td class="text-center p-3">12/02/2024</td>
                                <td class="text-center p-3">12/02/2023</td>
                                <td class="text-end p-3">
                                    <a href="invoice.html" class="btn btn-sm btn-primary">Publier</a>
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
                                    aria-label="Previous">Prec</a></li>
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

        <br />

        <div class="d-md-flex justify-content-between align-items-center border-top pt-4">
            <h5 class="mb-0">Evénements publiés ({{ events.length }})</h5>
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
                                <th class="text-center border-bottom p-3">Crée</th>
                                <th class="text-center border-bottom p-3" style="min-width: 150px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Start -->
                            <tr v-for="(event, index) in events" :key="index">
                                <th class="p-3">{{ index + 1 }}</th>
                                <td class="p-3">
                                    <NuxtLink :to="'/events/' + event.slug">
                                        <div class="d-flex align-items-center">
                                            <img :src="event.image"
                                                class="avatar avatar-ex-small rounded-circle shadow" alt="">
                                            <span class="ms-2">{{event.title }}</span>
                                        </div>
                                    </NuxtLink>
                                </td>
                                <td class="text-center p-3">12/02/2024</td>
                                <td class="text-center p-3">12/02/2023</td>
                                <td class="text-end p-3">
                                    <NuxtLink :to="'/events/' + event.slug" class="btn btn-sm btn-primary">Ouvrir</NuxtLink>
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
                                    aria-label="Previous">Prec</a></li>
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
const eventStore = useEventStore();
const events = computed(() => eventStore.getEventList);

onMounted(async () => {
    await eventStore.fetchEvents();
})
</script>