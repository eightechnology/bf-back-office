<template>
    <div>
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
        </a>
        <h5 class="mb-3 text-center">Séléctionner votre structure</h5>

        <div class="d-flex flex-row justify-content-center">
            <div class="p-6 mx-2" v-for="(company, index) in companies" :key="index">
                <div class="card" style="width: 10rem;">
                    <img :src="company.logo" class="card-img-top" :alt="company.name">
                </div>
            </div>
        </div>

        <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>

    </div>
</template>

<script setup>
import useCompany from '~/services/company';

definePageMeta({
    layout: "auth"
})

const { loading, companies, onGetCompanyList } = useCompany();

onMounted(async () => {
    await onGetCompanyList();
})
</script>