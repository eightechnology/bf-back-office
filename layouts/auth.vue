<template>
    <div>
        <section class="bg-home bg-circle-gradiant d-flex align-items-center">
        <div class="bg-overlay bg-overlay-white"></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card form-signin p-4 rounded shadow">
                        <!-- <form>
                            <a href="index.html">
                                <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="70">
                            </a>
                            <h5 class="mb-3 text-center">Rejoignez nous</h5>

                            <div class="form-floating mb-2">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Adresse e-mail ou téléphone</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword"
                                    placeholder="Mot de passe">
                                <label for="floatingPassword">Mot de passe</label>
                            </div>

                            <div class="d-flex justify-content-between">
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">Se souvenir de moi</label>
                                    </div>
                                </div>
                                <p class="forgot-pass mb-0"><a href="reset-password.html"
                                        class="text-dark small fw-bold">J'ai oublié mon mot de passe</a></p>
                            </div>

                            <button class="btn btn-primary w-100" type="submit">Connexion</button>

                            <div class="col-12 text-center mt-3">
                                <p class="mb-0 mt-3"><small class="text-dark me-2">Vous n'avez pas de compte ?</small>
                                    <router-link to="register" class="text-dark fw-bold">S'inscrire</router-link>
                                </p>
                            </div>

                            <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>
                        </form> -->
                    <slot />
                    </div>
                </div>
            </div>
        </div> 
    </section>
    </div>
</template>
<script>
export default {

}
</script>