<template>
    <div>
        <div class="alert bg-soft-primary fw-medium text-center" role="alert"> <i
                class="uil uil-info-circle fs-5 align-middle me-1"></i> Les champs avec (<span
                class="text-danger">*</span>) sont obligatoires </div>

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <form @submit.prevent="onAddTicket">
                    <div class="card border-0 rounded shadow p-4">
                        <h5 class="mb-0">Ajouter un ticket</h5>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Nom du ticket (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="text" class="form-control " id="title" placeholder="Titre du ticket"
                                        :class="v$.name.$error ? 'invalid' : ''" @input="v$.name.$touch()"
                                        v-model="ticketForm.name">
                                    <div v-if="v$.name.$error" class="text-danger">
                                        <p>Le nom du ticket est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Nombre de places (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="number" class="form-control " id="title" placeholder="Nombre de places"
                                        :class="v$.capacity.$error ? 'invalid' : ''" @input="v$.capacity.$touch()"
                                        v-model="ticketForm.capacity">
                                    <div v-if="v$.capacity.$error" class="text-danger">
                                        <p>Le nombre de places est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Prix #GNF (<span
                                            class="text-danger">*</span>)</label>
                                    <input type="number" class="form-control " id="title" placeholder="Prix"
                                        :class="v$.price.$error ? 'invalid' : ''" @input="v$.price.$touch()"
                                        v-model="ticketForm.price">
                                    <div v-if="v$.price.$error" class="text-danger">
                                        <p>Le prix est obligatoire</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label for="title" class="form-label">Autoriser la vente des billets ? (<span
                                        class="text-danger">*</span>)</label>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" v-model="ticketForm.sellable">
                                        <label class="form-check-label" for="flexRadioDefault2">Non</label>
                                    </div>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" v-model="ticketForm.sellable">
                                        <label class="form-check-label" for="flexRadioDefault1">Oui</label>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="col-lg-6">
                                <label for="title" class="form-label">Afficher les prix ? (<span
                                            class="text-danger">*</span>)</label>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault3">
                                        <label class="form-check-label" for="flexRadioDefault1">Oui</label>
                                    </div>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault4">
                                        <label class="form-check-label" for="flexRadioDefault2">Non</label>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="mb-0 mt-4 text-end">
                            <button class="btn btn-primary" type="submit" :disabled="loading || v$.$invalid">
                                <span v-if="!loading"><i class="fa-solid fa-plus mx-2"></i>Ajouter</span>
                                <div class="text-center" v-else>
                                    <div class="spinner-border" role="status"></div>
                                </div>
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
                                        <th scope="col" class="border-bottom text-start">Ticket</th>
                                        <th scope="col" class="border-bottom text-center">Prix (GNF)</th>
                                        <th scope="col" class="border-bottom text-center">Nb de places</th>
                                        <th scope="col" class="border-bottom text-center">A vendre</th>
                                        <th scope="col" class="border-bottom text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ticket, index) in tickets" :key="index">
                                        <th class="text-start">{{ ticket.name }}</th>
                                        <td class="text-center">{{ ticket.price }} GNF</td>
                                        <td class="text-center">{{ ticket.remain }}</td>
                                        <td class="text-center" v-if="ticket.sellable">Oui</td>
                                        <td class="text-center" v-else>Non</td>
                                        <td class="text-center">
                                            <a href="" class="mx-2">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <a href="">
                                                <i class="fa-solid fa-trash" style="color: red;"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="mb-0 mt-4 text-end">
                    <button class="btn btn-danger" @click="onGoBack()"><i
                            class="fa-solid fa-arrow-left mx-2"></i>Retour</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators';
import { useTicketStore } from '~/stores/ticket';

const { $swal } = useNuxtApp();

const router = useRouter();
const ticketStore = useTicketStore();
const dateEventSlug = computed(() => ticketStore.getDateEventSlug);
const loading = computed(() => ticketStore.getLoading);
const ends_at = computed(() => ticketStore.getEndsAt);
const tickets = computed(() => ticketStore.getTickets);

// const showPrintable = false;

const ticketForm = reactive({
    dateevent: "",
    name: "",
    capacity: 0,
    price: 0,
    sellable: true,
    printable: true,
    client_charged: true,
    limit: 0,
    close_at: ""
})

const rules = computed(() => (
    {
        name: { required },
        capacity: { required },
        price: { required }
    }
));

const v$ = useVuelidate(rules, ticketForm);

onMounted(async () => {
    await ticketStore.fetchTickets();
})

const onAddTicket = async () => {
    console.log(ticketForm)
    ticketForm.close_at = ends_at.value
    ticketForm.dateevent = dateEventSlug.value
    ticketStore.onCreateTicket(ticketForm).then(() => {
        $swal.fire({
            title: "Bravo!",
            text: "Le ticket est ajouté!",
            icon: "success"
        });
        ticketStore.fetchTickets()
    });
}

const onGoBack = () => {
    router.back();
}
</script>

<style scoped>
.invalid {
    border-color: #e43f52 !important
}
</style>