<template>
    <nav id="sidebar" class="sidebar-wrapper sidebar-dark">
        <div class="sidebar-content" data-simplebar style="height: calc(100% - 60px);">
            <div class="sidebar-brand">
                <a href="index.html">
                    <img src="/images/logobf.png" height="70" class="logo-light-mode ml-2" alt="">
                    <img src="/images/logobf.png" height="70" class="logo-dark-mode ml-2" alt="">
                    <span class="sidebar-colored">
                        <img src="/images/logobf.png" height="70" alt="">
                    </span>
                </a>
            </div>

            <ul class="sidebar-menu">
                <li>
                    <a :to="{ name: 'home' }"><i class="ti ti-home me-2"></i>Dashboard</a>
                </li>
                <li>
                    <a :to="{ name: 'events.add' }">
                        <i class="fa-solid fa-share"></i>Publier un événement
                    </a>
                    
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-list"></i>Liste des événements
                    </a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-user me-2"></i>Validation des billets</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-brand-gravatar me-2"></i>Publier une cagnotte</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-shopping-cart me-2"></i>Liste des cagnottes</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-camera me-2"></i>Frais de services</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-file-info me-2"></i>Comment ça marche</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-file-info me-2"></i>Contactez-nous</a>
                </li>
                <li>
                    <a href="#"><i class="ti ti-mail-opened me-2"></i>Aller sur le site</a>
                </li>
            </ul>
        </div>
        <!-- Sidebar Footer -->
        <ul class="sidebar-footer list-unstyled mb-0">
            <li class="list-inline-item mb-0">
                <a href="https://1.envato.market/landrick" target="_blank" class="btn btn-icon btn-soft-light">
                    <i class="fa-solid fa-globe"></i></a> <small class="text-muted fw-medium ms-1">site web</small>
            </li>
        </ul>
        <!-- Sidebar Footer -->
    </nav>
    <slot />
</template>
<script>
export default {

}
</script>
