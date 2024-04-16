<template>
    <div>
        <!doctype html>
        <html lang="fr" dir="ltr">

        <head>
            <!-- head  -->
        </head>

        <body>
            <div class="page-wrapper toggled">
                <Menu />

                <!-- Start Page Content -->
                <main class="page-content bg-light">
                    <!-- Top Header -->
                    <Header />

                    <!-- Container  -->
                    <slot />

                    <!-- Footer Start -->
                    <Footer />
                </main>
            </div>
        </body>

        </html>
    </div>
</template>