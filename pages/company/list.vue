<template>
    <div>
        <a href="index.html">
            <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
        </a>
        <h5 class="mb-3 text-center">Séléctionner votre structure</h5>

        <div class="d-flex flex-row justify-content-center">
            <div class="p-6 mx-2" v-for="(company, index) in companies" :key="index">
                <div class="card" style="width: 10rem;">
                    <a @click="onSelectCompany(company)" style="cursor: pointer;">
                        <img :src="company.logo"  class="card-img-top" :alt="company.name">
                    </a>
                </div>
            </div>
        </div>

        <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>

    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth", 
    middleware: "auth"
})

const { $locally } = useNuxtApp();
const router = useRouter();
const companyStore = useCompagnyStore();
const companies = computed(() => companyStore.getCompagnies);

onMounted(async () => {
    await companyStore.fetchCompagnies().then(() => {
        if (companies.value.length == 1) {
            $locally.setItem('companySlug', companies.value[0].slug);
            console.log(companies.value[0])
            location.assign('/');
            
        }
    });
})

const onSelectCompany = (company) => {
    sessionStorage.setItem('companySlug', company.slug);
    sessionStorage.setItem('company', JSON.stringify(company));
    location.assign('/');
}
</script>