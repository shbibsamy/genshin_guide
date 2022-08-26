<template>
    <div class="character-info">
        <h2>Character Information (wip)</h2>
        <div class="character-header">
            <h3 class="character-name">{{characterInfo.name}}</h3>
            <img :src="characterImgUrls.icon" alt="Character portrait" class="character-portrait">
        </div>
        <div class="character-body">
            <div class="character-description">
                <h3>Description</h3>
                <p>{{characterInfo.description}}</p>
            </div>
            <ul class="character-quick-info">
                <li class="quick-info-column">
                    <h4>Vision</h4>
                    <h5>{{characterInfo.vision}}</h5>
                    <img :src="characterImgUrls.vision" alt="Element">
                </li>
                <li class="quick-info-column">
                    <h4>Nation</h4>
                    <h5>{{characterInfo.nation}}</h5>
                    <img :src="characterImgUrls.nation" alt="Nation">
                </li>
                <li class="quick-info-column">
                    <h4>Weapon</h4>
                    <h5>{{characterInfo.weapon}}</h5>
                    <img :src="characterImgUrls.weapon" alt="Weapon">
                </li>
            </ul>
        </div>
        <section class="comments-section">
            <div class="new-comment" v-if="this.$store.state.loggedIn.length != 0" >
                <CommentEmptyBox :characterName="characterInfo.name" @updateComments="newCommentPosted" ></CommentEmptyBox>
            </div>
            <div class="comments" v-if="currentCharacterComments.length>0">
                <Comment v-for="comment in currentCharacterComments" :comment="comment"></Comment>
            </div>
        </section>
    </div>
</template>
<script>
import Comment from '@/components/Comment.vue'
import CommentEmptyBox from '@/components/CommentEmptyBox.vue'
export default {
    name: 'CharacterDetailView',
    components: {
    CommentEmptyBox,
    Comment,
    },
    props: {
        characterInfoString:null,
    },
    data(){
        return {
            currentCharacterComments: [],
            characterInfo: {},
            characterImgUrls: {},
        }
    },
    methods:{
        newCommentPosted() {
            this.currentCharacterComments.length = 0;
            this.$store.state.characterComment.forEach(comment => {
            if(this.characterInfo.name == comment.characterName) {
                this.currentCharacterComments.push(comment);
            }
        })
        }
    },
    created(){
        this.characterInfo = JSON.parse(this.characterInfoString);
        this.characterImgUrls.icon='/img/characters/splash/'+this.characterInfo.name+'.webp';
        this.characterImgUrls.vision='/img/info-icons/elements/'+this.characterInfo.vision+'.webp';
        this.characterImgUrls.nation='/img/info-icons/nations/'+this.characterInfo.nation+'.webp';
        this.characterImgUrls.weapon='/img/info-icons/weapons/'+this.characterInfo.weapon+'.webp';
    },
    beforeMount() {
        this.$store.state.characterComment.forEach(comment => {
            if(this.characterInfo.name == comment.characterName) {
                this.currentCharacterComments.push(comment);
            }
        })
    }
}
</script>
<style scoped>
.character-header {
    margin: auto;
    width: 80%;
    padding: 1rem;
}

.character-name {
    margin: 1rem;
    text-transform: capitalize;
}

.character-body {
    margin: 5px;
}

.character-portrait {
    max-width: 700px;
}
.character-description {
    width: 60%;
    margin: auto;
    margin-bottom: 1rem;
    padding: 10px;
    border: 2px solid #FAF6EC;
}

.character-quick-info {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}

.quick-info-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32%;
    list-style: none;
    text-transform: capitalize;
}

.quick-info-column img {
    width: 100px;
    height: 100px;
}

.comments-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 90%;
    padding: 1rem;
}

@media screen and (min-width: 1061px) {
    .character-header {
    width: 50%;
    }

    .character-quick-info {
        width: 60%;
    }

    .comments-section {
    width: 60%;
    }
}

</style>