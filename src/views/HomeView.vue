<template>
    <div class="home">
        <h2>Home</h2>
        <Guide :guide="guide" v-if="show" @click="show=false" class="guide" />
    </div>
</template>

<script>
import Guide from '@/components/Guide.vue';

export default {
    name: 'HomeView',
    components: {
    Guide,
    },
    data() {
        return {
        message: "",
        guide: '',
        show:true,
        }
    },
    created() {
        this.guide = JSON.stringify(this.$store.state.guides[0]);
    },
}
</script>

<style>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75vh;
    background-image: url('../../public/img/azhdaha.png');
    background-size: 100%;
    background-size: cover;
    background-position: -20rem 2rem;
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
}

img {
    width: 100%;
}

@media screen and (min-width: 1061px) {
    .home {
        min-height: 68vh;
        background-position: 0rem 2rem;
    }
}
</style>