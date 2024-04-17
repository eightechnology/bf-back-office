<template>
    <div class="page-wrapper toggled">
        <Menu />

        <ClientOnly>
            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
                <Header />
    
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