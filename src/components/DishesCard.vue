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
        <div class="card m-auto border-0 rounded-0">
            <img :src="image" class="card-img-top rounded-0" :alt="caption">
            <div class="card-body">
                <h5 class="card-title text-capitalize mt-3">{{ caption }}</h5>
                <span class="text-cardinal">{{ price }}</span>
            </div>
        </div>
    </div>
</template>