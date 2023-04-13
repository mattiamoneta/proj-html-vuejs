<script setup>
import { onMounted, ref } from 'vue';
import { store } from '../store.js';
import DishesCard from './DishesCard.vue';

let localStore = ref(store);
let carousel = ref(null);
let carouselItem = ref(null);
let lastItem = ref(0);


function getImagePath(img) {
    return new URL(`../assets/${img}`, import.meta.url).href;
}

function carouselChange(type) {

    if (type >= 0) {
        lastItem.value < localStore.value.popularDishes.length - 2 ? lastItem.value++ : lastItem.value = 0;
    } else {
        lastItem.value > 0 ? lastItem.value-- : lastItem.value = localStore.value.popularDishes.length - 2;
    }

    const leftPos = carouselItem.value[lastItem.value].offsetLeft;

    carousel.value.scrollTo({
        top: 0,
        left: leftPos,
        behavior: "smooth",
    })
}


</script>

<template>
    <div class="carousel">
        <button class="carousel-control carousel-prev" @click="carouselChange(-1)">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <ul class="carousel-inner" ref="carousel">
            <li v-for="dishes in localStore.popularDishes" ref="carouselItem">
                <div class="col-4">
                    <DishesCard :image="getImagePath(dishes.image)" :caption="dishes.title" :price="dishes.price"
                        id="section-dishes" />
                </div>
            </li>
        </ul>
        <button class="carousel-control carousel-next" @click="carouselChange(0)">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>
</template>