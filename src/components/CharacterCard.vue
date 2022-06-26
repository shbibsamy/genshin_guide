<template>
    <router-link to="/characters/info" class="link card">
        <h3>{{ characterInfo.name }}</h3>
        <div class="information">
            <span class="info"> {{ characterInfo.weapon }} </span>
            <span class="info"> {{ characterInfo.vision }} </span>
            <span class="info"> {{ characterInfo.nation }} </span>
        </div>
        <div v-bind:class="characterInfo.vision, 'presentation'">
            <img class="icon" v-bind:src="`https://api.genshin.dev/characters/${characterInfo.name}/icon-big`" @error="imageLoadError" v-bind:alt="characterInfo.name">
        </div>
        <!-- <img v-bind:src="'@/assets/img/info-icons/bow.webp'" v-bind:alt="characterInfo.weapon"> -->
        <!-- <img v-bind:src="`@/assets/img/info-icons/${characterInfo.nation}`" v-bind:alt="characterInfo.nation">
        <img v-bind:src="`@/assets/img/info-icons/${characterInfo.vision}`" v-bind:alt="characterInfo.vision"> -->
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
    beforeMount() {
        fetch(`https://api.genshin.dev/characters/${this.characterName}`)
        .then(response => response.json())
        .then(json => {
            this.characterInfo = json;
            for (const [key, value] of Object.entries(this.characterInfo)) {
                if (typeof value === "string") {
                    this.characterInfo[key] = value.toLowerCase().replace(/ /g,"-");;
                    if (this.characterInfo[key] === "kamisato-ayaka") {
                        this.characterInfo[key] = "ayaka"
                    }
                    if (this.characterInfo[key] === "kaedehara-kazuha") {
                        this.characterInfo[key] = "kazuha"
                    }
                    if (this.characterInfo[key] === "sangonomiya-kokomi") {
                        this.characterInfo[key] = "kokomi"
                    }
                    if (this.characterInfo[key] === "raiden-shogun") {
                        this.characterInfo[key] = "raiden"
                    }
                    if (this.characterInfo[key] === "kujou-sara") {
                        this.characterInfo[key] = "sara"
                    }
                } else {
                    // for (const [innerKey, innerValue] of Object.entries(this.characterInfo[key])) {
                    //     console.log(innerKey)
                    //     this.characterInfo[key][innerKey] = innerValue.toLowerCase();
                    // }
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
    height: 160px;
}

</style>