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
    <div class="col-lg col-md-6 col-12 text-center">
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


<style lang="scss" scoped>
@use '../style/partials/colors' as *;

.card-img-overlay.hoverable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .2s ease;
    opacity: 0;

}

.card-img-overlay.hoverable:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, .7);
}
</style>