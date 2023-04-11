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
    <div class="container">
        <div class="row text-center py-5">
            <div class="col">
                <h1 class="text-capitalize">{{ title }}</h1>
            </div>
            <div v-if="btnTitle != undefined" class="col">
                <a :href="btnHref" class="btn">{{ btnTitle }}</a>
            </div>
        </div>
    </div>
</template>