<template>
  <div class="characters">
    <h2>Characters</h2>
    <div class="cards">
        <CharacterCard v-for="(character) in this.$store.state.data.characters" :characterName=character class="character"></CharacterCard>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
export default {
  name: 'CharactersView',
  components: {
    CharacterCard
  },
  props: {
    
  },
  data: function () {
    return {
      characterInfo: [],
    }
  },
}

</script>
<style>
.characters {
  min-height: 50vh;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.character {
  border: 2px solid #F1CA99;
  width: 180px;
  margin: 10px;
  height: 235px;
}
</style>