<script>

import { store } from '../store';

import SectionTitle from './SectionTitle.vue';
import DishesCard from './DishesCard.vue';

export default {
    name: 'PageMain',
    data() {
        return {
            store
        }
    },
    components: {
        SectionTitle,
        DishesCard
    }
}
</script>

<template>
    <main>

        <!-- Service Key Features -->
        <section>
            <div class="container py-4">
                <div class="row text-center">
                    <div v-for="feature in store.keyFeatures" class="col">
                        <span class="text-uppercase"><i :class="feature.icon"></i> {{ feature.title }}</span>
                    </div>

                </div>
            </div>
        </section>

        <!-- Popular Dishes -->
        <section>
            <SectionTitle title="our most popular dishes" />

            <div class="container">
                <div class="row">
                    <DishesCard v-for="dishes in store.popularDishes" :image="dishes.image" :caption="dishes.title"
                        :price="dishes.price" />
                </div>

                <div class="row py-5">
                    <div class="col text-center">
                        <a href="#" class="btn btn-primary">START YOUR ORDER</a>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row" id="order-discount">
                    <img src="/svg-0.svg" alt="" class="h-75">
                </div>
            </div>
        </section>


        <!-- Menu -->

        <section>
            <SectionTitle title="menu categories" />
        </section>

    </main>
</template>