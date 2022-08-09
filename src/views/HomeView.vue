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
        min-height: 55vh;
        background-image: url('../../public/img/azhdaha.png');
        background-size: 90vw;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    img {
        width: 100%;
    }

@media screen and (min-width: 1061px) {
    .home {
        background-size: 60vw;
    }
}
</style>