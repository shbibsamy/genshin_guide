<template>
    <article class="empty-comment">
        <form action="#">
            <div class="comment-header">
                <h3>Comment Box</h3>
                <span>Want to leave a comment about {{characterData.name}}?</span>
                <label class="comment-title">
                    <span>Give your comment a title:</span>
                    <input type="text" class="comment-title-input" v-model="commentEntry.title">
                </label>
            </div>
            <div div class="comment-body">
                <label class="comment-textarea">
                    <span>Type your comment here:</span>
                    <textarea name="comment-contents" v-model="commentEntry.contents"></textarea>
                </label>
            </div>
            <input type="submit" name="submit" value="Post Comment" class="comment-submit-button" @click="postComment">
        </form>
    </article>
</template>
<script>
export default {
    name: "CommentEmptyBox",
    props: {
        characterName: String
    },
    data: function() {
        return {
            characterData: {
            "name": "Yelan",
            "weapon" : "bow"
            },
            commentEntry: {
                "characterName" : "",
                "title" : "",
                "contents" : ""
            }
        }
    },
    methods: {
        postComment: function(e) {
            e.preventDefault();
            let newComment = this.commentEntry;
            newComment.characterName = this.characterName;
            this.$store.commit("COMMENT_EXAMPLE_INPUT", newComment);
        }
    },
}
</script>
<style scoped>
.empty-comment {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}

.comment-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
}

.comment-title span {
    width: 80%;
}

.comment-title-input {
    width: 70%;
}

.comment-textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
}

.comment-textarea span {
    width: 80%;
}

.comment-textarea textarea{
    width: 80%;
    min-height: 10rem;
}

.comment-submit-button {
    padding: 0.5rem;
}

/* Desktop */
@media (min-width: 1061px) {

}


</style>