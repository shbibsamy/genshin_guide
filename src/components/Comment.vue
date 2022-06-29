<template>
    <article class="comment">
        <div class="comment-header">
            <h4>Comment Title</h4>
            <span class="comment-username">Posted by: USERNAME </span>
            <span class="comment-date">On: DATE/00/00</span>
        </div>
        <div class="comment-body">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem nulla neque 
                laborum quasi distinctio ducimus cumque possimus repellat dolor nisi accusamus, 
                voluptate fugit nesciunt nam explicabo, recusandae optio tempora?
            </p>
        </div>
    </article>
</template>
<script>
export default {
    name: "Comment",
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