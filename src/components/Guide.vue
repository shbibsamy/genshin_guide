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
    background-color: #2D2A29;
    filter: opacity(0.95);
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
    width: 70%;
}

.guide-image {
    width: 80%;
}

@media screen and (min-width: 1061px) {
    .guide {
        width: 50%;
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
        width: 70%;
    }

    .guide-image {
        width: 80%;
    }
}
</style>