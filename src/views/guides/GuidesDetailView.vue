<template>
    <article class="guide">
        <div class="guide-header">
            <h3>{{ guideObj.title}}</h3>
        </div>
        <div class="guide-body">
            <p class="guide-content">
                {{guideObj.content1}}
            </p>
            <img :src="guideObj.imgurl" alt="guide image" class="guide-image">
            <p class="guide-content">
                {{guideObj.content2}}
            </p>
        </div>
    </article>
</template>
<script>
export default {
    name: "Guide",
    props: {
        guide: String,
    },
    data() {
        return {
            guideObj: {}
        }
    },
    methods: {
    },
    mounted() {
        this.guideObj = JSON.parse(this.guide);
    },
}
</script>
<style scoped>
.guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}
.guide-header {
    margin: 1rem;
    padding: 1rem;
    width: fit-content;
    border: 2px solid white;
}

.guide-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.guide-content {
    margin: 1rem;
    width: 90%;
}

.guide-image {
    width: 80%;
}

@media screen and (min-width: 1061px) {
    .guide {
        width: 80%;
        max-width: 1200px;
    }
}
</style>