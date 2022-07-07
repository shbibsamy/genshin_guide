<template>
    <div class="character-info">
        <h2>Character Information (mockup)</h2>
        <div class="character-header">
            <h3 class="character-name">{{characterInfo.name}}</h3>
            <img src="https://www.gamosaurus.com/wp-content/uploads/2022/03/vignette-genshin-impact-yelan-annonce-date-de-sortie-infos-patch-2-7-768x432.jpg" alt="Character portrait">
        </div>
        <div class="character-body">
            <div class="character-description">
                <h3>Description</h3>
                <p>She is a mysterious person who claims to work for the Ministry of Civil Affairs. However, she is actually the head of the Yanshang Teahouse.</p>
            </div>

            <!-- CREATE OBJECT ON MOUNT TO HOLD IMAGE URLS -->
            <ul class="character-quick-info">
                <li class="quick-info-column">
                    <h4>Vision</h4>
                    <h5>Hydro</h5>
                    <img :src="''" alt="Element">
                </li>
                <li class="quick-info-column">
                    <h4>Nation</h4>
                    <h5>Liyue</h5>
                    <img :src="'img/info-icons/nations/'+characterInfo.nation+'.webp'" alt="Nation">
                </li>
                <li class="quick-info-column">
                    <h4>Weapon</h4>
                    <h5>Bow</h5>
                    <img src="@/assets/img/info-icons/weapons/bow.webp" alt="Weapon">
                </li>
            </ul>
        </div>
        <section class="comments-section">
            <div class="new-comment">
                <CommentEmptyBox :characterName="characterName" ></CommentEmptyBox>
            </div>
            <div class="comments" v-if="currentCharacterComments.length>0">
                <Comment v-for="comment in currentCharacterComments"></Comment>
            </div>
        </section>
    </div>
</template>
<script>
import Comment from '@/components/Comment.vue'
import CommentEmptyBox from '@/components/CommentEmptyBox.vue'
export default {
    name: 'CharacterInfoView',
    components: {
    CommentEmptyBox,
    Comment,
    },
    props: {
        characterInfoString:null,
    },
    data: function(){
        return {
            currentCharacterComments: [],
            characterInfo: {},
        }
    },
    created(){
    },
    beforeMount() {
        this.characterInfo = JSON.parse(this.characterInfoString);
        this.currentCharacterComments=this.$store.state.characterComment;
    }
}
</script>
<style>
.character-header {
    margin: auto;
    width: 80%;
    padding: 1rem;
}

.character-name {
    margin: 1rem;
}

.character-body {
    margin: 5px;
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

@media (min-width: 1061px) {
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