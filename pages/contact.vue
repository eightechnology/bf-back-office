<template>
    <div>
        <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-0">Nous contactez</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                    <li class="breadcrumb-item text-capitalize"><NuxtLink to="/">Billetfacile</NuxtLink></li>
                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Contactez-nous</li>
                </ul>
            </nav>
        </div>

        <div class="row">
            <div class="col-md-5 col-lg-4 order-md-last mt-4">
                <div class="card rounded shadow p-4 border-0">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h5 mb-0">Nos informations</span>
                    </div>
                    <ul class="list-group mb-3 border">
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-location-dot text-primary"></i> Nongo, Conakry, Guinée</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-phone text-primary"></i> (+224) 626 17 17 10</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-phone text-primary"></i> (+224) 661 17 17 10</h6>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between lh-sm p-3 border-bottom">
                            <div class="my-2">
                                <h6 class="my-0 text-muted"><i class="fa-solid fa-envelope text-primary"></i> contact@billetfacile.com</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-md-7 col-lg-8 mt-4">
                <div class="card rounded shadow p-4 border-0">
                    <h4 class="mb-3">Nos informations</h4>
                    <form class="needs-validation">
                        <div class="row g-3">
                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="firstName" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="firstName" placeholder="First Name" value="">
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="lastName" class="form-label">Prénom</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Last Name" value="">
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="username" class="form-label">Téléphone</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text bg-light text-muted border">224</span>
                                    <input type="tel" class="form-control" id="username" placeholder="Téléphone">
                                    <div class="invalid-feedback"> Your username is required. </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-12">
                                <label for="email" class="form-label">Email <span
                                        class="text-muted">(Optional)</span></label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div class="col-12">
                            <label class="form-label">Message</label>
                            <div class="form-icon position-relative">
                                <textarea name="comments" id="comments" rows="7" class="form-control ps-3"
                                    placeholder="Message :" >
                                </textarea>
                            </div>
                        </div>
                        </div>

                        <button class="w-100 btn btn-primary mt-3" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>