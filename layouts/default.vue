<template>
    <div class="page-wrapper toggled" id="mytoogle">
        <ClientOnly>
        <nav id="sidebar" class="sidebar-wrapper sidebar-dark">
            <div class="sidebar-content" data-simplebar="init" style="height: calc(100% - 60px);">
                <div class="simplebar-wrapper" style="margin: 0px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                aria-label="scrollable content" style="height: 100%; overflow: hidden;">
                                <div class="simplebar-content" style="padding: 0px;">
                                    <div class="sidebar-brand active">
                                        <a href="/">
                                            <img src="assets/images/logobf.png" height="74" class="logo-light-mode"
                                                alt="">
                                            <img src="assets/images/logobf.png" height="74" class="logo-dark-mode"
                                                alt="">
                                            <span class="sidebar-colored mx-4">
                                                <img src="assets/images/logobf.png" height="74" alt="">
                                            </span>
                                        </a>
                                    </div>

                                    <ul class="sidebar-menu d-none d-lg-block d-md-block">
                                        <li class="active">
                                            <NuxtLink to="/"><i class="fa-solid fa-house me-2"></i>Dashboard</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/create"><i class="fa-solid fa-share-nodes me-2"></i>Publier un
                                                événement</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/list"><i class="fa-solid fa-list-ul me-2"></i>Liste des événements</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/validation"><i class="fa-solid fa-mobile me-2"></i>Validation des billets</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/create"><i class="fa-solid fa-hand-holding-heart me-2"></i>Publier une cagnotte</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/list"><i class="fa-solid fa-gift me-2"></i>Liste des cagnottes</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/conditions"><i class="fa-solid fa-question me-2"></i>Conditions d'utilisations</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/tarifications"><i class="fa-solid fa-money-check-dollar me-2"></i>Tarifications </NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/contact"><i class="fa-solid fa-envelope me-2"></i>Contactez-nous</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/"><i class="fa-solid fa-globe me-2"></i>Aller sur le
                                                site</NuxtLink>
                                        </li>
                                    </ul>

                                    <!-- affichage mobile  -->
                                    <ul class="sidebar-menu d-block d-sm-none">
                                        <li class="active">
                                            <NuxtLink to="/" @click="moveToggle"><i class="ti ti-home me-2"></i>Dashboard</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/create" @click="moveToggle"><i class="ti ti-share me-2"></i>Publier un
                                                événement</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/list" @click="moveToggle"><i class="ti ti-list me-2"></i>Liste des
                                                événements</NuxtLink>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)"><i
                                                    class="ti ti-circle-check me-2"></i>Validation des billets</a>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/create" @click="moveToggle"><i class="ti ti-share me-2"></i>Publier une
                                                cagnotte</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/list" @click="moveToggle"><i class="ti ti-gift me-2"></i>Liste des
                                                cagnottes</NuxtLink>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)" @click="moveToggle"><i class="ti ti-cash me-2"></i>Comment ça
                                                marche</a>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)" @click="moveToggle"><i class="ti ti-cash me-2"></i>Tarification</a>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)" @click="moveToggle"><i
                                                    class="ti ti-address-book me-2"></i>Contactez-nous</a>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)" @click="moveToggle"><i class="ti ti-globe me-2"></i>Aller sur le
                                                site</a>
                                        </li>
                                    </ul>
                                    <!-- sidebar-menu  -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: 300px; height: 870px;"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                </div>
                <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                </div>
            </div>
        </nav>

        
            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
                <div class="top-header">
                    <div class="header-bar d-flex justify-content-between border-bottom">
                        <div class="d-flex align-items-center">
                            <a href="#" class="logo-icon me-3">
                                <img src="/images/logo-icon.png" height="30" class="small" alt="">
                                <span class="big">
                                    <img src="/images/logobf.png" height="24" class="logo-light-mode" alt="">
                                    <img src="/images/logobf.png" height="24" class="logo-dark-mode" alt="">
                                </span>
                            </a>
                            <a @click="moveToggle()" id="close-sidebar" class="btn btn-icon btn-soft-light">
                                <i class="ti ti-menu-2"></i>
                            </a>
                            <div class="search-bar p-0 d-none d-md-block ms-2">
                                <div id="search" class="menu-search mb-0">
                                    <form role="search" method="get" id="searchform" class="searchform">
                                        <div>
                                            <input type="text" class="form-control border rounded" name="s" id="s"
                                                placeholder="Search Keywords...">
                                            <input type="submit" id="searchsubmit" value="Search">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <ul class="list-unstyled mb-0">
                            <li class="list-inline-item mb-0 ms-1">
                                <div class="dropdown dropdown-primary">
                                    <button type="button" class="btn btn-icon btn-soft-light dropdown-toggle p-0"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                            class="ti ti-bell"></i></button>
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>

                                    <div class="dropdown-menu dd-menu shadow rounded border-0 mt-3 p-0" data-simplebar
                                        style="height: 320px; width: 290px;">
                                        <div
                                            class="d-flex align-items-center justify-content-between p-3 border-bottom">
                                            <h6 class="mb-0 text-dark">Notifications</h6>
                                            <span class="badge bg-soft-danger rounded-pill">3</span>
                                        </div>
                                        <div class="p-3">
                                            <a href="#!" class="dropdown-item features feature-primary key-feature p-0">
                                                <div class="d-flex align-items-center">
                                                    <div class="icon text-center rounded-circle me-2">
                                                        <i class="ti ti-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-1">
                                                        <h6 class="mb-0 text-dark title">Order Complete</h6>
                                                        <small class="text-muted">15 min ago</small>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#!"
                                                class="dropdown-item features feature-primary key-feature p-0 mt-3">
                                                <div class="d-flex align-items-center">
                                                    <img src="/assets/images/client/04.jpg"
                                                        class="avatar avatar-md-sm rounded-circle border shadow me-2"
                                                        alt="">
                                                    <div class="flex-1">
                                                        <h6 class="mb-0 text-dark title"><span
                                                                class="fw-bold">Message</span> from Luis
                                                        </h6>
                                                        <small class="text-muted">1 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#!"
                                                class="dropdown-item features feature-primary key-feature p-0 mt-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="icon text-center rounded-circle me-2">
                                                        <i class="ti ti-currency-dollar"></i>
                                                    </div>
                                                    <div class="flex-1">
                                                        <h6 class="mb-0 text-dark title"><span class="fw-bold">One
                                                                Refund Request</span>
                                                        </h6>
                                                        <small class="text-muted">2 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#!"
                                                class="dropdown-item features feature-primary key-feature p-0 mt-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="icon text-center rounded-circle me-2">
                                                        <i class="ti ti-truck-delivery"></i>
                                                    </div>
                                                    <div class="flex-1">
                                                        <h6 class="mb-0 text-dark title">Deliverd your Order</h6>
                                                        <small class="text-muted">Yesterday</small>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#!"
                                                class="dropdown-item features feature-primary key-feature p-0 mt-3">
                                                <div class="d-flex align-items-center">
                                                    <img src="/assets/images/client/15.jpg"
                                                        class="avatar avatar-md-sm rounded-circle border shadow me-2"
                                                        alt="">
                                                    <div class="flex-1">
                                                        <h6 class="mb-0 text-dark title"><span
                                                                class="fw-bold">Cally</span> started
                                                            following you</h6>
                                                        <small class="text-muted">2 days ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="list-inline-item mb-0 ms-1">
                                <div class="dropdown dropdown-primary" v-if="company">
                                    <button type="button" class="btn btn-soft-light dropdown-toggle p-0"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                            :src="company.logo" class="avatar avatar-ex-small rounded" alt=""></button>
                                    <div class="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3"
                                        style="min-width: 200px;">
                                        <a class="dropdown-item d-flex align-items-center text-dark pb-3"
                                            href="profile.html">
                                            <img :src="company.logo"
                                                class="avatar avatar-md-sm rounded-circle border shadow" alt="">
                                            <div class="flex-1 ms-2">
                                                <span class="d-block">{{ company.name }}</span>
                                                <small class="text-muted">{{ company.address }}</small>
                                            </div>
                                        </a>
                                        <NuxtLink class="dropdown-item text-dark" to="/company/list"><span
                                                class="mb-0 d-inline-block me-1"><i class="ti ti-home"></i></span>
                                            Changer d'organisation</NuxtLink>
                                        <a class="dropdown-item text-dark" @click="onEditCompany()" style="cursor: pointer;"><span
                                                class="mb-0 d-inline-block me-1"><i class="ti ti-settings"></i></span>
                                            Modifier</a>
                                        <div class="dropdown-divider border-top"></div>
                                        <a class="dropdown-item text-dark" @click="logout()"
                                            style="cursor: pointer;"><span class="mb-0 d-inline-block me-1"><i
                                                    class="ti ti-logout"></i></span> Déconnexion</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Container  -->
                <div class="container-fluid">
                    <div class="layout-specing">
                        <slot />
                    </div>
                </div>

                <!-- Footer Start -->
                <Footer />
            </main>
        </ClientOnly>
    </div>
</template>
<script setup>
const { $locally } = useNuxtApp();
const router = useRouter();

const authStore = useAuthStore();
const companyStore = useCompagnyStore();

const slug = computed(() => $locally.getItem('companySlug'));
const company = computed(() => companyStore.getCompany);

const isToogle = ref(true);

onMounted(async () => {
    if(!company.value.slug) {
        await companyStore.fetchSelectedCompany(slug.value)
    }
})

const moveToggle = () => {
    let t = document.getElementById('mytoogle');
    if(isToogle.value) {
        t.setAttribute("class", "page-wrapper");
        console.log(t)
        isToogle.value = false
    } else {
        t.setAttribute("class", "page-wrapper toggled");
        console.log(t)
        isToogle.value = true
    }
}

const onEditCompany = () => {
    router.push('/company/edit')
}

const toggleMobile = () => {
    
}

const logout = async () => {
    await authStore.onLogout();
}
</script>