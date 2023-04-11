<script>
export default {
    name: 'Blog Post',
    props: {
        title: String,
        image: String,
        content: String
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="col text-center">
        <div class="card m-auto border-0 rounded-0">
            <img :src="image" class="card-img-top rounded-0" :alt="title">
            <div class="card-body">
                <h3 class="card-title text-capitalize my-4">{{ title }}</h3>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>