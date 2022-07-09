<template>
    <router-link :to="{ name: 'Info', params: { characterInfoString: JSON.stringify(characterInfo) }}" @mouseover.native="hover = true" @mouseleave.native="hover = false" class="link card" @click="loadCurrentCharacter()">
        <span>{{ characterInfo.name }}</span>
        <div class="information">
            <img class="info" :src="characterImgUrls.weapon" v-bind:alt="characterInfo.weapon">
            <img class="info" :src="characterImgUrls.vision" v-bind:alt="characterInfo.weapon">
            <img class="info" :src="characterImgUrls.nation" v-bind:alt="characterInfo.weapon">
        </div>
        <div v-bind:class="characterInfo.vision, 'presentation'">
            <img class="icon" :src="characterImgUrls.icon"  v-bind:alt="characterInfo.name">
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
    data: function() {
        return {
            characterInfo: {},
            characterImgUrls: {},
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
            console.log(this.characterInfo);
            this.characterImgUrls.icon = 'img/characters/icons/'+this.characterName+'.webp';
            this.characterImgUrls.weapon = 'img/info-icons/weapons/'+this.characterInfo.weapon+'.webp';
            this.characterImgUrls.nation = 'img/info-icons/nations/'+this.characterInfo.nation+'.webp';
            this.characterImgUrls.vision = 'img/info-icons/elements/'+this.characterInfo.vision+'.webp';
            
        })
    }
}
</script>
<style>
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
    background-color: #FAB632;
}
.electro {
    background-color: #AF8EC1;
}
.pyro {
    background-color: #EF7939;
}
.hydro {
    background-color: #4CC2F1;
}
.cryo {
    background-color: #9FD6E3;
}
.dendro {
    background-color: #A5C931;
}
.anemo {
    background-color: #74C2A8;
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