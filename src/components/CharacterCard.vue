<template>
    <router-link :to="{ name: 'Info', params: { characterInfoString: JSON.stringify(characterInfo) }}" @mouseover.native="hover = true" @mouseleave.native="hover = false" class="link card" @click="loadCurrentCharacter()">
        <span>{{ characterInfo.name }}</span>
        <div class="information">
            <img class="info" :src="imgUrls.weapon" v-bind:alt="characterInfo.weapon">
            <img class="info" :src="imgUrls.vision" v-bind:alt="characterInfo.weapon">
            <img class="info" :src="imgUrls.nation" v-bind:alt="characterInfo.weapon">
        </div>
        <div v-bind:class="characterInfo.vision, 'presentation'">
            <img class="icon" :src="imgUrls.icon"  v-bind:alt="characterInfo.name">
        </div>
    </router-link>
</template>
<script>
export default {
    name: "CharacterCard",
    props: {
        characterName: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            characterInfo: {},
            imgUrls: {},
            hover: false,
        }
    },
    methods: {
        imageLoadError() {
            
        },
        getImgUrl(type) {
            return this.characterImgUrls[type];
        },
        loadCurrentCharacter() {
            this.$store.commit("CURRENT_CHARACTER_UPDATE", this.characterInfo);
        }
    },
    beforeCreate() {
        fetch(`https://api.genshin.dev/characters/${this.characterName}`)
        .then(response => response.json())
        .then(json => {
            this.characterInfo = json;
            for (const [key, value] of Object.entries(this.characterInfo)) {
                if (typeof value === "string") {
                    this.characterInfo[key] = value.toLowerCase().replace('-', ' ');
                }
            }
            this.imgUrls.icon = 'img/characters/icons/'+this.characterName+'.webp';
            this.imgUrls.weapon = 'img/info-icons/weapons/'+this.characterInfo.weapon+'.webp';
            this.imgUrls.nation = 'img/info-icons/nations/'+this.characterInfo.nation+'.webp';
            this.imgUrls.vision = 'img/info-icons/elements/'+this.characterInfo.vision+'.webp';
            
        })
    }
}
</script>
<style scoped>
.card {
    margin: auto;
}

.card:hover {
    filter: brightness(1.2);
}

.card h3, .card span{
    text-transform: capitalize;
    font-size: 1.1rem;
}
.information {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
}

.info {
    width: 40px;
    max-height: 40px;
}

.presentation {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.icon {
    padding-top: 5px;
    width: fit-content;
    height: 156px;
}

.geo {
    background-color: rgb(250, 184, 51);
}
.electro {
    background-color: rgb(175, 142, 193);
}
.pyro {
    background-color: rgb(239, 121, 57);
}
.hydro {
    background-color: rgb(76, 194, 241);
}
.cryo {
    background-color: rgb(159, 214, 227);
}
.dendro {
    background-color: rgb(165, 201, 49);
}
.anemo {
    background-color: rgb(116, 194, 168);
}

/* Desktop */
@media screen and (min-width: 1061px) {
    .card h3, .card span{
    font-size: 1.6rem;
    }
    .information {
        height: 80px;
    }

    .info {
        width: 60px;
        max-height: 60px;
    }

    .icon {
        padding: 5px;
        width: fit-content;
        height: 262px;
    }
}

</style>