<template>
  <div class="characters">
  <h2>Characters</h2>
  <div class="character-badge" v-for="(character, index) in database">
  <p>{{character}} {{ index }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    
  },
  // START HERE: How to update all charas into the $store object
  computed: {
    getCharas: function() {
      this.database.forEach(character => {
        fetch(`https://api.genshin.dev/characters/${character}`)
      .then(response => response.json())
      .then(json => {
        this.data = json;
        // On met à jour le state
        this.$store.commit("CHARA_UPDATE", this.characters);
        console.log(this.$store.state.characters);
    });
      })
    }
  },
  data: function() {
    return {
    database: this.$store.state.data,
    characters: [],
    url: "https://api.genshin.dev/characters",
    }
  },
  beforeMount () {
    fetch("https://api.genshin.dev/characters")
    .then(response => response.json())
    .then(json => {
      this.data = json;
      // On met à jour le state
      this.$store.commit("DATA_UPDATE", this.data);
      console.log(this.$store.state.data);
    });
  }
}

</script>
<style>
.characters {
  min-height: 50vh;
}
</style>