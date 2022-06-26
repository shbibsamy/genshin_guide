<template>
    <article class="comment">
        <comment-head>
            <h4>Comment Title</h4>
            <span class="comment-username">Posted by: USERNAME </span>
            <span class="comment-date">On: DATE/00/00</span>
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
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}
</style>