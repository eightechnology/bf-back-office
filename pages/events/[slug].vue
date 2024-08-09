<template>
    <div class="row" v-if="eventDetail">
        <!-- BLog Start -->
        <div class="col-lg-9 col-md-6 mt-4">
            <div class="card blog blog-primary blog-detail border-0 shadow rounded">
                <img :src="eventDetail.image" class="img-fluid rounded-top" :alt="eventDetail.title">
                <h3 class="m-2">{{ eventDetail.title }}</h3>

            </div>

            <div class="row">
                <div class="col-12 mt-4">
                    <ul class="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white-color rounded position-relative overflow-hidden"
                        id="pills-tab" role="tablist">
                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded active" id="description-data" data-bs-toggle="pill"
                                href="#description" role="tab" aria-controls="description" aria-selected="true">
                                <div class="text-center">
                                    <h6 class="mb-0">Tikets</h6>
                                </div>
                            </a><!--end nav link-->
                        </li><!--end nav item-->

                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded" id="additional-info" data-bs-toggle="pill"
                                href="#additional" role="tab" aria-controls="additional" aria-selected="false"
                                tabindex="-1">
                                <div class="text-center">
                                    <h6 class="mb-0">Participants</h6>
                                </div>
                            </a><!--end nav link-->
                        </li><!--end nav item-->

                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded" id="review-comments" data-bs-toggle="pill"
                                href="#review" role="tab" aria-controls="review" aria-selected="false" tabindex="-1">
                                <div class="text-center">
                                    <h6 class="mb-0">Détails</h6>
                                </div>
                            </a><!--end nav link-->
                        </li><!--end nav item-->
                    </ul>

                    <div class="tab-content mt-4" id="pills-tabContent">
                        <div class="card border-0 tab-pane fade p-4 rounded shadow active show" id="description"
                            role="tabpanel" aria-labelledby="description-data">
                            <div class="invoice-table pb-4">
                                <div class="table-responsive bg-white shadow rounded">
                                    <table class="table mb-0 table-center invoice-tb">
                                        <thead class="bg-light">
                                            <tr>
                                                <th scope="col" class="border-bottom text-start">Type ticket</th>
                                                <th scope="col" class="border-bottom text-center">Ticket générés</th>
                                                <th scope="col" class="border-bottom text-center">T vendus</th>
                                                <th scope="col" class="border-bottom text-center">T restants</th>
                                                <th scope="col" class="border-bottom">Prix</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ticket, index) in tickets" :key="index">
                                                <th class="text-start">{{ ticket.name }}</th>
                                                <td class="text-center">0</td>
                                                <td class="text-center">0</td>
                                                <td class="text-center">{{ ticket.remain }}</td>
                                                <td class="text-end">{{ ticket.price }} GNF</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <hr>

                            <h4>Évoltion des ventes</h4>

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

                            <hr>

                            <h4>Tableau des présences</h4>

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

                        <div class="card border-0 tab-pane fade" id="additional" role="tabpanel"
                            aria-labelledby="additional-info">
                            <div class="invoice-table pb-4">
                                <div class="table-responsive bg-white shadow rounded">
                                    <table class="table mb-0 table-center invoice-tb">
                                        <thead class="bg-light">
                                            <tr>
                                                <th scope="col" class="border-bottom text-start">N°</th>
                                                <th scope="col" class="border-bottom text-center">Nom et prénom</th>
                                                <th scope="col" class="border-bottom text-center">Ticket</th>
                                                <th scope="col" class="border-bottom text-center">Quantité</th>
                                                <th scope="col" class="border-bottom">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ticket, index) in 5" :key="index">
                                                <th class="text-start">{{ index + 1 }}</th>
                                                <td class="text-center">Amar Diallo</td>
                                                <td class="text-center">VIP</td>
                                                <td class="text-center">7</td>
                                                <td class="text-end">430 000 GNF</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card border-0 tab-pane fade p-4 rounded shadow" id="review" role="tabpanel"
                            aria-labelledby="review-comments">
                            <h3 class="text-primary mb-3">Détail de l'événement</h3>


                            <table class="table p-4 rounded shadow">
                                <tbody>
                                    <tr>
                                        <td>Date début</td>
                                        <td class="text-muted text-end">{{ formatDate(eventDetail.starts_at) }}</td>
                                    </tr>

                                    <tr>
                                        <td>Date fin</td>
                                        <td class="text-muted text-end">{{ formatDate(eventDetail.ends_at) }}</td>
                                    </tr>

                                    <tr>
                                        <td>Téléphone</td>
                                        <td class="text-muted text-end">{{ eventDetail.phone }}</td>
                                    </tr>

                                    <tr>
                                        <td>Lieu</td>
                                        <td class="text-muted text-end">{{ eventDetail.address }}</td>
                                    </tr>

                                    <tr>
                                        <td>Type d'événement</td>
                                        <td class="text-muted text-end">{{ eventDetail.type }}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr>

                            <h5>Contenu</h5>

                            <div v-html="eventDetail.description"></div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BLog End -->

        <!-- START SIDEBAR -->
        <div class="col-lg-3 col-md-6 col-12 mt-4">
            <div class="card border-0 rounded shadow p-4 widget">
                <div class="text-center" v-if="company">
                    <div class="mt-4">
                        <img :src="company.logo"
                            class="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="">

                        <a href="blog-about.html" class="text-primary h5 mt-4 mb-0 d-block">{{ company.name }}</a>
                        <small class="text-muted d-block">{{ company.address }}</small>
                        <small class="text-muted d-block">{{ company.email }}</small>
                    </div>
                    <hr>

                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button type="button" class="btn btn-soft-secondary outline" data-bs-toggle="modal"
                                data-bs-target="#codeModal"><i class="fa-solid fa-qrcode"></i> Code de
                                l'événement</button>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="codeModal" tabindex="-1" aria-labelledby="codeModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body" v-if="eventDetail.code">
                                        <h3 class="text-center my-2" id="codeModalLabel">Code de l'événement</h3>
                                        <QRCodeVue3 :value="eventDetail.code" :width="200" :height="200"
                                            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }" />
                                        <h3 class="mt-3">{{ eventDetail.code }}</h3>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary"
                                            data-bs-dismiss="modal">Fermer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button @click="onEditEvent()" class="btn btn-soft-danger outline"><i
                                    class="fa-solid fa-pen-to-square"></i> Modifier l'événement</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 rounded shadow p-4 widget mt-4">
                <h5 class="mb-0">Actions sur le ticket</h5>
                <div class="widget-grid overflow-hidden mt-3">
                    <div class="col-md-12">
                        <div class="send d-grid">
                            <button class="btn btn-primary" @click="onAddTicket()"><i class="fa-solid fa-ticket"></i>
                                Ajouter un
                                ticket</button>
                        </div>
                    </div>
                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button @click="onOpenGenerate()" class="btn btn-soft-success outline"><i
                                    class="fa-solid fa-ticket"></i> Générer des tickets</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 rounded shadow p-4 widget mt-4">
                <h5 class="mb-0">Voir la localisation</h5>
                <div class="widget-grid overflow-hidden mt-3">
                    <!-- <GoogleMap api-key="AIzaSyCx9UT_ZtkoyDQLPwdGaWmdPYaDVtndBeo" style="width: 100%; height: 200px" :center="center"
                        :zoom="15">
                        <Marker :options="{ position: center }" />
                    </GoogleMap> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useTicketStore } from '~/stores/ticket';
import QRCodeVue3 from 'qrcode-vue3';
import moment from 'moment'
// import { GoogleMap, Marker } from 'vue3-google-map'

const { $locally } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const eventStore = useEventStore();
const ticketStore = useTicketStore();
const eventDetail = computed(() => eventStore.getEventDetail);
const company = computed(() => JSON.parse(sessionStorage.getItem('company')));
const tickets = ref([]);
const center = { lat: 40.689247, lng: -74.044502 }

onMounted(async () => {
    await eventStore.fetchEventDetail(route.params.slug).then(() => {
        tickets.value = eventDetail.value.dates[0].tickets
        console.log(tickets.value)
    })
})

const formatDate = (value) => {
    return moment(value).format("YYYY-MM-DD HH:mm")
}

const onAddTicket = () => {
    if (eventDetail.value.dates) {
        const slug = ref(eventDetail.value)
        ticketStore.checkDateEventSlug(eventDetail.value);
        router.push('/events/tickets');
    }
}

const onEditEvent = () => {
    eventStore.onSetEventValue(eventDetail.value)
    router.push('/events/edit')
}

const onOpenGenerate = () => {
    eventStore.onSetEventValue(eventDetail.value)
    router.push('/events/tickets/generate')
}


</script>