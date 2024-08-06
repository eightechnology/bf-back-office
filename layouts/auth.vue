<template>
    <div>
        <section class="bg-home d-flex align-items-center">
            <div class="bg-overlay bg-overlay-white"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <h2>Découvrez notre solution tout-en-un pour révolutionner votre gestion</h2>
                        <div class=" d-flex">
                            <div style="width: 10%;">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div style="width: 90%;">
                                <h6>Billetterie en Ligne</h6>
                                <p>Créez votre billetterie en ligne personnalisée en quelques clicks, gérez vos inscriptions en toute simplicité, gangez du temps, et offrez une expérience inoubliable à vos participants !</p>
                            </div>
                        </div>

                        <div class=" d-flex">
                            <div style="width: 10%;">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div style="width: 90%;">
                                <h6>Contrôle d'Accès</h6>
                                <p>Optimisez et sécurisez le contrôle des accès pour une fluidité maximle.</p>
                            </div>
                        </div>

                        <div class=" d-flex">
                            <div style="width: 10%;">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div style="width: 90%;">
                                <h6>Cagnottes et Collectes de Fonds</h6>
                                <p>Gérez vos cagnottes et collectes de fonds avec une transparence et une sécurité totales.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="card form-signin p-4 rounded shadow" >
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section style="vertical-align: middle;">
            <div class="container" style="vertical-align: middle;">
                <div class="row d-flex justify-content-between align-items-center" >
                    <div class="col-md-4 col-lg-4">
                        <h2>Découvrez notre solution tout-en-un pour révolutionner votre gestion</h2>
                    </div>
                    <div  class="col-md-4 col-lg-4" >
                        Inscritp
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.form-signin {
    background-color: #fff !important;
}
</style>