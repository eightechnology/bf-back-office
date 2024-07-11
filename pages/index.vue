<template>
    <div>
        <h1 class="text-muted">Tableau de bord</h1>
        <aside>
            <h5 class="text-primary">Historique des événements</h5>
            <div class="row">
                <div class="col-md-4 col-lg-4 col-12 mt-2">
                    <div class="card text-bg-primary shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title">Evénement populaire</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Formation en pyton</h6>
                            <p class="card-text text-center my-4">
                                <span style="font-size: 60px; font-weight: bold;">86 %</span>
                            </p>
                        </div>
                        <div class="card-footer text-bg-primary-900">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        <i class="fa-solid fa-money-bill"></i>
                                    </p>
                                </div>
                                <div>
                                    <p>10 000 000 GNF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-12  mt-2">
                    <div class="card text-bg-info">
                        <div class="card-body">
                            <h5 class="card-title">Evénement plus rentable</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Formation en pyton</h6>
                            <p class="card-text text-center my-4">
                                <span style="font-size: 60px; font-weight: bold;">36 %</span>
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        <i class="fa-solid fa-money-bill"></i>
                                    </p>
                                </div>
                                <div>
                                    <p>5 000 000 GNF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-12  mt-2">
                    <div class="card text-bg-success">
                        <div class="card-body">
                            <h5 class="card-title">Evénement moins populaire</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Formation en pyton</h6>
                            <p class="card-text text-center my-4">
                                <span style="font-size: 60px; font-weight: bold;">2 %</span>
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        <i class="fa-solid fa-money-bill"></i>
                                    </p>
                                </div>
                                <div>
                                    <p>400 000 GNF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <aside class="mt-3">
            <h5 class="text-primary">Dernier événement organisé</h5>
            <div class="row">
                <div class="col-md-4 col-lg-4 col-12  mt-2">
                    <div class="card border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-users"></i> Participants</h5>
                            <p class="card-text text-center my-4">
                                <span style="font-size: 60px; font-weight: bold;">130</span>
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        Formation en python
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-12  mt-2">
                    <div class="card border-success">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-eye"></i> Nombre de vues</h5>
                            <p class="card-text text-center my-4 text-success">
                                <span style="font-size: 60px; font-weight: bold;">205</span>
                            </p>
                        </div>
                        <div class="card-footer border-success">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        Formation en python
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-12  mt-2">
                    <div class="card text-bg-secondary">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-ticket"></i> Vente</h5>
                            <div class="d-flex justify-content-between mt-3" style="font-size: 25px; font-weight: bold;">
                                <div class="p-0" style="font-size: 17px;">
                                    <p class="p-0 m-0"> 200 000 GNF </p>
                                    <p class="p-0 m-0">Balcon</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <p>15%</p>
                                </div>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div class="p-0" style="font-size: 17px;">
                                    <p class="p-0 m-0"> 400 000 GNF </p>
                                    <p class="p-0 m-0">VIP</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <p>55%</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between" style="font-size: 25px; font-weight: bold;">
                                <div>
                                    <p>
                                        Total
                                    </p>
                                </div>
                                <div>
                                    <p>10 000 000 GNF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"]
});

// const { data: categories } = await useFetch('http://localhost:8000/api/categories/event')
const { data: categories } = await useFetch('/api/category')

console.log(useRuntimeConfig().public.vueAppDevUrl)
const router = useRouter();
const changePage = () => {
    console.log("test")
    router.push('/about')
}
</script>