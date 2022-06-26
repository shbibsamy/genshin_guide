<template>
    <article class="comment">
        <comment-head>
            <h3>Comment Title</h3>
        </comment-head>
        <comment-body>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem nulla neque 
                laborum quasi distinctio ducimus cumque possimus repellat dolor nisi accusamus, 
                voluptate fugit nesciunt nam explicabo, recusandae optio tempora?
            </p>
        </comment-body>
    </article>
</template>
<script>
export default {
    name: "CommentsBox",
    props: {
        
    },
    data: function() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style>
.comment {
    margin: auto;
}
</style>