<script>
export default {
    name: 'DishesCard',
    props: {
        image: String,
        caption: String,
        price: String
    }
}
</script>

<template>
    <div class="card-wrapper">
        <div class="card m-auto border-0 rounded-0">
            <img :src="image" class="card-img-top rounded-0" :alt="caption">

            <!-- Link -->
            <div class="card-img-overlay hoverable">
                <span href="#" class="btn-rounded mb-2"><i class="fa-solid fa-check"></i></span>
                <h5 class="small text-white">VIEW CART</h5>
            </div>
        </div>
        <h5 class="card-title text-capitalize mt-4">{{ caption }}</h5>
        <span class="text-cardinal d-block mt-2 mb-4 mb-lg-0">{{ price }}</span>
    </div>
</template>


