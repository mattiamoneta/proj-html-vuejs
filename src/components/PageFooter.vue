<script>
import { store } from '../store.js';

export default {
    name: 'PageFooter',
    data() {
        return {
            store
        }
    },
    methods: {
        scrollUp() {
            window.scrollTo(0, 0)
        },
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <footer class="py-5">
        <div class="container py-5">
            <div class="row">

                <!-- Order -->
                <div class="col-lg col-xs-12 col-md-6 text-center text-lg-start">
                    <h5 class="text-uppercase text-white small mb-4">order online</h5>
                    <ul class="footer-links">
                        <li v-for="link in store.linksOrder" class="mb-2">
                            <a :href="link.href" class="footer-link-item">{{ link.title }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Navigate -->
                <div class="col-lg col-xs-12 col-md-6 text-center text-lg-start">
                    <h5 class="text-uppercase text-white small mb-4">navigate</h5>
                    <ul class="footer-links">
                        <li v-for="link in store.linksNavigate" class="mb-2">
                            <a :href="link.href" class="footer-link-item">{{ link.title }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Information -->
                <div class="col-lg col-xs-12 col-md-6 text-center text-lg-start">
                    <h5 class="text-uppercase text-white small mb-4">information</h5>
                    <ul class="footer-links">
                        <li v-for="link in store.linksInfos" class="mb-2">
                            <a :href="link.href" class="footer-link-item">{{ link.title }}</a>
                        </li>
                        <li class="mt-4 mb-2">
                            <a href="#"><img :src="getImagePath('app-store-badge.png')" alt="AppStore"></a>
                        </li>
                        <li>
                            <a href="#"><img :src="getImagePath('play-store-badge.png')" alt="AppStore"></a>
                        </li>
                    </ul>
                </div>

                <!-- Opening Hours -->
                <div class="col-lg col-xs-12 col-md-6 text-center text-lg-start">
                    <h5 class="text-uppercase text-white small mb-4">opening hours</h5>
                    <ul class="footer-links">
                        <li v-for="hours in store.openingHours" class="footer-link-item non-clickable mb-2">{{ hours.day }}
                            - <span class="text-goldenrod">{{
                                hours.hour }}</span></li>
                    </ul>
                </div>

                <!-- Voucher -->
                <div class="col-lg col-xs-12 text-center pt-sm-5 pt-lg-0 mt-lg-0 mt-sm-5">
                    <h5 class="text-uppercase text-white small mb-4">voucher</h5>
                    <img :src="getImagePath('footer-coupon.png')" alt="Coupon" id="footer-coupon">
                    <div class="mt-3">
                        <span class="text-white fw-bold small">Just use the code</span>
                        <h5 class="text-goldenrod fix-mb">FIRSTORDER</h5>
                        <span class="text-white fw-bold small">at checkout</span>
                    </div>
                </div>
            </div>

            <!-- Logo -->
            <div class="row py-5">
                <div class="col text-center">
                    <img :src="getImagePath('takeout-logo.png')" alt="Takeout Logo" class="footer-logo">
                </div>
            </div>

            <!-- Form -->
            <div class="row text-center">
                <div class="col-lg-6 col-12 m-auto">
                    <h2 class="text-goldenrod">Stay in the loop</h2>
                    <p class="text-white small">Sign up to receive up to date news and offers directly into your inbox:</p>
                    <div class="form py-4">
                        <input type="email" placeholder="you@email.com" class="w-100 mb-3">
                        <a href="#" class="btn-pill d-block">subscribe</a>
                    </div>
                </div>
            </div>

            <!-- Social Icons -->
            <div class="row mt-4">
                <div class="col text-center">
                    <ul class="list-inline text-white">
                        <li v-for="social in store.linksSocial" class="list-inline-item"><a :href="social.href"
                                class="social-icon p-2"><i :class="social.icon"></i></a></li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="row text-center mt-3 mb-5">
                <p class="text-goldenrod small fw-bold">&copy; Copyright 2012-2023 | Avada Theme by <a href="#"
                        class="text-white text-decoration-none">ThemeFusion</a> | All Rights Reserved | Powered by <a
                        href="#" class="text-white text-decoration-none">Wordpress</a></p>

            </div>

            <!-- Scroll Top -->
            <div class="row">
                <div class="col text-center">
                    <button class="btn-rounded btn-rounded-cardinal border-0" @click="scrollUp()">
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.fix-mb {
    margin-bottom: -2px;
}
</style>