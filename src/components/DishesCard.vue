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
    <div class="col text-center">
        <div class="card m-auto border-0">
            <img :src="image" class="card-img-top" :alt="caption">
            <div class="card-body">
                <h5 class="card-title text-capitalize">{{ caption }}</h5>
                <span>{{ price }}</span>
            </div>
        </div>
    </div>
</template>