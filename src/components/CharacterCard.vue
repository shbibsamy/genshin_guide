<template>
    <router-link :to="{ name: 'Info', params: { characterName : characterInfo.name } }" class="link card">
        <h3>{{ characterInfo.name }}</h3>
        <div class="information">
            <!-- <img class="info" v-bind:src="require(`@/assets/img/info-icons/weapons/${characterInfo.weapon}.webp`)" v-bind:alt="characterInfo.weapon"> -->
            <!-- <img class="info" v-bind:src="require(`@/assets/img/info-icons/elements/${characterInfo.vision}.webp`)" v-bind:alt="characterInfo.vision">
            <img class="info" v-bind:src="require(`@/assets/img/info-icons/nations/${characterInfo.nation}.webp`)" v-bind:alt="characterInfo.nation"> -->
        </div>
        <div v-bind:class="characterInfo.vision, 'presentation'">
            <img class="icon" v-bind:src="require(`@/assets/img/characters/icons/${characterInfo.name}.webp`)"  v-bind:alt="characterInfo.name">
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
        }
    },
    methods: {
        imageLoadError() {
            
        }
    },  
    created() {
        fetch(`https://api.genshin.dev/characters/${this.characterName}`)
        .then(response => response.json())
        .then(json => {
            this.characterInfo = json;
            for (const [key, value] of Object.entries(this.characterInfo)) {
                if (typeof value === "string") {
                    this.characterInfo[key] = value.toLowerCase().replace(/ /g,"-");
                }
            }
            // console.log(this.characterInfo);
        })
    }
}
</script>
<style>
.card {
    margin: auto;
}

.card h3, .card span{
    text-transform: capitalize;
}
.information {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
}

.info {
    width: 32%;
    font-size: 0.6rem;
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

.presentation {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.icon {
    padding-top: 5px;
    width: fit-content;
    height: 150px;
}

</style>