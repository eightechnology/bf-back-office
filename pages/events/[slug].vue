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
                                href="#description" role="tab" aria-controls="description" aria-selected="false"
                                tabindex="-1">
                                <div class="text-center">
                                    <h6 class="mb-0">Tickets</h6>
                                </div>
                            </a>
                        </li>

                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded" id="additional-info" data-bs-toggle="pill"
                                href="#additional" role="tab" aria-controls="additional" aria-selected="false"
                                tabindex="-1">
                                <div class="text-center">
                                    <h6 class="mb-0">Participants</h6>
                                </div>
                            </a>
                        </li>

                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded " id="review-comments" data-bs-toggle="pill"
                                href="#review" role="tab" aria-controls="review" aria-selected="true">
                                <div class="text-center">
                                    <h6 class="mb-0">Détails</h6>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content mt-4" id="pills-tabContent">
                        <div class="card border-0 tab-pane fade p-4 rounded shadow active" id="description"
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
                            <table class="table p-4 rounded shadow">
                                <tbody>
                                    <tr>
                                        <td style="width: 100px;">Color</td>
                                        <td class="text-muted">Red, White, Black, Orange</td>
                                    </tr>

                                    <tr>
                                        <td>Material</td>
                                        <td class="text-muted">Cotton</td>
                                    </tr>

                                    <tr>
                                        <td>Size</td>
                                        <td class="text-muted">S, M, L, XL, XXL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="card border-0 tab-pane fade p-4 rounded shadow  show" id="review" role="tabpanel"
                            aria-labelledby="review-comments">
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul class="media-list list-unstyled mb-0">
                                        <li>
                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <a class="pe-3" href="#">
                                                        <img src="assets/images/client/01.jpg"
                                                            class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                                            alt="img">
                                                    </a>
                                                    <div class="flex-1 commentor-detail">
                                                        <h6 class="mb-0"><a href="javascript:void(0)"
                                                                class="text-dark media-heading">Lorenzo Peterson</a>
                                                        </h6>
                                                        <small class="text-muted">15th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <ul class="list-unstyled mb-0">
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text-muted fst-italic p-3 bg-light rounded">" Awesome product
                                                    "</p>
                                            </div>
                                        </li>

                                        <li class="mt-4">
                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <a class="pe-3" href="#">
                                                        <img src="assets/images/client/02.jpg"
                                                            class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                                            alt="img">
                                                    </a>
                                                    <div class="flex-1 commentor-detail">
                                                        <h6 class="mb-0"><a href="javascript:void(0)"
                                                                class="media-heading text-dark">Tammy Camacho</a></h6>
                                                        <small class="text-muted">15th August, 2019 at 05:44 pm</small>
                                                    </div>
                                                </div>
                                                <ul class="list-unstyled mb-0">
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="mdi mdi-star-outline text-warning"></i></li>
                                                </ul>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text-muted fst-italic p-3 bg-light rounded mb-0">" Good "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <form class="ms-lg-4">
                                        <div class="row">
                                            <div class="col-12">
                                                <h5>Add your review:</h5>
                                            </div>
                                            <div class="col-12 mt-4">
                                                <h6 class="small fw-bold">Your Rating:</h6>
                                                <a href="javascript:void(0)" class="d-inline-block me-3">
                                                    <ul class="list-unstyled mb-0 small">
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </a>

                                                <a href="javascript:void(0)" class="d-inline-block me-3">
                                                    <ul class="list-unstyled mb-0 small">
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </a>

                                                <a href="javascript:void(0)" class="d-inline-block me-3">
                                                    <ul class="list-unstyled mb-0 small">
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </a>

                                                <a href="javascript:void(0)" class="d-inline-block me-3">
                                                    <ul class="list-unstyled mb-0 small">
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </a>

                                                <a href="javascript:void(0)" class="d-inline-block">
                                                    <ul class="list-unstyled mb-0 small">
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i
                                                                class="mdi mdi-star text-warning"></i></li>
                                                    </ul>
                                                </a>
                                            </div>
                                            <div class="col-md-12 mt-3">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Review:</label>
                                                    <div class="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-message-circle fea icon-sm icons">
                                                            <path
                                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                                            </path>
                                                        </svg>
                                                        <textarea id="message" placeholder="Your Comment" rows="5"
                                                            name="message" class="form-control ps-5"
                                                            required=""></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Name <span
                                                            class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-user fea icon-sm icons">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                        <input id="name" name="name" type="text" placeholder="Name"
                                                            class="form-control ps-5" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email <span
                                                            class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-mail fea icon-sm icons">
                                                            <path
                                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                            </path>
                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                        </svg>
                                                        <input id="email" type="email" placeholder="Email" name="email"
                                                            class="form-control ps-5" required="">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="send d-grid">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- BLog End -->

        <!-- START SIDEBAR -->
        <div class="col-lg-3 col-md-6 col-12 mt-4">
            <div class="card border-0 rounded shadow p-4 widget">
                <div class="text-center">
                    <div class="mt-4">
                        <img src="assets/images/client/03.jpg"
                            class="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="">

                        <a href="blog-about.html" class="text-primary h5 mt-4 mb-0 d-block">EIGHT TECHNOLOGY</a>
                        <small class="text-muted d-block">Photographer &amp; Blogger</small>
                    </div>
                    <hr>

                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button type="submit" class="btn btn-soft-primary outline">Code de l'événement</button>
                        </div>
                    </div>

                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button type="submit" class="btn btn-soft-danger outline">Modifier l'événement</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 rounded shadow p-4 widget mt-4">
                <h5 class="mb-0">Actions sur le ticket</h5>
                <div class="widget-grid overflow-hidden mt-3">
                    <div class="col-md-12">
                        <div class="send d-grid">
                            <button type="submit" class="btn btn-primary" @click="onAddTicket()">Ajouter un ticket</button>
                        </div>
                    </div>
                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button type="submit" class="btn btn-soft-success outline">Générer des tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const eventStore = useEventStore();
const eventDetail = computed(() => eventStore.getEventDetail);

onMounted(async () => {
    await eventStore.fetchEventDetail(route.params.slug)
})

const onAddTicket = () => {
    return router.push('/events/tickets');
}


</script>