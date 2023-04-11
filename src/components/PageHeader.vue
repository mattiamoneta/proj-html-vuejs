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
            <nav class="navbar navbar-expand-lg py-4">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="/takeout-logo.png" alt="">
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item" v-for="link in store.linksNavbar">
                                <a class="nav-link" aria-current="page" :href="link.href">{{ link.title }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#"><i
                                        class="fa-solid fa-cart-shopping"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Jumbotron -->
            <div class="row">
                <div class="col-lg-5 v-center">
                    <h2>Hungry?</h2>
                    <h1>Great Food <br />Delivered</h1>
                    <a href="#" class="btn btn-primary">CLICK ME</a>
                </div>
            </div>
        </div>
    </header>
</template>