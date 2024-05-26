<template>
    <div>
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

                                    <ul class="sidebar-menu">
                                        <li class="active">
                                            <NuxtLink to="/"><i class="ti ti-home me-2"></i>Dashboard</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/create"><i class="ti ti-share me-2"></i>Publier un événement</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/events/list"><i class="ti ti-list me-2"></i>Liste des événements</NuxtLink>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)"><i class="ti ti-circle-check me-2"></i>Validation des billets</a>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/create"><i
                                                    class="ti ti-share me-2"></i>Publier une cagnotte</NuxtLink>
                                        </li>
                                        <li class="">
                                            <NuxtLink to="/collectes/list"><i
                                                    class="ti ti-gift me-2"></i>Liste des cagnottes</NuxtLink>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)"><i class="ti ti-cash me-2"></i>Comment ça marche</a>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)"><i class="ti ti-address-book me-2"></i>Contactez-nous</a>
                                        </li>
                                        <li class="">
                                            <a href="javascript:void(0)"><i class="ti ti-globe me-2"></i>Aller sur le site</a>
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
            <!-- Sidebar Footer -->
            <ul class="sidebar-footer list-unstyled mb-0">
                <li class="list-inline-item mb-0">
                    <a href="https://1.envato.market/landrick" target="_blank" class="btn btn-icon btn-soft-light"><i
                            class="ti ti-shopping-cart"></i></a> <small class="text-white fw-medium ms-1">Aller sur le site</small>
                </li>
            </ul>
            <!-- Sidebar Footer -->
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
