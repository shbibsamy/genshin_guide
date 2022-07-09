<template>
    <router-link :to="{ name: 'Info', params: { characterInfoString: JSON.stringify(weaponInfo) }}" @mouseover.native="hover = true" @mouseleave.native="hover = false" class="link card" @click="loadCurrentCharacter()">
        <span>{{ weaponInfo.name }}</span>
        <div v-bind:class="weaponInfo.vision, 'presentation'">
            <img class="icon" :src="imgUrls.icon"  v-bind:alt="weaponInfo.name">
        </div>
    </router-link>
</template>
<script>
export default {
    name: "WeaponCard",
    props: {
        weaponName: {
            type: String,
            required: true,
        }
    },
    data: function() {
        return {
            weaponInfo: {},
            imgUrls: {},
            hover: false,
        }
    },
    methods: {
        imageLoadError() {
            
        },
        getImgUrl(type) {
            return this.imgUrls[type];
        },
        loadCurrentWeapon() {
            this.$store.commit("CURRENT_WEAPON_UPDATE", this.weaponInfo);
        }
    },
    beforeCreate() {
        fetch(`https://api.genshin.dev/weapons/${this.weaponName}`)
        .then(response => response.json())
        .then(json => {
            this.weaponInfo = json;
            for (const [key, value] of Object.entries(this.weaponInfo)) {
                if (typeof value === "string") {
                    console.log(this.weaponInfo);
                    if(key.rarity > 3) {
                        this.weaponInfo[key] = value.toLowerCase().replace('-', ' ');
                    }
                }
            }
            console.log(this.weaponInfo);
            this.imgUrls.icon = 'img/weapons/icons/'+this.weaponName.replace('-', ' ')+'.png';
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