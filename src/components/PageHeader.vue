<script>

import { store } from '../store.js';

export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    },
    props: {
        titleSmall: String,
        titleBigWhite: String,
        titleBigYellow: String,
        jumboHeight: Number
    }
}
</script>

<template>
    <header :class="`vh-${jumboHeight}`">
        <div class="container h-100">

            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg py-5 navbar-dark">
                <a class="navbar-brand" href="#">
                    <img src="/takeout-logo.png" alt="takeout logo">
                </a>

                <button class="nav-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="toggler-custom">
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                        <div class="line-3"></div>
                    </span>
                </button>

                <div class="offcanvas offcanvas-end text-white bg-marshland" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="ms-btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close">&#x2715;</button>
                    </div>
                    <div class="offcanvas-body text-end">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-4 pe-lg-0">
                            <li class="nav-item dropdown ms-4 mb-4 mb-lg-0" v-for="link in store.linksNavbar">
                                <a v-if="link.dropdown != undefined" class="ms-nav-link dropdown-toggle" aria-current="page"
                                    :href="link.href" data-bs-toggle="dropdown">{{
                                        link.title
                                    }}</a>
                                <a v-else class="ms-nav-link" aria-current="page" :href="link.href">{{
                                    link.title
                                }}</a>

                                <ul class="dropdown-menu dropdown-menu-dark" v-if="link.dropdown != undefined">
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
                </div>

            </nav>

            <!-- Jumbotron -->
            <div class="row" v-if="titleSmall != undefined && titleBigWhite != undefined">
                <div class="col-lg-5 v-center text-center text-sm-start">
                    <h2 class="text-white text-slide-in-d2">{{ titleSmall }}</h2>
                    <h1 class="text-goldenrod mb-5 text-slide-in-d1">{{ titleBigYellow }} <span class="d-block text-white">{{
                        titleBigWhite }}</span></h1>
                    <a href="#" class="btn-pill text-slide-in-d3 ">view our menu <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </header>
</template>