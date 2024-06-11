<template>
    <div class="row">
        <!-- BLog Start -->
        <div class="col-lg-9 col-md-6 mt-4">
            <div class="card blog blog-primary blog-detail border-0 shadow rounded">
                <img src="assets/images/blog/bg1.jpg" class="img-fluid rounded-top" alt="">
                <h3 class="m-2">Test</h3>

            </div>

            <div class="row">
                <div class="col-12 mt-4">
                    <ul class="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white-color rounded position-relative overflow-hidden"
                        id="pills-tab" role="tablist">
                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded active" id="description-data" data-bs-toggle="pill"
                                href="#description" role="tab" aria-controls="description" aria-selected="true">
                                <div class="text-center">
                                    <h6 class="mb-0">Contributeurs</h6>
                                </div>
                            </a>
                        </li>


                        <li class="nav-item m-1" role="presentation">
                            <a class="nav-link py-2 px-5 rounded" id="review-comments" data-bs-toggle="pill"
                                href="#review" role="tab" aria-controls="review" aria-selected="false" tabindex="-1">
                                <div class="text-center">
                                    <h6 class="mb-0">Détails</h6>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content mt-4" id="pills-tabContent">
                        <div class="card border-0 tab-pane fade p-4 rounded shadow active show" id="description"
                            role="tabpanel" aria-labelledby="description-data">
                            <div class="invoice-table pb-4">
                                <div class="table-responsive bg-white shadow rounded">
                                    <table class="table mb-0 table-center invoice-tb">
                                        <thead class="bg-light">
                                            <tr>
                                                <th scope="col" class="border-bottom text-start">N°</th>
                                                <th scope="col" class="border-bottom text-center">Nom et prénom</th>
                                                <th scope="col" class="border-bottom text-center">Montant</th>
                                                <th scope="col" class="border-bottom text-center">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(participant, index) in 5" :key="index">
                                                <th class="text-start">{{ index + 1 }}</th>
                                                <td class="text-center">Amar Diallo</td>
                                                <td class="text-center">430 000 GNF</td>
                                                <td class="text-center">12/03/2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card border-0 tab-pane fade p-4 rounded shadow" id="review" role="tabpanel"
                            aria-labelledby="review-comments">
                            <h3 class="text-primary mb-3">Détail de la collecte</h3>
                            <h5>Contenu</h5>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatum minima,
                                cupiditate similique quis sed accusamus unde quos architecto facere consequatur
                                repellendus delectus quia! Qui hic eos a deleniti suscipit.</p>

                            <table class="table p-4 rounded shadow">
                                <tbody>
                                    <tr>
                                        <td>Date début</td>
                                        <td class="text-muted text-end">20/01/2024</td>
                                    </tr>

                                    <tr>
                                        <td>Date fin</td>
                                        <td class="text-muted text-end">30/12/2024</td>
                                    </tr>

                                    <tr>
                                        <td>Bénéficiaire</td>
                                        <td class="text-muted text-end">Sadialiou Diallo</td>
                                    </tr>

                                    <tr>
                                        <td>Montant sollicité</td>
                                        <td class="text-muted text-end fw-bold">20 000 000 GNF</td>
                                    </tr>

                                    <tr>
                                        <td>Montant collecté</td>
                                        <td class="text-muted text-end fw-bold">2 000 000 GNF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BLog End -->

        <!-- START SIDEBAR -->
        <div class="col-lg-3 col-md-6 col-12 mt-4">
            <div class="card border-0 rounded shadow p-4 widget mb-4">
                <div class="collected-amount p-1 text-center">
                    <p class="m-0">
                        <i class="fa fa-wallet me-2 text-primary"></i>
                        Collectés
                    </p>
                    <h5 class="m-0 fw-bold text-primary">
                        200 000 000 GNF
                    </h5>
                </div>
                <hr class="py-0">
                <ul class="list-unstyled d-flex justify-content-center mb-0 pt-1">
                    <li class="small text-muted p-1">
                        <ul class="date text-center me-3 mb-0 list-unstyled">
                            <li class="fw-bold grow-participant-mobile">
                                <i class="fa-solid fa-user me-2 text-primary"></i>29
                            </li>
                            <li class="">Contributeurs</li>
                        </ul>
                    </li>
                    <li class="text-muted small p-1">
                        <ul class="date text-center me-3 mb-0 list-unstyled">
                            <li class="fw-bold grow-participant-mobile">
                                <i class="fa-solid fa-calendar-days me-2 text-primary"></i>90
                            </li>
                            <li class="f">Jours restant</li>
                        </ul>
                    </li>
                </ul>
                <div class="row justify-content-center mt-3">
                    <circle-progress fill-color="#FF7D13" :is-shadow="true" :show-percent="true" :percent="79"
                        class="custom-circle" :border-bg-width="25" :border-width="25" :shadow="{
                            inset: true,
                            vertical: 2,
                            horizontal: 2,
                            blur: 4,
                            opacity: .4,
                            color: '#000000'
                        }" />
                </div>
                <div class="widget-grid overflow-hidden mt-3">
                    <hr>
                    <ul class="list-unstyled d-flex justify-content-between align-items-center mb-0 pt-1">
                        <li class="small text-muted p-1">
                            <h5>Nombre de vue</h5>
                        </li>
                        <li class="text-muted small p-1">
                            <h4 class="text-primary fw-bold">350</h4>
                        </li>
                    </ul>
                </div>
            </div>

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
                                data-bs-target="#codeModal"><i class="fa-solid fa-qrcode"></i> Code de la
                                collecte</button>
                        </div>
                    </div>

                    <div class="col-md-12 my-2">
                        <div class="send d-grid">
                            <button @click="onEditEvent()" class="btn btn-soft-danger outline"><i
                                    class="fa-solid fa-pen-to-square"></i> Modifier la collecte</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

const company = computed(() => JSON.parse(sessionStorage.getItem('company')));
</script>