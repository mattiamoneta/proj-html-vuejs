<script>
export default {
    name: 'MenuCategory',
    props: {
        title: String,
        link: String,
        image: String
    }
}
</script>

<template>
    <div class="card text-bg-dark border-0 rounded-0 card-zoomin">
        <img :src="image" class="card-img" :alt="title">
        <div class="card-img-overlay overlay-transparent d-flex justify-content-center align-items-center">
            <h5 class="card-title small text-uppercase">{{ title }}</h5>
        </div>
    </div>
</template>

<style scoped>
.overlay-transparent {
    background-color: rgba(0, 0, 0, .6);
}

.card-zoomin {
    overflow: hidden;
}

.card-zoomin img {
    transition: all .2s ease;
}

.card-zoomin:hover {
    cursor: pointer;
}

.card-zoomin:hover img {
    transform: scale(1.1);
}
</style>