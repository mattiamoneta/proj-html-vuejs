<script>
export default {
    name: 'SectionTitle',
    props: {
        title: String,
        btnTitle: String,
        btnHref: String
    }
}
</script>

<template>
    <!-- Dynamic Title w/ cta button -->
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg">
                <h2 v-if="btnTitle != undefined" class="text-capitalize text-lg-start text-center">{{ title }}</h2>
                <h2 v-else class="text-capitalize text-center">{{ title }}</h2>
            </div>
            <div v-if="btnTitle != undefined" class="col-lg text-lg-end text-center mt-4">
                <a :href="btnHref" class="btn-pill">{{ btnTitle }} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</template>