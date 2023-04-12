<script>

import { store } from '../store.js';

export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header class="vh-100">
        <div class="container h-100">

            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg py-5 navbar-dark">
                <a class="navbar-brand" href="#">
                    <img src="/takeout-logo.png" alt="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown ms-4" v-for="link in store.linksNavbar">

                            <a v-if="link.dropdown != undefined" class="ms-nav-link dropdown-toggle" aria-current="page"
                                :href="link.href" data-bs-toggle="dropdown">{{
                                    link.title
                                }}</a>
                            <a v-else class="ms-nav-link" aria-current="page" :href="link.href">{{
                                link.title
                            }}</a>

                            <ul class="dropdown-menu" v-if="link.dropdown != undefined">
                                <li v-for="droplink in link.dropdown"><a class="dropdown-item" :href="droplink.url">{{
                                    droplink.title }}</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="ms-nav-link" aria-current="page" href="#"><i
                                    class="fa-solid fa-cart-shopping"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Jumbotron -->
            <div class="row">
                <div class="col-lg-5 v-center">
                    <h2 class="text-white">Hungry?</h2>
                    <h1 class="text-goldenrod mb-5">Great Food <span class="d-block text-white">Delivered</span></h1>
                    <a href="#" class="btn-pill">view our menu <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </header>
</template>