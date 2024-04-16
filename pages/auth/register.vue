<template>
    <div>
        <form>
            <a href="index.html">
                <img src="/images/logobf.png" class="d-block mx-auto" alt="" height="60">
            </a>
            <h5 class="mb-3 text-center">Lancez-vous</h5>

            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Harry">
                <label for="floatingInput">Nom</label>
            </div>

            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Harry">
                <label for="floatingInput">Prénom</label>
            </div>

            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Harry">
                <label for="floatingInput">Téléphone</label>
            </div>

            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
                <label for="floatingEmail">Email</label>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Mot de passe</label>
            </div>

            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">Accepter les <a href="#"
                        class="text-primary">conditions d'utilisations</a></label>
            </div>

            <button class="btn btn-primary w-100" type="submit">Inscrivez-vous</button>

            <div class="col-12 text-center mt-3">
                <p class="mb-0 mt-3"><small class="text-dark me-2">Avez-vous déjà un compte ?</small>
                    <NuxtLink to="/auth/login" class="text-dark fw-bold">Se connecter</NuxtLink>
                </p>
            </div>

            <p class="mb-0 text-muted mt-3 text-center">2024 Billetfacile.</p>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
})
</script>