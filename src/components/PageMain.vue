<script>

import { store } from '../store';

import SectionTitle from './SectionTitle.vue';
import DishesCard from './DishesCard.vue';
import MenuCategory from './MenuCategory.vue';
import BlogPost from './BlogPost.vue';

export default {
    name: 'PageMain',
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    },
    components: {
        SectionTitle,
        DishesCard,
        MenuCategory,
        BlogPost
    }
}
</script>

<template>
    <main>

        <!-- Service Key Features -->
        <section class="overlap" id="section-keyfeatures">
            <div class="container py-4 bg-white">
                <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 text-center py-4">
                    <div v-for="feature in store.keyFeatures" class="col">
                        <h5 class="text-uppercase small text-secondary my-4 my-md-2 my-lg-0"><i :class="feature.icon"
                                class="me-2"></i> {{
                                    feature.title }}</h5>
                    </div>

                </div>
            </div>
        </section>

        <!-- Popular Dishes -->
        <section>
            <SectionTitle title="our most popular dishes" />

            <div class="container">
                <div class="row">
                    <DishesCard v-for="dishes in store.popularDishes" :image="getImagePath(dishes.image)"
                        :caption="dishes.title" :price="dishes.price" id="section-dishes" />
                </div>

                <div class="row py-5">
                    <div class="col text-center">
                        <a href="#section-menu" class="btn-pill">start your order <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="container-fluid" id="order-discount">
                <img :src="getImagePath('svg-0.svg')" alt="" class="h-75">
            </div>
        </section>


        <!-- Menu -->
        <section class="mb-5" id="section-menu">
            <SectionTitle title="menu categories" btnTitle="view the full menu" btnHref="#section-menu" />

            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    <div class="col-lg" v-for="item in store.linksOrder">
                        <MenuCategory :title="item.title" :image="getImagePath(item.image)" />
                    </div>
                </div>

                <!-- Menu Features -->
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5 pb-5">
                    <div v-for="feature in store.menuFeatures" class="col text-center py-5 feature-card">
                        <i :class="feature.icon" class="fa-3x mb-4" :style="{ 'color': feature.color }"></i>
                        <h5 class="text-uppercase small">{{ feature.title }}</h5>
                    </div>
                </div>
            </div>

        </section>

        <!-- Hero Section -->
        <section id="bg-phone">
            <div class="container py-5">
                <div class="row py-5">
                    <div class="col text-md-start text-center">
                        <h4 class="text-white">Download Our</h4>
                        <h1 class="text-goldenrod">Ordering App</h1>

                        <div class="app-download mt-5">
                            <a href="#"><img :src="getImagePath('app-store-badge.png')" alt="App Store Download"
                                    class="me-3"></a>
                            <a href="#"><img :src="getImagePath('play-store-badge.png')" alt="Play Store Download"></a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- News -->
        <section class="py-5 mb-5" id="section-news">

            <SectionTitle title="latest news" btnTitle="read more news" btnHref="#" />

            <div class="container">
                <div class="row">
                    <div class="col-lg col-12" v-for="post in store.posts">
                        <BlogPost :title="post.title" :image="getImagePath(post.thumbnail)" :content="post.content" />
                    </div>
                </div>
            </div>
        </section>



    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/colors' as *;

.feature-card i {
    transition: all .15s ease;
}

.feature-card:hover i {
    color: $ms-color-deepSeaGreen !important;
}
</style>