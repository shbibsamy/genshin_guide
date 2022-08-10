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
    data: function() {
        return {
            guideObj: {}
        }
    },
    methods: {
    },
    mounted() {
        this.guideObj = JSON.parse(this.guide);
        console.log(this.guide);
    },
}
</script>
<style scoped>
.guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 1rem;
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
    width: 60%;
}

.guide-image {
    width: 50%;
}
</style>