<template>
    <article class="comment">
        <div class="comment-header">
            <h4>{{ comment.title}}</h4>
            <span class="comment-username">Posted by: {{ comment.username }} </span>
            <span class="comment-date"> On: {{ comment.date }}</span>
        </div>
        <div class="comment-body">
            <p>
                {{comment.contents}}
            </p>
        </div>
    </article>
</template>
<script>
export default {
    name: "Comment",
    props: {
        comment: null,
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style scoped>
.comment {
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}
</style>