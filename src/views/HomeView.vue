<template>
    <div class="home">
        <h2>Home</h2>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data: function() {
        return {
        message: ""
        }
    }
    }
</script>

<style>
.home {
    background-image: url('../../public/img/azhdaha.png');
    background-size: 100%;
    background-size: cover;
    background-position: -30rem 15rem;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

img {
    width: 100%;
}

@media screen and (min-width: 1061px) {
    .home {
        background-position: -15rem 15rem;
    }
}
</style>