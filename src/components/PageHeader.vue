<script>
export default {
    name: 'PageHeader',
    props: {
        navLinks: Array
    }
}
</script>

<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div class="container">
                <a class="navbar-brand" href="#">
                    LOGO
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="link in navLinks">
                            <a class="nav-link" aria-current="page" :href="link.href">{{ link.title }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Jumbotron -->
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-5">
                    <h2>Hungry?</h2>
                    <h1>Great Food <br />Delivered</h1>
                    <a href="#" class="btn btn-primary">CLICK ME</a>
                </div>
            </div>
        </div>
    </header>
</template>