<template>
    <div class="guides">
        <h2>Guides</h2>
        <input type="button" value="Write a new guide" v-if="this.$store.state.loggedIn == 'admin'" @click="openNewGuide()">
        <div class="newGuide" v-if="newGuide==true">
        <NewGuide />
        </div>
        <section class="guide-section" >
            <article v-for="guide in guides" class="guide" @click="openGuide(guide)">
            <h3>{{ guide.title }}</h3>
            <span>Click here to read more...</span>
            </article>
        </section>
    </div>
</template>
<script>
import NewGuide from '@/components/NewGuide.vue';
import router from '@/router';

export default {
    name: 'Guides',
    components: {
        NewGuide,
    },
    data(){
        return {
        newGuide: false,
        guides:{},
        }
    },
    methods: {
        openNewGuide() {
        this.newGuide = !this.newGuide;
        },
        openGuide(guide) {
            let title = guide.title;
            router.push({name:'GuidesDetail', params: { title, 'guide':JSON.stringify(guide)}})
        }
    },
    mounted() {
        this.guides = this.$store.state.guides;
    },
}
</script>
<style scoped>
.guides {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 330px;
    margin: 0;
    padding: 0;
}

.guide-section {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
    border: 2px solid #FAF6EC;
    /* box-shadow: 0px 0px 6px 6px #adaaa3; */
}

.guide {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
    border: 2px solid #FAF6EC;
    box-shadow: 0px 0px 6px 6px #adaaa3;
}

.guide:hover {
    background-color: #adaaa3;
}

.newGuide {
    min-width: 330px;
    padding: 0;
}
input[type=button] {
    width: 200px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

@media screen and (min-width: 1061px) {
    .guides {
        min-width: 1024px;
    }
    .newGuide {
        min-width: 1024px;

    }
}
</style>